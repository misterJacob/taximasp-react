import React from "react";

import {
  FaTwitter as twitter,
  FaFacebook as facebook,
  FaLinkedin as linkedin,
  FaWhatsapp as whatsapp,
} from "react-icons/fa";
import { NavigationStyled, SNavLink } from "./styled/Navigation.styled";

import { useTranslation } from "react-i18next";

const social = [
  { name: "Twitter", link: "https://twitter.com", icon: twitter },
  { name: "Facebook", link: "https://facebook.com", icon: facebook },
  { name: "Linkedin", link: "https://linkedin.com", icon: linkedin },
  { name: "Whatsapp", link: "https://whatsapp.com", icon: whatsapp },
];

const Navigation = () => {
  const nav = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  
  const { t } = useTranslation();
  return (
    <NavigationStyled>
      <div className="ofintrest">
        {nav.map((item, index) => (
          <SNavLink key={index} to={item.link}>
            <h2> {t(item.name)} </h2>
          </SNavLink>
        ))}
      </div>
      <div className="social">
        {social.map((item, index) => (
          <a key={index} href={item.link}>
            <item.icon />
          </a>
        ))}
      </div>

      {/* <div className="ofintrest">
        <SNavLink to={"/"}>
          <h2>{t("home")}</h2>
        </SNavLink>
        <SNavLink to={"/about"}>
          <h2>{t("about")}</h2>
        </SNavLink>
        <SNavLink to={"/contact"}>
          <h2>{t("contact")}</h2>
        </SNavLink>
      </div>

      <div className="social">
        <li>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://whatsapp.com">
            <FaWhatsapp />
          </a>
        </li>
      </div> */}
    </NavigationStyled>
  );
};

export default Navigation;
