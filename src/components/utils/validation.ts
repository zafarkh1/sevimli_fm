import * as Yup from "yup";
import { useTranslations } from "next-intl";

export const getContactValidationSchema = () => {
  const t = useTranslations("Contact");
  return Yup.object({
    first_name: Yup.string()
      .min(2, t("errors.name_short"))
      .max(50, t("errors.name_long"))
      .required(t("errors.name_required")),
    last_name: Yup.string()
      .min(2, t("errors.surname_short"))
      .max(50, t("errors.surname_long"))
      .required(t("errors.surname_required")),
    email: Yup.string()
      .email(t("errors.invalid_email"))
      .required(t("errors.email_required")),
    phone: Yup.string()
      .matches(/^\+998\d{9}$/, t("errors.invalid_phone"))
      .required(t("errors.phone_required")),
    description: Yup.string()
      .min(10, t("errors.message_short"))
      .required(t("errors.message_required")),
  });
};
