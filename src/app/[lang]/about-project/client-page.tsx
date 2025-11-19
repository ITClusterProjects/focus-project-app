"use client";

import styled from "styled-components";
import {
  LargeHeadline,
  SmallHeadline,
  SubHeadline,
  TextBody,
} from "@/components/typography";
import { COLORS } from "@/styles/colors";
import photoProj from "@/assets/images/project/photo-project.png";
import bgImg from "@/assets/images/project/bg-img-1.png";
import featuresImg from "@/assets/images/project/features-img.png";
import starIcon from "@/assets/images/icons/star-icon.svg";
import Image from "next/image";
import GoalCard from "@/components/cards/goal-card";
import { AdvantageItem } from "@/components/cards/advantage-card";
import SkillCard from "@/components/cards/skills-card";
import bgImg2 from "@/assets/images/project/bg-img-2.png";
import conclusionImg from "@/assets/images/project/conclusion-img.png";
import ImageBlock from "@/components/image-block";
import {
  AttentionBlock,
  BaseBlock,
  DefaultBodyBlock,
} from "@/components/block-components";

export default function AboutProjectClient({
  dictionary,
  aboutText,
  objectives,
  advantages,
}: {
  dictionary: any;
  aboutText: string[];
  objectives: string[];
  advantages: string[];
}) {
  return (
    <PageBlock>
      <AboutProjectBlock>
        <LargeHeadline>{dictionary.title}</LargeHeadline>
        <div>
          <TextBody>{aboutText[0]}</TextBody>
          <TextBody>{aboutText[1]}</TextBody>
          <Image src={photoProj} alt="photo-project" />
          <AttentionBlock
            $bgColor={COLORS.lighterBg}
            $txtColor={COLORS.secondary}
            $isIcon={true}
            className="d-flex flex-row align-items-start gap-3 w-100"
          >
            <Image src={starIcon} alt="star-icon" />
            <TextBody>{aboutText[2]}</TextBody>
          </AttentionBlock>
        </div>
      </AboutProjectBlock>
      <DefaultBodyBlock $isMainBlock={true}>
        <SubHeadline>{dictionary.objective}:</SubHeadline>
        <GoalCardBlock className="w-100 d-flex flex-wrap justify-content-between">
          {objectives.map((item, index) => (
            <GoalCard text={item} id={index + 1} key={index} />
          ))}
        </GoalCardBlock>
      </DefaultBodyBlock>
      <ImageBlock
        bgColor={COLORS.lighterBg}
        imgWidth="40%"
        blockWidth=""
        image={featuresImg}
        brImgColor={COLORS.accent}
      >
        <SubHeadline>{dictionary.advantage}:</SubHeadline>
        {advantages.map((item, index) => (
          <AdvantageItem key={index} text={item} />
        ))}
      </ImageBlock>
      <DefaultBodyBlock $isMainBlock={true}>
        <LargeHeadline>{dictionary.lab.title}</LargeHeadline>
        <TextBody>{dictionary.lab.text}</TextBody>
        <ImageBlock
          bgColor={""}
          imgWidth="30%"
          blockWidth="60%"
          brImgColor=""
          image={bgImg2}
          isMainBlock={false}
          noImgStyle
        >
          <SubHeadline>{dictionary.lab.subtitle}</SubHeadline>
          <SkillCard text={dictionary.lab.subTexts[0]} id={0} />
          <SkillCard text={dictionary.lab.subTexts[1]} id={1} />
        </ImageBlock>
      </DefaultBodyBlock>
      <ImageBlock
        bgColor={COLORS.lightGreen}
        imgWidth="25%"
        blockWidth="70%"
        image={conclusionImg}
        brImgColor={COLORS.accent}
        position="row-reverse"
      >
        <SmallHeadline>{dictionary.lab.conclusionTexts[0]}</SmallHeadline>
        <TextBody>{dictionary.lab.conclusionTexts[1]}</TextBody>
      </ImageBlock>
    </PageBlock>
  );
}

const GoalCardBlock = styled.div`
  gap: 44px;
`;

const AboutProjectBlock = styled(DefaultBodyBlock)`
  ${BaseBlock};
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;
  width: 100%;
  background-image: url(${bgImg.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right top;
  z-index: 5;

  div {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  img {
    width: 80%;
    height: auto;
    margin: 24px 0;
    border-radius: 20px;
    border: 3px solid ${COLORS.primary};
  }
`;

const PageBlock = styled.div`
  background-color: ${COLORS.background};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  ${LargeHeadline} {
    color: ${COLORS.accent};
  }
  ${TextBody} {
    color: ${COLORS.secondary};
  }

  @media (max-width: 1190px) {
    gap: 40px;
    ${AboutProjectBlock} {
      background-repeat: repeat-y;
      background-size: 30%;
      img {
        width: 90%;
      }
    }
    ${GoalCardBlock} {
      gap: 32px;
    }
  }

  @media (max-width: 910px) {
    ${AboutProjectBlock} {
      background-repeat: repeat-y;
      background-size: 25%;

      div {
        width: 80%;
      }
      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 840px) {
    gap: 32px;
    ${AboutProjectBlock} {
      gap: 28px;
      div {
        gap: 16px;
      }
      img {
        margin: 8px 0;
      }
    }
  }

  @media (max-width: 768px) {
    ${AboutProjectBlock} {
      background-image: none;
      div {
        width: 100%;
      }
    }
    ${GoalCardBlock} {
      flex-direction: column;
    }
  }
`;
