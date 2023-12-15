"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLinks.module.scss";

import * as constants from "@/app/constants";

const NavLinks: React.FC = () => {
  const pathname = usePathname();

  return constants.NAV_LINKS_ARR.map((link) => {
    return (
      <Link
        href={link.path}
        key={link.path}
        target={link.target}
        className={`${styles.link}${
          pathname === link.path ? ` ${styles.activeLink}` : ""
        }`}
      >
        {link.name}
      </Link>
    );
  });
};

export default NavLinks;
