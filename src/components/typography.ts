import styled from "styled-components";

export const LargeHeadline = styled.p`
  font-family: var(--font-manrope);
  font-weight: 800;
  font-size: 44px;
  line-height: 56px;
  letter-spacing: 0.2px;

  @media (max-width: 1024px) {
    font-size: 38px;
    line-height: 48px;
  }
  @media (max-width: 768px) {
    font-size: 34px;
    line-height: 44px;
  }
  @media (max-width: 620px) {
    font-size: 30px;
    line-height: 40px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const SubHeadline = styled.p`
  font-family: var(--font-manrope);
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;

  @media (max-width: 1024px) {
    font-size: 28px;
    line-height: 40px;
  }
  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 36px;
  }
  @media (max-width: 620px) {
    font-size: 24px;
    line-height: 34px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const SmallHeadline = styled.p`
  font-family: var(--font-manrope);
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;

  @media (max-width: 1024px) {
    font-size: 22px;
    line-height: 30px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
  @media (max-width: 620px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media (max-width: 480px) {
    font-size: 17px;
    line-height: 24px;
  }
`;

export const TextBody = styled.p`
  font-family: var(--font-manrope);
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;

  @media (max-width: 1024px) {
    font-size: 17px;
    line-height: 28px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }
  @media (max-width: 620px) {
    font-size: 15px;
    line-height: 24px;
  }
  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 23px;
  }
`;

export const SmallText = styled.p`
  font-family: var(--font-manrope);
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.2px;

  @media (max-width: 1024px) {
    font-size: 15px;
    line-height: 26px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 24px;
  }
  @media (max-width: 620px) {
    font-size: 14px;
    line-height: 22px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const ButtonText = styled.p`
  font-family: var(--font-manrope);
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.2px;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 620px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
