import styled from "styled-components";
import { TextBody } from "../typography";
import goalIcon from "@/assets/images/icons/goal-item-icon.svg";
import Image from "next/image";
import { COLORS } from "@/styles/colors";
import { buttonShadow } from "@/styles/effects";
import { hoverCardStyle } from "./goal-card";

export default function TechnologiesCard({ item }: { item: string }) {
  return (
    <CardStyle>
      <Image src={goalIcon} alt="goal-icon" />
      <TextBody>{item}</TextBody>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center !important;
  gap: 24px;
  border: 1px solid ${COLORS.accent};
  background-color: ${COLORS.background};
  border-radius: 20px;
  flex: 0 0 30%;
  ${buttonShadow};
  ${hoverCardStyle(COLORS.accent)};

${TextBody} {
    text-align: center;
}  

@media (max-width: 974px) {
   flex: 0 0 48%;
}
@media (max-width: 810px) {
  flex: 0 0 48.5%;
}

@media (max-width: 590px) {
  flex: 0 0 70%;
}

@media (max-width: 500px) {
  flex: 0 0 99%;
}
`;
