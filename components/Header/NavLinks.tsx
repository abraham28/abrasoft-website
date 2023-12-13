"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLinks.module.scss";

import * as constants from "@/app/constants";

const NavLinks: React.FC = () => {
  const pathname = usePathname();

  return constants.NAV_LINKS_ARR.map((item) => {
    return (
      <Link
        href={item.path}
        key={item.path}
        className={`${styles.link}${
          pathname === item.path ? ` ${styles.activeLink}` : ""
        }`}
      >
        {item.name}
      </Link>
    );
  });
};

export default NavLinks;
