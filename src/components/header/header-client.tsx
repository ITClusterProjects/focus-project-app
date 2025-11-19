"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";
import { COLORS } from "@/styles/colors";
import { SmallText, TextBody } from "@/components/typography";
import logo from "@/assets/images/logo.png";
import { headerItems, LangEnum, langs } from "@/assets/data";
import { buttonShadow } from "@/styles/effects";
import { useEffect, useRef, useState } from "react";

export default function HeaderCLient({
  dict,
  lang,
}: {
  dict: any;
  lang: LangEnum;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest("button")
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const switchLang = (lng: string) => {
    const parts = pathname.split("/");
    parts[1] = lng;
    router.push(parts.join("/"));
  };

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && saved !== lang) {
      switchLang(saved);
    }
  }, []);

  return (
    <HeaderStyle>
      <Image src={logo} alt="logo" />
      <BurgerButton $isOpen={isOpen} onClick={toggleMenu}>
        <div className="burger-line" />
        <div className="burger-line" />
        <div className="burger-line" />
      </BurgerButton>
      <HeaderBody ref={menuRef} $isOpen={isOpen}>
        <HeaderItemsBlock>
          {headerItems.map((item) => {
            const isActive = (pathname.split("/")[2] || "home") === item.id;

            return (
              <HeaderItem
                $isActive={isActive}
                key={item.id}
                onClick={() => setTimeout(() => setIsOpen(false), 250)}
              >
                <Link href={`/${lang}${item.link}`}>
                  <TextBody>
                    {dict.header[item.id as keyof typeof dict.header]}
                  </TextBody>
                </Link>
                <span className={isActive ? "active" : ""}></span>
              </HeaderItem>
            );
          })}
        </HeaderItemsBlock>
        <ButtonSwitch>
          {Object.entries(langs).map(([code, label]) => {
            const isActive = lang === code;

            return (
              <button
                key={code}
                className={isActive ? "active" : ""}
                style={{
                  borderRadius:
                    code == LangEnum.uk ? "7px 0 0 7px" : "0 7px 7px 0 ",
                }}
                onClick={() => switchLang(code)}
              >
                <SmallText>{label}</SmallText>
              </button>
            );
          })}
        </ButtonSwitch>
      </HeaderBody>
    </HeaderStyle>
  );
}

const ButtonSwitch = styled.span`
  display: flex;
  border: 1px solid ${COLORS.accent};
  border-radius: 8px;
  ${buttonShadow};

  button {
    background-color: transparent;
    border: none;
    outline: none;
    transition: background-color 0.35s ease;
  }

  .active {
    background-color: ${COLORS.lightGreen};
    ${SmallText} {
      color: ${COLORS.accent};
      font-weight: 700;
    }
  }

  ${SmallText} {
    color: ${COLORS.secondary};
    padding: 4px 16px;
    transition: font-weight 0.2s ease, color 0.3s ease;
    white-space: nowrap;
  }
`;

const HeaderItem = styled.div<{
  $isActive: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  padding-bottom: 8px;
  transition: padding 0.3s ease;

  ${TextBody} {
    white-space: nowrap;
    padding: 4px 8px;
    color: ${({ $isActive }) => ($isActive ? COLORS.accent : COLORS.secondary)};
    font-weight: ${({ $isActive }) => ($isActive ? 700 : 500)};
    transition: font-weight 0.5s ease, color 0.3s ease;

    &:hover {
      color: ${COLORS.accent};
    }
  }

  span {
    position: absolute;
    bottom: -2px;
    width: 0%;
    height: 4px;
    border-radius: 20px;
    background-color: ${COLORS.accent};
    transition: width 0.5s ease;

    &.active {
      width: 100%;
    }
  }
`;

const HeaderItemsBlock = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  position: relative;
  border-bottom: 3px solid ${COLORS.lightGreen};
`;

const HeaderBody = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: absolute;
    top: 98px;
    left: 0;
    right: 0;
    background-color: ${COLORS.background};
    border-bottom: none;
    border-top: 1px solid ${COLORS.lightGreen};
    padding: 20px 32px;
    transition: all 0.35s ease;
    max-height: ${({ $isOpen }) => ($isOpen ? "400px" : "0")};
    overflow: hidden;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};

    ${HeaderItemsBlock} {
      flex-direction: column;
      gap: 16px;
      align-items: center;
      border-bottom: none;
    }
  }
`;
const HeaderStyle = styled.header`
  background-color: ${COLORS.background};
  padding: 16px 60px 12px 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: padding 0.3s ease, box-shadow 0.3s ease;
  ${buttonShadow};

  img {
    height: 70px;
    width: 205px;
  }

  @media (max-width: 1200px) {
    padding: 16px 24px 12px 24px;
    ${HeaderBody} {
      gap: 20px;
    }
    ${HeaderItem} {
      padding: 0 12px;
      padding-bottom: 8px;
    }
  }

  @media (max-width: 1024px) {
    padding: 16px 40px 12px 40px;
    ${HeaderBody} {
      gap: 24px;
      ${buttonShadow};
    }
    ${HeaderItem} {
      padding: 0 32px;
      padding-bottom: 8px;
    }
  }

  @media (max-width: 620px) {
    padding: 16px 24px 12px 24px;
    ${HeaderBody} {
      gap: 24px;
      padding-bottom: 32px;
    }
    ${HeaderItem} {
      padding: 0 32px;
      padding-bottom: 8px;
    }
    ${ButtonSwitch} {
      button {
      }
    }
  }
`;

const BurgerButton = styled.button<{ $isOpen: boolean }>`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 28px;
  position: relative;
  z-index: 200;

  .burger-line {
    width: 100%;
    height: 3px;
    background-color: ${COLORS.primary};
    border-radius: 6px;
    transition: all 0.4s ease;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      .burger-line:nth-child(1) {
        transform: rotate(45deg) translate(10px, 2.5px);
      }
      .burger-line:nth-child(2) {
        opacity: 0;
      }
      .burger-line:nth-child(3) {
        transform: rotate(-45deg) translate(12px, -5.5px);
      }
    `}

  @media (min-width: 1024px) {
    display: none;
  }
`;
