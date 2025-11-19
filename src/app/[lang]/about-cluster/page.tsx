import { LangEnum } from "@/assets/data";
import AboutClusterClient from "./client-page";
import convertDriveUrl, {
  getDictionary,
  getLocalizedContent,
  getSheet,
  splitByDash,
} from "@/lib/get-content";
import { localizeTextColumn } from "@/lib/localize";
import { PartnersList } from "@/lib/type";

export default async function AboutClusterPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const code = lang === LangEnum.en ? LangEnum.en : LangEnum.uk;

  const [rows, partnersRows] = await Promise.all([
    getLocalizedContent("cluster!A:H", code),
    getSheet("partners!A:O"),
  ]);
  
  const partnersList: PartnersList[] = Object.values(
    partnersRows.reduce((acc, row) => {
      if (!acc[row.slug]) {
        acc[row.slug] = {
          id: row.id,
          slug: row.slug,
          title: row[`title_${lang}`],
          logo_url: convertDriveUrl(row.logo_url),
        };
      }
      return acc;
    }, {})
  );

  const mission = localizeTextColumn(rows, "mission", code);
  const vision = localizeTextColumn(rows, "vision", code);
  const valuesRow = localizeTextColumn(rows, "values", code);
  const conclusion = localizeTextColumn(rows, "conclusion", code);

  const values = valuesRow.map((row) => ({
    title: splitByDash(row).title,
    description: splitByDash(row).description,
  }));

  const dict = getDictionary(code);

  return (
    <AboutClusterClient
      dictionary={dict["about-cluster"]}
      lang={code}
      mission={mission}
      vision={vision}
      values={values}
      conclusion={conclusion[0]}
      partnersList={partnersList}
    />
  );
}
