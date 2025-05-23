"use client";
import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface StatusState {
  success: boolean | null;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<StatusState>({
    success: null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ success: null, message: "" });

    const combinedData = {
      Name: `${formData.firstName} ${formData.lastName}`,
      Email: formData.email,
      Mobile: formData.phone,
      Message: formData.message,
      Service: "danielatochejuarez.com",
    };

    console.log("🟡 Submitting form to:", API_URL);
    console.log("📦 Payload:", combinedData);

    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(combinedData),
      });

      console.log("🟢 Response received:", response);

      if (response.ok) {
        setStatus({ success: true, message: "Message sent!" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const errorText = await response.text();
        console.error("🔴 API returned error response:", errorText);

        setStatus({
          success: false,
          message: "Failed to send the message. Please try again later.",
        });
      }
    } catch (error) {
      console.error("❌ Fetch threw an error:", error);

      setStatus({
        success: false,
        message: "There was an error. Please try again.",
      });
    }
  };

  return (
    <form className="mt-8 md:mt-10" onSubmit={handleSubmit}>
      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label
            htmlFor="firstName"
            className="block text-night mb-2 font-medium"
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full h-10 border border-columbiablue rounded p-2"
            required
          />
        </div>
        <div className="w-full md:w-1/2">
          <label
            htmlFor="lastName"
            className="block text-night mb-2 font-medium"
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full h-10 border border-columbiablue rounded p-2"
            required
          />
        </div>
      </div>
      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label htmlFor="email" className="block text-night mb-2 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-10 border border-columbiablue rounded p-2"
            required
          />
        </div>
        <div className="w-full md:w-1/2">
          <label htmlFor="phone" className="block text-night mb-2 font-medium">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-10 border border-columbiablue rounded p-2"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-night mb-2 font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-52 border border-columbiablue rounded p-2"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full xs:w-[200px] hover:bg-softcoral hover:drop-shadow-lg py-2 bg-night text-white text-base rounded hover:shadow-2xl"
      >
        Submit
      </button>

      {status.success !== null && (
        <div
          className={`mt-4 p-2 rounded ${
            status.success ? "text-gray-500" : " text-red-800"
          }`}
        >
          {status.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
