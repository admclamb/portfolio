import { buttonVariants } from "@/components/ui/button";
import { FileUser } from "lucide-react";
import Link from "next/link";

export const ResumeButton = () => {
  return (
    <Link
      href="/resume.pdf"
      className={buttonVariants({ variant: "outline" })}
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume <FileUser />
    </Link>
  );
};
