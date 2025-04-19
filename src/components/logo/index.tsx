/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { routerConfig } from "~/app/router-config";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const Logo = () => {
  return (
    <div className="flex items-center gap-3 py-3">
      <Avatar>
        <AvatarImage src="/pfp.png" />
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
      <h1>
        <Link href={routerConfig.root.path} className="flex flex-col gap-0">
          <span className="text-sm font-semibold">Anthony Mclamb</span>
          <span className="text-sm text-muted-foreground">Developer</span>
        </Link>
      </h1>
    </div>
  );
};
