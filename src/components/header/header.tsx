import { LangEnum } from "@/assets/data";
import HeaderCLient from "./header-client";
import { getDictionary } from "@/lib/get-content";

export default function HeaderServer({ lang }: { lang: LangEnum }) {
  const dict = getDictionary(lang);

  return <HeaderCLient dict={dict} lang={lang} />;
}
