export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const message = body.message;

  const token = "7608908141:AAEIox2Fph3x81YMlNMoPggSuMDqvc2qcic"; // ⚠️ Никогда не публикуй этот токен!
  const chatId = "-1002875747084"; // chat_id приватного канала

  const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  const res = await fetch(telegramUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });

  const data = await res.json();
  return data;
});
