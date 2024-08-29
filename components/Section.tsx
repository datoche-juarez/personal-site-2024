import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string; // Allows for additional custom classes
}

const Section = ({ id, children, className }: SectionProps) => {
  return (
    <section
      id={id}
      className={clsx(
        " px-4 border border-red mx-auto",
        "sm:px-4 lg:px-[121px] xl:px-[0px]",
        "xl:max-w-screen-xl xl:mx-auto",
        "mb-10 md:mb-14",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
