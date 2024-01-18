import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import { Footer } from "@/app/[lng]/components/Footer";
type Props = {
  params: {
    lng: string;
  };
};
export default async function Home({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
      <br />
      <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
      <Footer lng={lng} />
    </main>
  );
}
