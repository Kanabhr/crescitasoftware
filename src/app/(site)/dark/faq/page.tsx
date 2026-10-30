import FaqBreadcrumb from "@/components/breadcrumb/FaqBreadcrumb";
import FaqArea from "@/components/faq/FaqArea";

import { buildMetadata } from "@/lib/seo";
import JsonLd, { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getGeneralFaq } from "@/lib/faq";
import { buildFaqPageData } from "@/lib/structuredData";

export async function generateMetadata() {
  const m = await buildMetadata("/faq");
  return m;
}
const page = async () => {
  const faqItems = await getGeneralFaq();
  const structuredFaq = faqItems.map((item) => ({
    question: item.title ?? item.question ?? "",
    answer: item.content ?? item.answer ?? "",
  }));

  return (
    <main>
      <JsonLd data={buildFaqPageData(structuredFaq)} />
      <BreadcrumbJsonLd path="/faq" />
      <FaqBreadcrumb />
      <FaqArea />
    </main>
  );
};

export default page;
