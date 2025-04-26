"use client";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileUser } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";
import { routerConfig } from "~/app/router-config";
import { Button } from "~/components/ui/button";
import { links } from "~/config";

export default function HeroActions() {
  const navigateToResume = () => {
    redirect(routerConfig.resume.path);
  };

  return (
    <ul className="flex items-center gap-6">
      <li>
        <Button variant="outline" onClick={navigateToResume}>
          Resume <FileUser />
        </Button>
      </li>
      <li>
        {links[0] && (
          <a href={links[0].href} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        )}
      </li>
      <li>
        {links[1] && (
          <a href={links[1].href} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
          </a>
        )}
      </li>
    </ul>
  );
}
