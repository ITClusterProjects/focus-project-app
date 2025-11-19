"use client";

import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { SubHeadline } from "./typography";
import leftArrow from "../assets/images/icons/left-carousel-arrow.svg";
import rightArrow from "../assets/images/icons/right-carousel-arrow.svg";
import { COLORS } from "@/styles/colors";
import Button from "./button";
import { useRouter } from "next/navigation";
import { LangEnum } from "@/assets/data";

interface CarouselProps {
  lang: LangEnum;
  images: StaticImageData[];
  baseSpeed?: number; 
  fastSpeed?: number;
  text: string;
  button1: string;
  button2: string;
}

export default function MainImageCarousel({
  lang,
  images,
  baseSpeed = 20,
  fastSpeed = 120,
  text = "",
  button1,
  button2,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [speed, setSpeed] = useState(baseSpeed);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      const width = track.scrollWidth / 2;

      posRef.current += (direction === "right" ? speed : -speed) / 60;
      posRef.current = ((posRef.current % width) + width) % width;
      track.style.transform = `translateX(${-posRef.current}px)`;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [speed, direction]);

  const accelerate = (target: number) => {
    setSpeed((prev) => prev * 0.7 + target * 0.3);
  };

  return (
    <Wrapper>
      <Track ref={trackRef}>
        {[...images, ...images].map((src, i) => (
          <ImageWrapper key={i}>
            <Image src={src} alt="slide" fill />
            <Overlay />
          </ImageWrapper>
        ))}
      </Track>

      <BodyBlock>
        <SubHeadline>{text}</SubHeadline>
        <span>
          <Button
            text={button1}
            styleProps={{
              bgColor: COLORS.primary,
              txColor: COLORS.background,
              brColor: COLORS.primary,
              brWidth: "2px",
            }}
            click={() => {
              router.push(`${lang}/about-project`);
            }}
          />
          <Button
            text={button2}
            styleProps={{
              bgColor: COLORS.background,
              txColor: COLORS.primary,
              brColor: COLORS.primary,
              brWidth: "2px",
            }}
            isStarIcon
            click={() => {
              router.push(`${lang}/about-cluster`);
            }}
          />
        </span>
      </BodyBlock>
    </Wrapper>
  );
}

const BodyBlock = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 15;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;

  ${SubHeadline} {
    color: ${COLORS.secondary};
    background-color: ${COLORS.lighterBg};
    border-radius: 20px;
    padding: 40px;
  }

  span {
    display: flex;
    gap: 24px;
  }
`;

const Track = styled.div`
  display: flex;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  will-change: transform;
`;

const ImageWrapper = styled.div`
  position: relative;
  min-width: 50vw;
  height: 100%;
  flex-shrink: 0;

  img {
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.35);
`;

const Controls = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  gap: 4px;
  z-index: 15;

  button {
    border: 2px solid ${COLORS.lightGreen};
    background: rgba(255, 255, 255, 0.85);
    font-size: 17px;
    cursor: pointer;
    transition: 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 12px 4px 16px;

    &:hover {
      background: #fff;
      transform: scale(1.1);
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    min-height: 70vh;

    ${ImageWrapper} {
      width: 70vw;
    }

    ${BodyBlock} {
      gap: 32px;
      span {
        gap: 20px;
      }
    }
  }
  @media (max-width: 768px) {
    min-height: 65vh;
    ${ImageWrapper} {
      width: 80vw;
    }
    ${Controls} {
      top: 12px;
      right: 18px;
    }
    ${BodyBlock} {
      width: 80%;
      gap: 24px;
      span {
        gap: 12px;
      }
    }
  }
  @media (max-width: 620px) {
    ${ImageWrapper} {
      width: 100vw;
    }
    ${Overlay} {
      background: rgba(255, 255, 255, 0.28);
    }
    ${BodyBlock} {
      span {
        flex-direction: column;
        align-items: start;
        transition: flex-direction 0.25s easy;
      }
    }
  }
  @media (max-width: 480px) {
    ${Controls} {
      top: 10px;
      right: 12px;
    }
    ${BodyBlock} {
      width: 95%;
    }
  }
`;
