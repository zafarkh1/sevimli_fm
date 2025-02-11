import axios from "axios";

export const sendContactMessage = async (
  values: any,
  currentLang: string
): Promise<string> => {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/${currentLang}/api/v1/contact-message-create/`,
      values
    );
    return "success";
  } catch (error) {
    return "error";
  }
};
