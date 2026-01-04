"use client";

import { getLinkType, LangEnum, linksIcons } from "@/assets/data";
import {
  AttentionBlock,
  DefaultBodyBlock,
} from "@/components/block-components";
import PartnersListCard from "@/components/cards/partners-card";
import {
  LargeHeadline,
  SmallHeadline,
  SmallText,
  SubHeadline,
  TextBody,
} from "@/components/typography";
import { PartnerDetails, PartnersList } from "@/lib/type";
import { COLORS } from "@/styles/colors";
import Image from "next/image";
import styled from "styled-components";
import doneIcon from "@/assets/images/icons/done-orange-icon.svg";
import messagesIcon from "@/assets/images/icons/messages-icon.svg";
import handHeartIcon from "@/assets/images/icons/hand-heart-icon.svg";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { buttonShadow } from "@/styles/effects";

export default function PartnerDetailsPage({
  item,
  lang,
  btnText,
}: {
  item: PartnerDetails;
  lang: LangEnum;
  btnText: string;
}) {
  const router = useRouter();

  return (
    <PageBlock $isMainBlock>
      <Button
        text={btnText}
        styleProps={{
          bgColor: "transparent",
          txColor: COLORS.secondary,
          brColor: COLORS.secondary,
          brWidth: "2px",
        }}
        click={() => {
          router.push(`/${lang}/about-cluster`);
        }}
      />
      <MainBlock>
        <div data-type="main-block">
          <div data-type="main-block_title">
            <span>
              <LargeHeadline>{item.title}</LargeHeadline>
              <SmallHeadline>{item.subtitle}</SmallHeadline>
            </span>
            <Image
              data-type="logo-block_mobile"
              src={item.logo_url}
              alt={item.title}
              width={200}
              height={200}
            />
          </div>
          <div data-type="main-block_items">
            {item.infoItems.map((elem, i) => (
              <div key={i} className="d-flex align-items-start gap-3">
                <Image className="mt-1" src={doneIcon} alt="done-icon" />
                <TextBody>{elem}</TextBody>
              </div>
            ))}
          </div>
        </div>
        <Image
          data-type="logo-block"
          src={item.logo_url}
          alt={item.title}
          width={200}
          height={200}
        />
      </MainBlock>
      <TextBody className="fw-bold">{item.motto}</TextBody>
      {item.quote.before && (
        <MainBlock
          data-type="quote-block"
          className="d-flex flex-column align-items-center"
        >
          <span className="w-100">
            <Image src={messagesIcon} alt="messages-icon" />
            <TextBody>{item.quote.before}:</TextBody>
          </span>
          <AttentionBlock
            $bgColor={COLORS.lighterBg}
            $txtColor={COLORS.secondary}
            $isIcon={false}
          >
            <TextBody>{item.quote.after}</TextBody>
          </AttentionBlock>
        </MainBlock>
      )}

      {item.thankfulWords && (
        <DefaultBodyBlock
          $isMainBlock
          className="d-flex flex-column align-items-center pt-3"
        >
          <AttentionBlock
            $bgColor={"transparent"}
            $txtColor={COLORS.accent}
            $isIcon={true}
            className="w-100 d-flex align-items-center gap-3"
          >
            <Image src={handHeartIcon} alt="hand-heart-icon" />
            <TextBody
              className="fw-bold border-0"
              style={{ color: COLORS.accent }}
            >
              {item.thankfulWords}
            </TextBody>
          </AttentionBlock>
        </DefaultBodyBlock>
      )}
      {item.links.length !== 0 && (
        <MainBlock data-type="links-block" className="d-flex flex-column gap-3">
          <SmallHeadline>
            {lang === LangEnum.en ? "Links" : "Посилання"}:
          </SmallHeadline>
          <div>
            {" "}
            {item.links.map((link) => {
              const type = getLinkType(link);

              if (type === "website") {
                return (
                  <a
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SmallText>{link}</SmallText>
                  </a>
                );
              }

              return (
                <a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={linksIcons[type].icon} alt={type} />
                  <SmallText>{linksIcons[type].name}</SmallText>
                </a>
              );
            })}
          </div>
        </MainBlock>
      )}
    </PageBlock>
  );
}

const MainBlock = styled.div`
  display: flex;
  align-items: start;
  gap: 60px;

  &[data-type="quote-block"] {
    gap: 40px;
    span {
      display: flex;
      align-items: start;
      gap: 24px;

      img {
        width: 40px;
        height: 40px;
      }
    }
  }
  &[data-type="links-block"] {
    padding-top: 24px;
    padding-bottom: 40px;
    width: 100%;
    ${SmallHeadline} {
      color: ${COLORS.accent};
    }
    div {
      display: flex;
      /* flex-direction: column; */
      gap: 40px;
      row-gap: 24px;
      flex-wrap: wrap;
      width: 100%;
      a {
        display: flex;
        align-items: center;
        gap: 12px;
        img {
          height: 28px;
          width: 28px;
        }
        p {
          color: ${COLORS.secondary};
          text-decoration: 1.5px solid underline;
          text-underline-offset: 2px;
          text-decoration-color: ${COLORS.accent};
        }
      }
    }
  }
`;

const PageBlock = styled(DefaultBodyBlock)`
  background-color: ${COLORS.background};
  ${AttentionBlock} {
    padding: 32px;
    width: 80%;
    border: 1px solid ${COLORS.lightGreen};
    ${buttonShadow};
  }
  .fw-bold {
    width: 100%;
    border-bottom: 1px solid ${COLORS.primary};
    color: ${COLORS.secondary};
  }
  [data-type="main-block"] {
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    [data-type="main-block_title"] {
      display: flex;
      flex-direction: column;
      gap: 24px;

      span {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      [data-type="logo-block_mobile"] {
        display: none;
      }
    }

    ${LargeHeadline} {
      color: ${COLORS.accent};
    }
    ${SmallHeadline} {
      color: ${COLORS.secondary};
    }
  }

  [data-type="logo-block"] {
    width: 22%;
    height: auto;
    object-fit: contain;
    border: 3px solid ${COLORS.accent};
    border-radius: 20px;
    padding: 24px;
  }

  [data-type="main-block_items"] {
    display: flex;
    flex-direction: column;
    gap: 24px;
    ${TextBody} {
      color: ${COLORS.secondary};
    }
  }

  @media (max-width: 1120px) {
    [data-type="main-block"] {
      width: 75%;
    }

    [data-type="logo-block"] {
      width: 30%;
    }
  }

  @media (max-width: 985px) {
    ${AttentionBlock} {
      padding: 32px;
      width: 90%;
    }
  }
  @media (max-width: 790px) {
    ${LargeHeadline} {
      white-space: nowrap;
    }
    ${AttentionBlock} {
      padding: 32px;
      width: 100%;
    }
    ${DefaultBodyBlock} {
      padding: 0;
    }
    [data-type="logo-block"] {
      display: none;
    }
    [data-type="main-block"] {
      width: 100%;
    }
    [data-type="main-block_title"] {
      width: 100%;
      flex-direction: row !important;
      align-items: center;
      span {
        width: 60%;
      }
    }

    [data-type="logo-block_mobile"] {
      display: flex !important;
      width: auto;
      height: auto;
      object-fit: contain;
      border: 3px solid ${COLORS.accent};
      border-radius: 20px;
      padding: 24px;
    }
  }

  @media (max-width: 550px) {
    [data-type="main-block_title"] {
      width: 100%;
      flex-direction: column !important;
      align-items: center;
      span {
        width: 100%;
      }
    }
    [data-type="logo-block_mobile"] {
      width: 50%;
    }
  }

  @media (max-width: 500px) {
    [data-type="logo-block_mobile"] {
      width: 70%;
    }
  }

  @media (max-width: 430px) {
    [data-type="logo-block_mobile"] {
      width: 80%;
    }
  }
`;
