import styled, { css } from "styled-components";
import { ButtonText, SubHeadline, TextBody } from "../typography";
import { COLORS } from "@/styles/colors";
import { buttonShadow } from "@/styles/effects";
import Image from "next/image";
import { CardType } from "./type";

export default function GoalCard({ id, text }: CardType) {
  return (
    <GoalCardStyle>
      <SubHeadline>0{id}</SubHeadline>
      <TextBody>{text}</TextBody>
    </GoalCardStyle>
  );
}

export const hoverCardStyle = ($color: string) => css`
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05), 0 0 4px ${$color};
  }
`;

const GoalCardStyle = styled.div`
  background-color: ${COLORS.lightGreen};
  border-left: 8px solid ${COLORS.primary};
  border-radius: 20px;
  padding: 24px 24px 24px 32px;
  flex: 0 0 47%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${buttonShadow};
  ${hoverCardStyle(COLORS.primary)}

  ${SubHeadline} {
    color: ${COLORS.accent} !important;
  }
  ${TextBody} {
    color: ${COLORS.secondary};
  }

  @media (max-width: 768px) {
    padding: 16px 16px 16px 24px;
    border-width: 5px;
  }
`;
