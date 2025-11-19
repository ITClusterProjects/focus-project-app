"use client";

import { LangEnum } from "@/assets/data";
import Image from "next/image";
import styled from "styled-components";
import collegeLogoUk from "@/assets/images/college/college-logo_ua.png";
import collegeLogoEn from "@/assets/images/college/college-logo_en.png";
import ImageBlock from "@/components/image-block";
import { COLORS } from "@/styles/colors";
import collegePhoto from "@/assets/images/college/about-photo.png";
import collegePhoto2 from "@/assets/images/college/about-photo-2.png";
import collegePhoto3 from "@/assets/images/college/about-photo-3.png";
import specialityPhoto from "@/assets/images/college/speciality-photo.png";
import doneCheckIcon from "@/assets/images/icons/done-check-icon.svg";
import starIcon from "@/assets/images/icons/star-icon.svg";
import handIcon from "@/assets/images/icons/hand-point-icon.svg";
import websiteIcon from "@/assets/images/icons/site-scan-icon.svg";
import instaIcon from "@/assets/images/icons/instagram-dark-icon.svg";
import fcIcon from "@/assets/images/icons/facebook-dark-icon.svg";
import {
  LargeHeadline,
  SmallHeadline,
  SmallText,
  SubHeadline,
  TextBody,
} from "@/components/typography";
import {
  AttentionBlock,
  BaseBlock,
  DefaultBodyBlock,
} from "@/components/block-components";
import bgImg from "@/assets/images/college/bg-3.png";
import rocketIcon from "@/assets/images/icons/rocket-icon.svg";
import contactIcon from "@/assets/images/icons/contact-icon.svg";
import SpecialityCard from "@/components/cards/speciality-card";
import TechnologiesCard from "@/components/cards/technologies-card";
import InitiativeCard from "@/components/cards/initiative-card";
import Link from "next/link";

export default function AboutCollegeClient({
  dictionary,
  lang = LangEnum.uk,
  specialities,
  technologies,
  developmentStudyProgram,
  initiatives,
  contacts,
}: {
  dictionary: any;
  lang: LangEnum;
  specialities: string[];
  technologies: string[];
  developmentStudyProgram: string[];
  initiatives: { title: string; text: string }[];
  contacts: any;
}) {
  
  return (
    <PageBlock>
      <ImageBlock
        bgColor={"transparent"}
        imgWidth="40%"
        blockWidth="55%"
        image={collegePhoto}
        brImgColor={COLORS.primary}
      >
        <Image
          src={lang === LangEnum.en ? collegeLogoEn : collegeLogoUk}
          alt="college-logo"
          className="college-photo"
        />
        <TextBody>{dictionary["college-about-texts"][0]}</TextBody>
        <AttentionBlock
          $bgColor={COLORS.lightGreen}
          $txtColor={COLORS.accent}
          $isIcon={false}
        >
          <TextBody className="fw-bold">
            {dictionary["college-about-texts"][1]}
          </TextBody>
        </AttentionBlock>
      </ImageBlock>
      <div>
        <ImageBlock
          bgColor={COLORS.lighterBg}
          imgWidth="40%"
          blockWidth="55%"
          image={specialityPhoto}
          titleColor={COLORS.secondary}
          brImgColor={COLORS.accent}
          position="row-reverse"
          className="align-items-start"
        >
          <SmallHeadline>{dictionary.speciality.title}:</SmallHeadline>
          <SpecialityCards>
            {specialities.map((item, index) => (
              <SpecialityCard key={index} item={item} index={index} />
            ))}
          </SpecialityCards>
        </ImageBlock>
        <DefaultBodyBlock
          className="pt-0"
          style={{ backgroundColor: COLORS.lighterBg, paddingBottom: "40px" }}
          $isMainBlock
        >
          <AttentionBlock
            $bgColor={COLORS.background}
            $txtColor={COLORS.secondary}
            $isIcon={false}
          >
            <TextBody>{dictionary.speciality["conclusion-text"]}</TextBody>
          </AttentionBlock>
        </DefaultBodyBlock>
      </div>
      <TechnologiesBlock $isMainBlock>
        <SubHeadline>{dictionary.technology.title}:</SubHeadline>
        <InitiativesBlock>
          {" "}
          {technologies.map((item, index) => (
            <TechnologiesCard item={item} key={index} />
          ))}
        </InitiativesBlock>
      </TechnologiesBlock>
      <SmallBlock $isMainBlock>
        <span className="d-flex align-items-center gap-3">
          <Image className="title-img" src={rocketIcon} alt="rocket-icon" />
          <SmallHeadline>
            {dictionary["development-study-program"].title}
          </SmallHeadline>
        </span>
        {developmentStudyProgram.length === 1 ? (
          <TextBody>{developmentStudyProgram[0]}</TextBody>
        ) : (
          developmentStudyProgram.map((item, i) => (
            <AttentionBlock
              key={i}
              $bgColor="transparent"
              $txtColor={COLORS.secondary}
              $isIcon={true}
              className="d-flex flex-row align-items-start gap-3 w-100"
            >
              <Image src={starIcon} alt={`${i}-icon`} />
              <TextBody>{item}</TextBody>
            </AttentionBlock>
          ))
        )}
      </SmallBlock>
      <ImageBlock
        bgColor={"transparent"}
        imgWidth="35%"
        blockWidth="60  %"
        image={collegePhoto2}
        titleColor={""}
        brImgColor={""}
        position="row-reverse"
      >
        <SpanTitle>{dictionary.info.title}:</SpanTitle>
        <div className="d-flex flex-column gap-3">
          {dictionary.info.items.map((item: string, index: number) => (
            <span key={index} className="d-flex align-items-center gap-3">
              <Image src={doneCheckIcon} alt="done-check-icon" />
              <TextBody>{item}</TextBody>
            </span>
          ))}
        </div>
      </ImageBlock>
      <ImageBlock
        bgColor={COLORS.lighterBg}
        imgWidth="35%"
        blockWidth="60%"
        image={collegePhoto3}
        titleColor={COLORS.accent}
        brImgColor={""}
        position="row"
      >
        <SmallHeadline>{dictionary.info.title2}:</SmallHeadline>
        <span className="d-flex flex-column gap-3">
          {dictionary.info.items2.map((item: string, index: number) => (
            <span key={index} className="d-flex align-items-center gap-3">
              <Image src={handIcon} alt="hand-icon" />
              <TextBody style={{ color: COLORS.secondary }}>{item}</TextBody>
            </span>
          ))}
        </span>
        <AttentionBlock
          $bgColor={COLORS.background}
          $txtColor={COLORS.secondary}
          $isIcon={false}
          className="d-flex flex-row align-items-start gap-3 w-100 *:w-100"
        >
          <SmallText className="fw-bold">
            {dictionary.info.additionalText2}
          </SmallText>
        </AttentionBlock>
      </ImageBlock>
      <DefaultBodyBlock $isMainBlock>
        <SmallHeadline>
          {dictionary.info["college-initiative"].title}:
        </SmallHeadline>
        <InitiativesBlock>
          {initiatives.map((item, index) => (
            <InitiativeCard key={index} title={item.title} text={item.text} />
          ))}
        </InitiativesBlock>
        <TextBody
          className="fw-bold w-100 text-center"
          style={{ color: COLORS.accent }}
        >
          {dictionary.info["college-initiative"].text}
        </TextBody>
      </DefaultBodyBlock>
      <SmallBlock $isMainBlock>
        <span className="d-flex align-items-center gap-3">
          <Image className="title-img" src={contactIcon} alt="contact-icon" />
          <SmallHeadline style={{ color: COLORS.primary }}>
            {dictionary.info["contact-info"].title}
          </SmallHeadline>
        </span>
        <div data-type="contacts-block">
          <span>
            <TextBody className="d-flex flex-wrap gap-2">
              {dictionary.info["contact-info"].phone}:{" "}
              <strong>{contacts.phone_college}</strong>
            </TextBody>
            <TextBody className="d-flex flex-wrap gap-2">
              {dictionary.info["contact-info"].email}:{" "}
              <strong>{contacts.email_college}</strong>
            </TextBody>
            <TextBody className="d-flex gap-2">
              {dictionary.info["contact-info"].address}:{" "}
              <strong>{contacts.address_college}</strong>
            </TextBody>
          </span>
          <span>
            <Link
              target="_blank"
              href={contacts.website_college}
              rel="noopener noreferrer"
            >
              <Image src={websiteIcon} alt="web-icon" />
              <TextBody>{dictionary.info["contact-info"].website}</TextBody>
            </Link>
            <Link
              target="_blank"
              href={contacts.instagram_college}
              rel="noopener noreferrer"
            >
              <Image src={instaIcon} alt="insta-icon" />
              <TextBody>Instagram</TextBody>
            </Link>
            <Link
              target="_blank"
              href={contacts.facebook_college}
              rel="noopener noreferrer"
            >
              <Image src={fcIcon} alt="fc-icon" />
              <TextBody>Facebook</TextBody>
            </Link>
          </span>
        </div>
      </SmallBlock>
    </PageBlock>
  );
}

const InitiativesBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const SpanTitle = styled(LargeHeadline)`
  background-color: ${COLORS.lighterBg} !important;
  color: ${COLORS.primary} !important;
  padding: 16px 24px;
  border-radius: 24px;
`;

const SmallBlock = styled(DefaultBodyBlock)`
  ${SmallHeadline}, ${TextBody} {
    color: ${COLORS.secondary};
  }
  background-color: ${COLORS.lightGreen};
  ${AttentionBlock} {
    box-shadow: none;
    padding: 0;
  }

  [data-type="contacts-block"] {
    width: 60%;
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
`;

const TechnologiesBlock = styled(DefaultBodyBlock)`
  ${SubHeadline} {
    color: ${COLORS.secondary};
  }

  div {
    width: 65%;
    row-gap: 28px;
    column-gap: 40px;
  }

  background-image: url(${bgImg.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  @media (max-width: 1352px) {
    background-size: contain;
    div {
      width: 80%;
      row-gap: 16px;
      column-gap: 32px;
    }
    ${SubHeadline} {
      width: 70%;
    }
  }

  @media (max-width: 1352px) {
    div {
      width: 100%;
      row-gap: 16px;
      column-gap: 32px;
    }
  }

  @media (max-width: 974px) {
    background-size: contain;
    background-position-x: calc(100% + 200px);
    div {
      width: 80%;
      gap: 16px;
      justify-content: start;
    }
  }

  @media (max-width: 810px) {
    background-image: none;
    div,
    ${SubHeadline} {
      width: 100%;
      gap: 16px;
      justify-content: start;
    }
  }

  
@media (max-width: 590px) {
  div {
    justify-content: center;
  }
}
`;

const SpecialityCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  column-gap: 80px;
  row-gap: 24px;
`;

const PageBlock = styled.div`
  background-color: ${COLORS.background};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;

  .college-photo {
    width: 100%;
    height: 80px;
    object-fit: contain;
    object-position: left;
  }

  @media (max-width: 974px) {
    gap: 54px;

    ${SmallBlock} {
      .title-img {
        width: 40px;
        height: 40px;
      }
      [data-type="contacts-block"] {
        width: 80%;
        gap: 40px;

        strong {
          white-space: break-spaces;
        }
      }
    }
  }

  @media (max-width: 810px) {
    gap: 32px;
  }

  @media (max-width: 715px) {
    .college-photo {
      width: 80%;
      height: 60px;
    }
    ${SmallBlock} {
      [data-type="contacts-block"] {
        width: 100%;
        justify-content: start;
        gap: 40px;
      }
    }
  }

  @media (max-width: 515px) {
    ${SmallBlock} {
      [data-type="contacts-block"] {
        width: 100%;
        flex-direction: column-reverse;
        justify-content: start;
        gap: 40px;
      }
    }
  }
`;
