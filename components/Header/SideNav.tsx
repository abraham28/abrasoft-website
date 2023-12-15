"use client";
import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./SideNav.module.scss";

import * as constants from "@/app/constants";
import useOutsideClick from "@/helpers/outsideClick";
import NavLinks from "./NavLinks";

interface SideNavProps {
  open: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ open, onClose }) => {
  const sideNavRef = useRef<HTMLDivElement>(null);

  useOutsideClick(sideNavRef, onClose);

  return (
    <div
      ref={sideNavRef}
      className={`${styles.sideNav}${open ? ` ${styles.open}` : ""}`}
    >
      <div className={styles.actionContainer}>
        <span className={styles.closeButton} onClick={onClose}>
          <FaTimes size={32} color="var(--secondary)" />
        </span>
      </div>
      <div className={styles.linksContainer}>
        <NavLinks onClick={onClose} />
      </div>
      <div className={styles.footer}>{constants.COPYRIGHT}</div>
    </div>
  );
};

export default SideNav;
