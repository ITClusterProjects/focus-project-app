import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import { ManropeFont } from "@/styles/fonts";
import type { Metadata } from "next";
import convertDriveUrl, {
  getDictionary,
  getLocalizedContent,
  getStaticContent,
} from "@/lib/get-content";
import { LangEnum } from "@/assets/data";
import FooterClient from "@/components/footer";
import HeaderCLient from "@/components/header/header-client";
import LoaderOverlay from "@/components/loading";

export const metadata: Metadata = {
  title: "FOCUS RIVNE",
  description: "Food Opportunities and Curriculum for Unique Skills",
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const code = lang === LangEnum.en ? LangEnum.en : LangEnum.uk;
  const [dict, disclaimer, contacts, rowDisclaimerImg] = await Promise.all([
    getDictionary(code),
    getLocalizedContent("main!C:D", code),
    getStaticContent("contacts!A:J"),
    getStaticContent("main!E:E"),
  ]);

  const disclaimerImg =
    convertDriveUrl(rowDisclaimerImg[0].disclaimer_img) ?? null;

  return (
    <html className={ManropeFont.variable}>
      <body>
        <LoaderOverlay />
        <HeaderCLient dict={dict} lang={code} />
        {children}
        <FooterClient
          dict={dict}
          lang={code}
          disclaimer={disclaimer[0].disclaimer}
          contacts={contacts[0]}
          disclaimerImgSrc={disclaimerImg}
        />
      </body>
    </html>
  );
}
