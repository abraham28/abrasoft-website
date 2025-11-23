"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLinks.module.scss";
import * as constants from "@/app/constants";
import { getLinkProps } from "@/app/utils/linkProps";

interface NavLinksProps {
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onClick }) => {
  const pathname = usePathname();

  return (
    <>
      {constants.NAV_LINKS_ARR.map((link) => {
        const baseLinkProps = getLinkProps(link);
        return (
          <Link
            key={link.path}
            {...baseLinkProps}
            className={`${styles.link}${
              pathname === link.path ? ` ${styles.activeLink}` : ""
            }`}
            onClick={onClick}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
