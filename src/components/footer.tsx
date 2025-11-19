"use client";

import { headerItems, LangEnum } from "@/assets/data";
import disclaimerImg from "@/assets/images/disclaimer.png";
import logoFocus from "@/assets/images/logo_focus.png";
import Image from "next/image";
import styled from "styled-components";
import { COLORS } from "@/styles/colors";
import { ButtonText, SmallText, TextBody } from "./typography";
import { usePathname } from "next/navigation";
import Link from "next/link";
import instagramIcon from "@/assets/images/icons/instagram-icon.svg";
import facebookIcon from "@/assets/images/icons/facebook-icon.svg";
import { useState } from "react";

export default function FooterClient({
  dict,
  lang,
  disclaimer,
  disclaimerImgSrc,
  contacts,
}: {
  dict: any;
  lang: LangEnum;
  disclaimer: string;
  disclaimerImgSrc: string;
  contacts: any;
}) {
  const pathname = usePathname();
  const [currentSrc, setCurrentSrc] = useState(disclaimerImgSrc ?? disclaimerImg.src);

  return (
    <FooterStyle>
      <Image
        src={currentSrc}
        className="logo-disclaimer"
        width={1620}
        height={100}
        alt="disclaimer-img"
        onError={() => setCurrentSrc(disclaimerImg.src)}
      />
      <BodyFooter>
        <div data-type="init-block">
          <span className="d-flex flex-column w-100 gap-4">
            <Image className="logo-focus" src={logoFocus} alt="logo-focus" />
            <ButtonText>
              Food Opportunities and Curriculum for Unique Skills
            </ButtonText>
          </span>
          <span className="w-100 d-flex align-items-center column-gap-4 row-gap-3 flex-wrap">
            {headerItems.map((item) => {
              const isActive = (pathname.split("/")[2] || "home") === item.id;

              return (
                <FooterItem
                  $isActive={isActive}
                  key={item.id}
                  href={`/${lang}/${item.link}`}
                >
                  {dict.header[item.id]}
                </FooterItem>
              );
            })}
          </span>
        </div>
        <div data-type="main-block">
          <SmallText>{disclaimer}</SmallText>
          <div>
            <span>
              <TextBody
                className="fw-bold text-decoration-underline text-nowrap"
                style={{ color: COLORS.primary }}
              >
                {dict.footer.span1}:
              </TextBody>
              <TextBody className="d-flex flex-wrap gap-2">
                {dict.footer.phone}: <strong>{contacts.phone_cluster}</strong>
              </TextBody>
              <TextBody className="d-flex flex-wrap gap-2">
                {dict.footer.email}: <strong>{contacts.email_cluster}</strong>
              </TextBody>
            </span>
            <span>
              <TextBody
                className="fw-bold text-decoration-underline text-nowrap"
                style={{ color: COLORS.accent }}
              >
                {dict.footer.span2}:
              </TextBody>
              <Link
                target="_blank"
                href={contacts.instagram_cluster}
                rel="noopener noreferrer"
              >
                <Image src={instagramIcon} alt="insta-icon" />
                <TextBody>Instagram</TextBody>
              </Link>
              <Link
                target="_blank"
                href={contacts.facebook_cluster}
                rel="noopener noreferrer"
              >
                <Image src={facebookIcon} alt="fc-icon" />
                <TextBody>Facebook</TextBody>
              </Link>
            </span>
          </div>
        </div>
      </BodyFooter>
    </FooterStyle>
  );
}

const FooterItem = styled(Link)<{
  $isActive: boolean;
}>`
  background-color: ${({ $isActive }) =>
    $isActive ? COLORS.primary : "transparent"};
  color: ${({ $isActive }) =>
    $isActive ? COLORS.background : COLORS.secondary};
  font-weight: ${({ $isActive }) => ($isActive ? 700 : 500)};
  transition: font-weight 0.5s ease, color 0.3s ease;
  border-radius: 12px;

  padding: ${({ $isActive }) => ($isActive ? "8px 20px" : "0px")};
  white-space: nowrap;
  ${TextBody.componentStyle.rules.join("")};
`;

const BodyFooter = styled.div`
  background-color: ${COLORS.lighterBg};
  padding: 40px 60px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;

  ${ButtonText} {
    color: ${COLORS.accent};
  }

  div {
    &[data-type="init-block"] {
      width: 25%;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    &[data-type="main-block"] {
      width: 65%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 24px;
      ${SmallText} {
        color: ${COLORS.secondary};
      }
      ${TextBody} {
        color: ${COLORS.secondary};
        white-space: break-spaces;
      }
      div {
        width: 100%;
        display: flex;
        align-items: start;
        justify-content: space-between;
        gap: 24px;
        span {
          display: flex;
          flex-direction: column;
          gap: 16px;

          a {
            display: flex;
            gap: 16px;
          }
        }
      }
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: start;
    gap: 32px;
    padding: 40px;
    div {
      width: 100% !important;
    }
  }

  @media (max-width: 640px) {
    padding: 40px 32px;
    div {
      &[data-type="main-block"] {
        div {
          flex-direction: column;
        }
      }
    }
  }
`;

const FooterStyle = styled.footer`
  width: 100%;
  padding-top: 40px;
  background-color: ${COLORS.background};
  .logo-disclaimer {
    width: 100%;
    height: 150px;
    object-fit: contain;
    object-position: bottom;
  }
  .logo-focus {
    width: 150px;
    height: 80px;
    object-fit: contain;
  }

  @media (max-width: 910px) {
    padding-top: 0px;
    .logo-disclaimer {
      height: 100px;
    }
  }

  @media (max-width: 710px) {
    padding-top: 0px;
    .logo-disclaimer {
      height: 70px;
    }
  }
`;
