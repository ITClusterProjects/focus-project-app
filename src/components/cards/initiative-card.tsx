import styled from "styled-components";
import { SmallText, TextBody } from "../typography";
import { COLORS } from "@/styles/colors";
import { hoverCardStyle } from "./goal-card";

export default function InitiativeCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <CardStyle>
      <TextBody className="fw-bold">{title}</TextBody>
      <SmallText>{text}</SmallText>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  flex: 0 0 30%;
  background-color: transparent;
  border-radius: 20px;
  border: 3px solid ${COLORS.lighterBg};
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
  padding: 24px;

  ${TextBody} {
    color: ${COLORS.primary};
  }
  ${SmallText} {
    color: ${COLORS.secondary};
  }

  ${hoverCardStyle(COLORS.lightGreen)};
  @media (max-width: 974px) {
    flex: 0 0 48%;
  }
  @media (max-width: 810px) {
    flex: 0 0 48.5%;
  }

  @media (max-width: 670px) {
    flex: 0 0 99%;
  }
`;
