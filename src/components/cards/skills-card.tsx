import styled from "styled-components";
import { CardType } from "./type";
import Image from "next/image";
import microscopeIcon from "@/assets/images/icons/tabler_microscope.svg";
import medalIcon from "@/assets/images/icons/lucide_medal.svg";
import { TextBody } from "../typography";
import { COLORS } from "@/styles/colors";
import { buttonShadow } from "@/styles/effects";
import { hoverCardStyle } from "./goal-card";

export default function SkillCard({ id, text }: CardType) {
  return (
    <SkillCardStyle>
      <Image src={id === 0 ? microscopeIcon : medalIcon} alt="item-icon" />
      <TextBody>{text}</TextBody>
    </SkillCardStyle>
  );
}

const SkillCardStyle = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: ${COLORS.lighterBg};
  border: 2px solid ${COLORS.lightGreen};
  ${buttonShadow};
  display: flex;
  padding: 40px;
  gap: 44px;
  align-items: center;
  ${hoverCardStyle(COLORS.accent)}

  img {
    width: 80px !important;
    height: 80px !important;
  }

  @media (max-width: 840px) {
    padding: 24px;
    gap: 28px;

    img {
    width: 50px !important;
    height: 50px !important;
  }
  }
`;
