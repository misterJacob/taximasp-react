import React, { useEffect} from "react";
import { FaTaxi } from "react-icons/fa";
import {
  HeaderStyled,
  ButtonStyled,
  ButonWrapper,
} from "./styled/Header.styled";
import Navigation from "./Navigation";
import Flag from "react-world-flags";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Header = () => {
  const { i18n,  } = useTranslation(["navigation"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);


  const lngs = {
    en: {
      nativeName: "English",
      code: "gb",
    },
    de: { nativeName: "Deutsch", code: "de" },
    dk: { nativeName: "Danish", code: "dk" },
  };


  return (
    <>
      <div className="header-wrap">
        <HeaderStyled>
          <FaTaxi />
          <h1>Taxi Driver Maspalomas </h1>

          <ButonWrapper>
            {Object.keys(lngs).map((lng) => (
              <ButtonStyled
                key={lng}
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
                }}
                type="submit"
                onClick={() => {
                  i18n.changeLanguage(lng);
                }}
              >
                {lngs[lng].nativeName}
                <Flag code={lngs[lng].code} height="16" width="30" className="flag" />
              </ButtonStyled>
            ))}
          </ButonWrapper>
        </HeaderStyled>
      </div>{" "}
      <Navigation />
    </>
  );
};

export default Header;
