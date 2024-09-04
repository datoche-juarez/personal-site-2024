"use client";
const ContactForm = () => {
  return (
    <form className="mt-8 md:mt-10">
      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label className="block text-black mb-2 font-medium">
            First Name
          </label>
          <input
            type="text"
            className="w-full h-10 border border-[#767676] rounded"
          />
        </div>
        <div className="w-full md:w-1/2">
          <label className="block text-black mb-2 font-medium">Last Name</label>
          <input
            type="text"
            className="w-full h-10 border border-[#767676] rounded"
          />
        </div>
      </div>
      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label className="block text-black mb-2 font-medium">Email</label>
          <input
            type="text"
            className="w-full h-10 border border-[#767676] rounded"
          />
        </div>
        <div className="w-full md:w-1/2">
          <label className="block text-black mb-2 font-medium">Phone</label>
          <input
            type="text"
            className="w-full h-10 border border-[#767676] rounded"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-black mb-2 font-medium">Message</label>
        <textarea className="w-full h-52 border border-[#767676] rounded"></textarea>
      </div>
      <button
        type="submit"
        className="w-full xs:w-[200px] hover:bg-teal  py-2 bg-black text-white text-base rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
