import Image from "next/image";
import lightIcon from "@/assets/images/icons/light-icon.svg";
import { SmallText, TextBody } from "../typography";
import styled from "styled-components";
import { COLORS } from "@/styles/colors";

export default function SpecialityCard({
  item,
  index,
}: {
  item: string;
  index: number;
}) {
  const isNew = item.includes("(new)");
  const cleanText = item.replace("(new)", "").trim();

  return (
    <CardStyle key={index} className="item">
      <Image src={lightIcon} alt="light-icon" />
      <TextBody>{cleanText}</TextBody>

      {isNew && <SmallText>NEW</SmallText>}
    </CardStyle>
  );
}

const CardStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 40px;
    height: 40px;
    padding: 6px 4px;
    border: 1px solid ${COLORS.primary};
    border-radius: 16px;
  }

  ${TextBody} {
    color: ${COLORS.secondary};
  }

  ${SmallText} {
    color: ${COLORS.secondary};
    font-weight: 700;
    padding: 3px 12px;
    border-radius: 20px;
    background-color: ${COLORS.background};
    border: 1px solid ${COLORS.secondary};
    transition: all 0.3s ease;
    cursor: pointer;
    border-color: ${COLORS.secondary};
    box-shadow: 0 0 10px ${COLORS.secondary}35;
  }
`;
