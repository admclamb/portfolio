import { routerConfig } from "@/app/router-config";
import Link from "next/link";

export const Logo = () => {
  return (
    <h1>
      <Link href={routerConfig.root.path} className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Anthony Mclamb</span>
        <span className="text-sm text-muted-foreground">Developer</span>
      </Link>
    </h1>
  );
};
