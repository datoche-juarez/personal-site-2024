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
        "px-4 border border-red mx-auto",
        "sm:px-4 lg:px-[121px]", // Apply 121px padding at lg and xl breakpoints
        "xl:max-w-screen-xl xl:px-[121px] xl:mx-auto", // Ensure padding is maintained at exactly 1280px
        "2xl:px-0 2xl:max-w-screen-xl", // For screens wider than 1280px, remove the padding
        "mb-10 md:mb-14",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
