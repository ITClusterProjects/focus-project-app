import { COLORS } from "@/styles/colors";
import { ButtonText } from "../typography";
import doneDarkOrangeIcon from "@/assets/images/icons/done-rounded-dark-orange-icon.svg";
import styled from "styled-components";
import { CardType } from "./type";
import Image from "next/image";

export function AdvantageItem({ text }: CardType) {
  return (
    <AdvantageItemStyle>
      <Image src={doneDarkOrangeIcon} alt="done-dark-orange-icon" />
      <ButtonText>{text}</ButtonText>
    </AdvantageItemStyle>
  );
}

const AdvantageItemStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  img {
    width: 40px !important;
    height: 40px !important;
    border: none !important;
  }
  ${ButtonText} {
    color: ${COLORS.secondary};
  }
`;