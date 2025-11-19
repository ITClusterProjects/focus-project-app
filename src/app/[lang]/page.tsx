import MainImageCarousel from "@/components/image-carousel";
import img1 from "../../assets/images/carousel/img1.png";
import img2 from "../../assets/images/carousel/img2.png";
import img3 from "../../assets/images/carousel/img3.png";
import img4 from "../../assets/images/carousel/img4.png";
import img5 from "../../assets/images/carousel/img5.png";
import img6 from "../../assets/images/carousel/img6.png";
import { getDictionary, getLocalizedContent } from "@/lib/get-content";
import { LangEnum } from "@/assets/data";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const code = lang === LangEnum.en ? LangEnum.en : LangEnum.uk;
  const main = await getLocalizedContent("main!A:B", code);
  const dict = getDictionary(code);

  return (
    <MainImageCarousel
      lang={code}
      images={[img1, img2, img3, img4, img5, img6]}
      baseSpeed={6}
      fastSpeed={9}
      text={main[0].title}
      button1={dict["main-buttons"]["1"]}
      button2={dict["main-buttons"]["2"]}
    />
  );
}
