/**
 * Utility function to generate link props for Next.js Link component
 * Handles optional target property and automatically adds rel="noopener noreferrer"
 * for external links (target="_blank")
 */
export interface NavLink {
  path: string;
  name: string;
  target?: string;
}

export interface LinkProps {
  href: string;
  target?: string;
  rel?: string;
}

export const getLinkProps = (link: NavLink): LinkProps => {
  const linkProps: LinkProps = {
    href: link.path,
  };

  if (link.target) {
    linkProps.target = link.target;
    if (link.target === "_blank") {
      linkProps.rel = "noopener noreferrer";
    }
  }

  return linkProps;
};
