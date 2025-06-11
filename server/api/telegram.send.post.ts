export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const message = body.message;

  const token = process.env.HOTBOX_SITE_BOT_TOKEN;
  const chatId = process.env.HOTBOX_SITE_BOT_CHAT_ID;

  const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  const res = await fetch(telegramUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'markdown',
    }),
  });

  const data = await res.json();
  return data;
});
