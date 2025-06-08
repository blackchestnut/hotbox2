export const SUPPORT_EMAIL = "zakaz@tehtelecom.ru";
export const SUPPORT_EMAIL_MAILTO = `mailto:${SUPPORT_EMAIL}`;

export const SUPPORT_PHONE = "+7 (977) 953 39 11";
export const SUPPORT_PHONE_TEL = "tel:+79779533911";

export const links = [
  { text: "ГЛАВНАЯ", path: "/" },
  { text: "КОТЕЛЬНЫЕ", path: "/products/", extraMatchPath: "kotelnye" },
  { text: "УСЛУГИ", path: "/service/" },
  { text: "МОБИЛЬНЫЕ КОТЕЛЬНЫЕ", path: "/boiler_ford_transit/" },
  { text: "НОВОСТИ", path: "/news/" },
  { text: "О НАС", path: "/about/" },
];

export const WEBHOOK_URL = 'https://discord.com/api/webhooks/1381270268122501292/vCHEBw6h0ux5ok2yce9iAzAtTnUbQOSi7-pyqSfkNZrBGGb84N2VNeikHK8Y6d-e_Kao'
export const sendLeadMessage = async (text) => {
  try {
    const { status, error } = await useFetch(
      WEBHOOK_URL,
      {
        method: 'post',
        body: { content: text }
      }
    );
    return status.value === "success";
  } catch (e) {
    console.log('test');
    console.error(e);
    return false;
  }
};
