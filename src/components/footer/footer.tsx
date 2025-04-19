import { links } from "~/config";
import { Container } from "../container";

export const Footer = () => {
  return (
    <footer className="my-10">
      <div>
        <Container className="flex items-center justify-between px-3 py-5 text-muted-foreground lg:mb-10">
          <span className="text-sm">&copy; 2025 Anthony Mclamb</span>
          <ul className="flex items-center gap-5">
            <li>
              {links[0] && (
                <a
                  href={links[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {links[0].icon({ size: "xl" })}
                </a>
              )}
            </li>
            <li>
              {links[1] && (
                <a
                  href={links[1].href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {links[1].icon({ size: "xl" })}
                </a>
              )}
            </li>
            <li>
              {links[2] && (
                <a
                  href={links[2].href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {links[2].icon({ size: "xl" })}
                </a>
              )}
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
};
