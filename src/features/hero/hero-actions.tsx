import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileUser } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { links } from "~/config";

export default function HeroActions() {
  return (
    <ul className="flex items-center gap-6">
      <li>
        <Button variant="outline">
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
