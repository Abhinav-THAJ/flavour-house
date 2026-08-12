import { getComboOffersPageData } from "@/lib/wp";
import { ComboOffersContent } from "./ComboOffersContent";

export default async function ComboOffersPage() {
  const acfData = await getComboOffersPageData();

  return <ComboOffersContent acf={acfData} />;
}
