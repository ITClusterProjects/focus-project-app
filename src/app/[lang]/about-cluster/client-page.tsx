"use client";

import { LangEnum } from "@/assets/data";
import { DefaultBodyBlock } from "@/components/block-components";
import {
  LargeHeadline,
  SmallHeadline,
  SubHeadline,
  TextBody,
} from "@/components/typography";
import { COLORS } from "@/styles/colors";
import { buttonShadow } from "@/styles/effects";
import Image from "next/image";
import styled from "styled-components";
import plusIcon from "@/assets/images/icons/plus-point-icon.svg";
import handShakeIcon from "@/assets/images/icons/handshake-icon.svg";
import { PartnersList } from "@/lib/type";
import PartnersListCard from "@/components/cards/partners-card";

export default function AboutClusterClient({
  dictionary,
  lang,
  mission,
  vision,
  values,
  conclusion,
  partnersList,
}: {
  dictionary: any;
  lang: LangEnum;
  mission: string[];
  vision: string[];
  values: { title: string; description: string }[];
  conclusion: string;
  partnersList: PartnersList[];
}) {
  return (
    <PageBlock>
      <DefaultBodyBlock $isMainBlock>
        <LargeHeadline>{dictionary.title}</LargeHeadline>
        <BodyBlock>
          <div data-type="mission">
            <SmallHeadline>{dictionary.mission}</SmallHeadline>
            <span>
              <TextBody className="fw-bold">{mission[0]}</TextBody>
              <TextBody>{mission[1]}</TextBody>
            </span>
          </div>
          <div data-type="vision">
            <SmallHeadline>{dictionary.vision}</SmallHeadline>
            <span>
              <TextBody>{vision[0]}</TextBody>
              {vision.slice(1, vision.length).map((item, index) => (
                <span
                  className="d-flex flex-row align-items-center gap-3"
                  key={index}
                >
                  <Image src={plusIcon} alt="plus-icon" />
                  <TextBody>{item}</TextBody>
                </span>
              ))}
            </span>
          </div>
        </BodyBlock>
        <InfoBlock>
          <SmallHeadline>{dictionary.values}</SmallHeadline>
          <span className="d-flex flex-column gap-3">
            {values.map((item, i) => (
              <TextBody key={i}>
                <strong>
                  {i + 1}. {item.title}
                </strong>{" "}
                — {item.description}
              </TextBody>
            ))}
          </span>
        </InfoBlock>
      </DefaultBodyBlock>
      <DefaultBodyBlock $isMainBlock>
        <span
          className="d-flex align-items-center gap-3 w-100 pb-2"
          style={{ borderBottom: `0.5px solid ${COLORS.primary}` }}
        >
          <Image src={handShakeIcon} alt="hand-shake-icon" />
          <SubHeadline>{dictionary.partners}</SubHeadline>
        </span>
        <PartnersCards>
          {partnersList.map((item) => (
            <PartnersListCard key={item.id} item={item} lang={lang} />
          ))}
        </PartnersCards>
      </DefaultBodyBlock>
      <TextBody
        className="fw-bold text-center w-75 m-auto"
        style={{ color: COLORS.primary }}
      >
        {conclusion}
      </TextBody>
    </PageBlock>
  );
}

const PartnersCards = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: start;
  width: 100%;

  @media (max-width: 1374px) {
    gap: 28px;
  }
  @media (max-width: 860px) {
    column-gap: 40px;
  }

  @media (max-width: 705px) {
    gap: 24px;
  }

  @media (max-width: 525px) {
    justify-content: center;
  }
`;

const InfoBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px;
  border-radius: 24px;
  height: auto;
  ${buttonShadow};
  border: 3px solid ${COLORS.lightGreen};

  ${TextBody} {
    color: ${COLORS.secondary};
  }

  ${SmallHeadline} {
    color: ${COLORS.accent};
  }
`;

const BodyBlock = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  div {
    ${InfoBlock.componentStyle.rules.join("")};
    border: none;
    span {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    ${SmallHeadline} {
      color: ${COLORS.secondary};
    }
    &[data-type="mission"] {
      width: 40%;
      background-color: ${COLORS.lightGreen};
    }
    &[data-type="vision"] {
      width: 60%;
      background-color: ${COLORS.lighterBg};
    }
  }
`;

const PageBlock = styled.div`
  background-color: ${COLORS.background};
  width: 100%;
  display: flex;
  flex-direction: column;
  ${LargeHeadline} {
    color: ${COLORS.primary};
  }
  ${TextBody} {
    color: ${COLORS.secondary};
  }

  @media (max-width: 1190px) {
    gap: 40px;

    ${BodyBlock}, ${DefaultBodyBlock} {
      gap: 32px;
    }
  }

  @media (max-width: 910px) {
    ${BodyBlock} {
      flex-direction: column;
      div {
        width: 100%;
        span {
          align-items: start !important;
        }
      }
    }
  }

  @media (max-width: 768px) {
    gap: 24px;
    ${BodyBlock} div, ${InfoBlock} {
      padding: 24px;
      gap: 16px;
      span {
        gap: 12px !important;
      }
    }

    ${BodyBlock}, ${DefaultBodyBlock} {
      gap: 24px;
    }
  }
`;
