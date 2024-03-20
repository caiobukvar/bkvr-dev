import { useTranslations } from "next-intl";

function Footer() {
  const version = 1.21;

  const t = useTranslations("Footer");
  return (
    <div className="flex w-full items-center justify-center gap-2 p-4 text-xs">
      <p className="text-slate-600">{t("text")} BKVR </p>
      <p className="border-l-2 border-slate-600 pl-2 text-lime-600">
        v{version}
      </p>
    </div>
  );
}

export default Footer;
