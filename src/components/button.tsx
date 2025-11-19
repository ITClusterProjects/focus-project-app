import Image from "next/image";
import { ButtonText } from "./typography";
import starIcon from "../assets/images/icons/star-icon.svg";
import styled, { css } from "styled-components";
import { COLORS } from "@/styles/colors";
import { buttonShadow } from "@/styles/effects";

interface ButtonStyleProps {
  bgColor: string;
  txColor: string;
  brColor: string;
  brWidth: string;
}

export default function Button({
  text,
  isStarIcon = false,
  click,
  styleProps = {
    bgColor: "transparent",
    txColor: COLORS.secondary,
    brColor: "transparent",
    brWidth: "1px",
  },
}: {
  text: string;
  isStarIcon?: boolean;
  styleProps: ButtonStyleProps;
  click: () => void
}) {
  return (
    <ButtonStyle
      className="d-flex align-items-center"
      $styleProps={styleProps}
      $isIcon={true}
      onClick={click}
    >
      <ButtonText>{text}</ButtonText>
      {isStarIcon && <Image src={starIcon} alt="star-icon" />}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<{
  $styleProps: ButtonStyleProps;
  $isIcon: boolean;
}>`
  background-color: ${({ $styleProps }) => $styleProps.bgColor};
  color: ${({ $styleProps }) => $styleProps.txColor};
  border: ${({ $styleProps }) =>
    `${$styleProps.brWidth} solid ${$styleProps.brColor}`};
  border-radius: 24px;
  padding: 14px 28px;
  ${buttonShadow};
  ${ButtonText} {
    white-space: nowrap;
  }
  ${({ $isIcon }) =>
    $isIcon &&
    css`
      gap: 8px;
    `}

  transition: background-color 0.25s ease,
              transform 0.25s ease,
              box-shadow 0.25s ease,
              border-color 0.25s ease;

  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.04);
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 768px) {
    padding: 8px 24px;
    border-radius: 20px;
  }
`;
