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
      className={clsx("pb-10 md:pb-14 mx-auto px-4 container", className)}
    >
      {children}
    </section>
  );
};

export default Section;
