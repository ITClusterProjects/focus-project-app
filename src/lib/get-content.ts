import { cache } from "react";
import { google } from "googleapis";
import { LangEnum } from "@/assets/data";
import { dictionary } from "./dictionary";
import { localizeSheet } from "./localize";
import { unstable_cache } from "next/cache";

const getAuth = cache(() => {
  return new google.auth.GoogleAuth({
    credentials: {
      type: process.env.GOOGLE_TYPE,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
    scopes: [process.env.GOOGLE_SCOPES!],
  });
});

export const getSheet = (sheetName: string) =>
  unstable_cache(
    async () => {
      const auth = getAuth();
      const sheets = google.sheets({ version: "v4", auth });

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID!,
        range: sheetName,
      });

      const [header, ...rows] = response.data.values ?? [];

      return rows.map((row) =>
        Object.fromEntries(row.map((value, i) => [header[i], value]))
      );
    },
    [`sheet-cache-${sheetName}`],
    { revalidate: 60 }
  )();

export const getLocalizedContent = async (
  sheetName: string,
  lang: LangEnum
) => {
  const data = await getSheet(sheetName);
  return localizeSheet(data, lang);
};

export const getDictionary = (lang: LangEnum) => {
  return dictionary[lang];
};

export const getStaticContent = async (sheetName: string) => {
  return await getSheet(sheetName);
};

export function splitByDash(text: string) {
  const [title, ...rest] = text.split(/[-–—]/);

  return {
    title: title.trim(),
    description: rest.join(" ").trim(),
  };
}

export const splitTextByColon = (text: string) => {
  const index = text.indexOf(":");

  if (index === -1) {
    return { before: text, after: "" };
  }

  const before = text.slice(0, index).trim();
  const after = text.slice(index + 1).trim();

  return { before, after };
};

export function parseParagraphs(cellValue: string) {
  if (!cellValue) return [];

  return cellValue
    .split(/\n{2,}/)
    .map((t) => t.trim())
    .filter(Boolean);
}

export default function convertDriveUrl(url: string): string {
  const match = url.match(/\/d\/([^/]+)\//);
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url;
}
