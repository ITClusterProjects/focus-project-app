import { LangEnum } from "@/assets/data";
import { getDictionary, getLocalizedContent } from "@/lib/get-content";
import { localizeTextColumn } from "@/lib/localize";
import AboutProjectClient from "./client-page";

export default async function AboutProjectPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const code = lang === LangEnum.en ? LangEnum.en : LangEnum.uk;
  const rows = await getLocalizedContent("project!A:F", code);

  const aboutText = localizeTextColumn(rows, "aboutProject_text", code);
  const objectives = localizeTextColumn(rows, "objectives", code);
  const advantages = localizeTextColumn(rows, "advantages", code);

  const dict = getDictionary(code);

  return (
    <AboutProjectClient
      dictionary={dict["about-project"]}
      aboutText={aboutText}
      objectives={objectives}
      advantages={advantages}
    />
  );
}
