import { LangEnum } from "@/assets/data";
import convertDriveUrl, {
    getDictionary,
  getSheet,
  parseParagraphs,
  splitTextByColon,
} from "@/lib/get-content";
import PartnerDetailsPage from "./client-page";
import { PartnerDetails, PartnersList } from "@/lib/type";

export default async function PartnerPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const code = lang === LangEnum.en ? LangEnum.en : LangEnum.uk;

  const rows = await getSheet("partners!A:O");

const dict = getDictionary(code);

  const rowsForPartner = rows
    .filter((r) => r.slug === slug)
    .sort((a, b) => Number(a.block_order) - Number(b.block_order));

  const partnerInfo: PartnerDetails = {
    id: rowsForPartner[0].id,
    slug: rowsForPartner[0].slug,
    title: rowsForPartner[0][`title_${lang}`],
    logo_url: convertDriveUrl(rowsForPartner[0].logo_url),
    subtitle: rowsForPartner[0][`subtitle_${lang}`],
    infoItems: parseParagraphs(rowsForPartner[0][`infoItems_${lang}`]),
    quote: splitTextByColon(rowsForPartner[0][`quote_${lang}`] || ""),
    motto: rowsForPartner[0][`motto_${lang}`],
    thankfulWords: rowsForPartner[0][`thankfulWords_${lang}`],
  };

  return <PartnerDetailsPage btnText={dict["about-cluster"].buttonText} item={partnerInfo} lang={code} />;
}
