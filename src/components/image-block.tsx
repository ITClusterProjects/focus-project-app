import Image, { StaticImageData } from "next/image";
import styled, { css } from "styled-components";
import { BaseBlock, DefaultBodyBlock } from "./block-components";
import { COLORS } from "@/styles/colors";
import { SmallHeadline } from "./typography";

export default function ImageBlock({
  children,
  image,
  imgWidth,
  blockWidth,
  bgColor,
  brImgColor,
  noImgStyle = false,
  isMainBlock = true,
  position = "row",
  titleColor = COLORS.secondary,
  className
}: {
  children: React.ReactNode;
  image: StaticImageData;
  imgWidth: string;
  blockWidth: string;
  bgColor?: string;
  brImgColor: string;
  noImgStyle?: boolean;
  isMainBlock?: boolean;
  position?: "row" | "row-reverse";
  titleColor?: string;
  className?: string;
}) {
  return (
    <StyleBlock
      $bgColor={bgColor || "transparent"}
      $blockWidth={blockWidth || "50%"}
      $imgWidth={imgWidth || "50%"}
      $noImgStyle={noImgStyle}
      $brImgColor={brImgColor || COLORS.secondary}
      $isMainBlock={isMainBlock}
      $position={position}
      $titleColor={titleColor}
      className={className}
    >
      <DefaultBodyBlock>{children}</DefaultBodyBlock>
      <Image className="main-img" src={image} alt="bg-image" />
    </StyleBlock>
  );
}

const StyleBlock = styled.div<{
  $imgWidth: string;
  $blockWidth: string;
  $bgColor: string;
  $brImgColor: string;
  $noImgStyle: boolean;
  $isMainBlock: boolean;
  $position: string;
  $titleColor: string;
}>`
  display: flex;
  flex-direction: ${({ $position }) => $position};
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 20px 0;
  background-color: ${({ $bgColor }) => $bgColor};

  ${({ $isMainBlock }) => $isMainBlock && BaseBlock}

  ${SmallHeadline} {
    color: ${({ $titleColor }) => $titleColor};
  }

  ${DefaultBodyBlock} {
    width: ${({ $blockWidth }) => $blockWidth};
    justify-content: space-between;
    height: 100%;
  }
  .main-img {
    width: ${({ $imgWidth }) => $imgWidth};
    height: 100%;
    object-fit: contain;
    ${({ $noImgStyle, $brImgColor }) =>
      !$noImgStyle &&
      css`
        border-radius: 20px;
        border: 3px solid ${$brImgColor};
      `}
  }

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 910px) {
    flex-direction: ${({ $position }) =>
      $position === "row-reverse" ? "column-reverse" : "column"};
    align-items: start;
    ${DefaultBodyBlock} {
      width: 100%;
    }

    .main-img {
      ${({ $noImgStyle }) =>
        !$noImgStyle
          ? css`
              width: 60%;
            `
          : css`
              display: none;
            `}
    }
  }

  @media (max-width: 768px) {
    .main-img {
      ${({ $noImgStyle }) =>
        !$noImgStyle
          ? css`
              width: 80%;
            `
          : css`
              display: none;
            `}
    }
  }

  @media (max-width: 670px) {
    .main-img {
      ${({ $noImgStyle }) =>
        !$noImgStyle
          ? css`
              width: 100%;
            `
          : css`
              display: none;
            `}
    }
  }
`;
