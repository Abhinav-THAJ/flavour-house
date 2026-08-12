import { getContactPageData } from "@/lib/wp";
import { ContactContent } from "./ContactContent";

export default async function ContactPage() {
  const acfData = await getContactPageData();

  return <ContactContent acf={acfData} />;
}
