import { links } from "@/config";
import { Container } from "../container/container";

export const Footer = () => {
  return (
    <footer>
      <div>
        <Container className="text-muted-foreground py-5 flex justify-between items-center mb-10">
          <span className="text-sm">&copy; 2025 Anthony Mclamb</span>
          <ul className="flex items-center gap-5">
            <li>
              <a href={links[0].href} target="_blank" rel="noopener noreferrer">
                {links[0].icon({ size: "xl" })}
              </a>
            </li>
            <li>
              <a href={links[1].href} target="_blank" rel="noopener noreferrer">
                {links[1].icon({ size: "xl" })}
              </a>
            </li>
            <li>
              <a href={`mailto:${links[2].href}`}>
                {links[2].icon({ size: "xl" })}
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
};
