import { getAboutPageData } from "@/lib/wp";
import { AboutContent } from "./AboutContent";

export default async function AboutPage() {
  const acfData = await getAboutPageData();

  return <AboutContent acf={acfData} />;
}
