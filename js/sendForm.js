// Функція для відправки повідомлення на телеграм
async function sendMessageToTelegram(messageText, chatId, botToken) {
  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
      chat_id: chatId,
      text: messageText,
      parse_mode: "HTML",
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (responseData.ok) {
      console.log("Повідомлення успішно відправлено!");
    } else {
      console.error("Помилка під час відправлення повідомлення:", responseData);
    }
  } catch (error) {
    console.error("Сталася помилка:", error);
  }
}

// Функція для обробки події надіслання форми
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const messageText = "Дані з форми:\n\n" + formDataToString(formData);

  // chat_id і токен бота
  const chatId = "@RSmotoSendMessage";
  const botToken = "6215398274:AAElV_0yRMADoBMXHY0c-b2BphpElUggaew";

  sendMessageToTelegram(messageText, chatId, botToken);

  form.reset();

  // console.log(document.querySelector(".btn").textContent);
  // alert("Form sent!");
  // document.getElementById("formSent").classList.remove("animate__backOutDown");
  document.getElementById("formSent").classList.toggle("show");
  document.getElementById("formSent").classList.toggle("animate__backInDown");

  setTimeout(() => {
    document.getElementById("formSent").classList.toggle("animate__backInDown");
    document
      .getElementById("formSent")
      .classList.toggle("animate__backOutRight");
  }, 2000);

  setTimeout(() => {
    document
      .getElementById("formSent")
      .classList.toggle("animate__backOutRight");
    document.getElementById("formSent").classList.remove("show");
  }, 2500);
}

// Функція для перетворення даних форми в рядок
function formDataToString(formData) {
  let result = "";
  for (const entry of formData.entries()) {
    const [key, value] = entry;
    result += `<b>${key}</b>: ${value}\n`;
  }
  return result;
}

// Отримуємо всі форми на сторінці
const forms = document.querySelectorAll(".form");

// Додаємо обробник події надіслання форми до кожної форми
forms.forEach((form) => {
  form.addEventListener("submit", handleFormSubmit);
});
