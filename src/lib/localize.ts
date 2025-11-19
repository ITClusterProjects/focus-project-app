import { LangEnum } from "@/assets/data";

export function localizeRow<T extends Record<string, any>>(
  row: T,
  lang: LangEnum
) {
  const localized: Record<string, any> = {};

  for (const key of Object.keys(row)) {
    if (key.endsWith(`_${lang}`)) {
      const baseKey = key.replace(`_${lang}`, "");
      localized[baseKey] = row[key];
    }
  }

  return localized as T;
}

export function localizeSheet<T extends Record<string, any>>(
  sheet: T[],
  lang: LangEnum
) {
  return sheet.map((row) => localizeRow(row, lang));
}

export function localizeTextColumn(
  rows: Record<string, string>[],
  baseKey: string,
  lang: "uk" | "en"
) {
  const result: string[] = [];

  rows.forEach((row) => {
    if (row[baseKey]) {
      result.push(row[baseKey]);
    }
  });

  return result;
}
