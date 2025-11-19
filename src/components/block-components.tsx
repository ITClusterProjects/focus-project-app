import { COLORS } from "@/styles/colors";
import { SubHeadline } from "./typography";
import styled, { css } from "styled-components";
import { buttonShadow } from "@/styles/effects";

export const DefaultBodyBlock = styled.div<{ $isMainBlock?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;

  ${({ $isMainBlock }) => $isMainBlock && BaseBlock}

  ${SubHeadline} {
    color: ${COLORS.secondary};
  }

  @media (max-width: 840px) {
    gap: 28px;
  }
`;

export const AttentionBlock = styled.div<{
  $bgColor: string;
  $txtColor: string;
  $isIcon: boolean;
}>`
  width: 100%;
  background-color: ${({ $bgColor }) => $bgColor};
  padding: 16px 20px;
  border-radius: 20px;
  ${buttonShadow};

  p {
    color: ${({ $txtColor }) => $txtColor};
  }

  ${({ $isIcon }) =>
    $isIcon
      ? css`
          img {
            width: auto !important;
            height: auto !important;
            border: none !important;
            margin: 4px 0 !important;
          }
        `
      : css`
          img {
            display: none;
          }
        `}
`;

export const BaseBlock = css`
  padding: 60px;
  transition: all 3ms ease-in;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 840px) {
    padding: 24px 40px;
  }

  @media (max-width: 768px) {
    padding: 20px 24px;
  }
`;
