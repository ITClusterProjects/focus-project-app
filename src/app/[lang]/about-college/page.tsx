import { LangEnum } from "@/assets/data";
import {
  getDictionary,
  getLocalizedContent,
  getSheet,
  getStaticContent,
} from "@/lib/get-content";
import { localizeTextColumn } from "@/lib/localize";
import AboutCollegeClient from "./client-page";

export default async function AboutCollegePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const code = lang === LangEnum.en ? LangEnum.en : LangEnum.uk;

  const [rows, initiativeRows, contacts, dict] = await Promise.all([
    getLocalizedContent("college!A:F", code),
    getSheet("college-initiatives!A:D"),
    getStaticContent("contacts!A:J"),
    getDictionary(code),
  ]);

  const initiatives = initiativeRows.map((row) => ({
    title: row[`initiative_title_${lang}`],
    text: row[`initiative_text_${lang}`],
  }));

  const specialities = localizeTextColumn(rows, "speciality", code);
  const technologies = localizeTextColumn(rows, "technologies", code);
  const developmentStudyProgram = localizeTextColumn(
    rows,
    "development-study-program",
    code
  );

  return (
    <AboutCollegeClient
      dictionary={dict["about-college"]}
      lang={code}
      specialities={specialities}
      technologies={technologies}
      developmentStudyProgram={developmentStudyProgram}
      initiatives={initiatives}
      contacts={contacts[0]}
    />
  );
}
