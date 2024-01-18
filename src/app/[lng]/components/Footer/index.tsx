import { FooterBase } from "./FooterBase";
import { useTranslation } from "@/app/i18n";

export const Footer = async ({ lng }: any) => {
  const { t } = await useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};
