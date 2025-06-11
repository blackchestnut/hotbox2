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

// https://core.telegram.org/bots/api#formatting-options
export const sendLeadMessage = async (message) => {
  try {
    if (process.env.NODE_ENV === 'production') {
      const res = await $fetch('https://api.agileseason.com/cors_forms/hotbox', {
        method: 'POST',
        body: { message: { text: message } },
      });
      return res.ok;

    } else {
      const res = await $fetch('/api/telegram.send', {
        method: 'POST',
        body: { message },
      });
      return res.ok;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};
