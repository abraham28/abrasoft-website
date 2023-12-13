"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button as BsButton, Container, NavbarBrand } from "react-bootstrap";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import { BsFacebook } from "react-icons/bs";

import CompanyLogo from "@/public/images/company-logo.webp";
import * as constants from "@/app/constants";

const renderNavLinks = (activeName: string) => {
  return constants.NAV_LINKS_ARR.map((item) => {
    return (
      <Link
        href={item.path}
        className={`${activeName === item.path ? styles.activeLink : ""}`}
        key={item.path}
      >
        {item.name}
      </Link>
    );
  });
};

const renderMobileNav = (pathname: string) => (
  <>
    <div className={styles.navLinksContainer}>{renderNavLinks(pathname)}</div>
    <div className={styles.snsLinks}>
      <Link href={constants.FACEBOOK_LINK} target="_blank" passHref>
        <BsFacebook />
      </Link>
    </div>
  </>
);

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const pathname = usePathname();

  return (
    <nav className={`${styles.navBar}${navOpen ? "" : "d-none"}`}>
      {navOpen && (
        <div className={styles.sideNav}>
          <div className={styles.sideNavToggleBtn}>
            <BsButton type="button" variant="outline" onClick={toggleNav}>
              <FaTimes size={32} color="white" />
            </BsButton>
          </div>
          {renderMobileNav(pathname)}
        </div>
      )}

      <Container fluid className={styles.innerContainer}>
        <NavbarBrand>
          <Link href={constants.HOME_ROUTE}>
            <Image
              src={CompanyLogo}
              alt="Abrasoft Logo"
              height={0}
              width={150}
              style={{ width: 150, height: "auto" }}
              className="d-inline-block align-text-top"
            />
          </Link>
        </NavbarBrand>

        <div className={styles.actionButtonsSm}>
          <BsButton
            variant="outlined"
            color="light"
            type="button"
            onClick={toggleNav}
          >
            <FaBars size={32} color="white" />
          </BsButton>
        </div>

        <div className={styles.navLinksContainer2}>
          {renderNavLinks(pathname)}
        </div>

        <div className={styles.actionButtonsLg}>
          <div className={styles.snsLinks}>
            <Link href={constants.FACEBOOK_LINK} target="_blank" passHref>
              <BsFacebook />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
