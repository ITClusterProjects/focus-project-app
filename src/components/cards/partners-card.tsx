import { PartnersList } from "@/lib/type";
import Image from "next/image";
import { TextBody } from "../typography";
import styled from "styled-components";
import { COLORS } from "@/styles/colors";
import { buttonShadow } from "@/styles/effects";
import { hoverCardStyle } from "./goal-card";
import Link from "next/link";
import { LangEnum } from "@/assets/data";

export default function PartnersListCard({
  item,
  lang,
}: {
  item: PartnersList;
  lang: LangEnum;
}) {
  return (
    <CardListStyle href={`/${lang}/about-cluster/${item.slug}`}>
      <Image
        className="logo"
        src={item.logo_url}
        alt={item.logo_url}
        width={200}
        height={200}
      />
      <TextBody>{item.title}</TextBody>
    </CardListStyle>
  );
}

const CardListStyle = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 24px 40px;
  border: 1px solid ${COLORS.accent};
  border-radius: 20px;
  max-width: 23%;
  ${buttonShadow};
  ${hoverCardStyle(COLORS.lightGreen)}

  ${TextBody} {
    color: ${COLORS.secondary};
    white-space: break-spaces;
    text-align: center;
    max-width: 100%;
  }
  img {
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 1170px) {
    min-width: 30%;
  }

  @media (max-width: 860px) {
    min-width: 45%;
  }

  @media (max-width: 705px) {
    min-width: 47%;
  }

  @media (max-width: 525px) {
    min-width: 70%;
  }

  @media (max-width: 450px) {
    min-width: 90%;
  }
`;
