import { getRecipesPageData } from "@/lib/wp";
import { RecipesContent } from "./RecipesContent";

export default async function RecipesPage() {
  const acfData = await getRecipesPageData();

  return <RecipesContent acf={acfData} />;
}
