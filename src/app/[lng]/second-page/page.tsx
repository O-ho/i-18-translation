import React from "react";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";
type Props = {
  params: {
    lng: string;
  };
};
const SecondPage = async ({ params: { lng } }: Props) => {
  const { t } = await useTranslation(lng, "second-page");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}`}>{t("back-to-home")}</Link>
    </div>
  );
};

export default SecondPage;
