// Функція для відкриття popup
function openPopup(event) {
  const selectPoupSection =
    event.target.classList[event.target.classList.length - 1];

  const popup = document.getElementById("myPopup");
  popup.style.display = "block";

  switch (selectPoupSection) {
    case "openPopupCourse":
      const popupSection1 = document.getElementById("openPopupCourseSection");
      popupSection1.style.display = "block";

      break;
    case "openPopupHaveCertificate":
      const popupSection2 = document.getElementById(
        "openPopupHaveCertificateSection"
      );
      popupSection2.style.display = "block";
      break;
    case "openPopupOrderCertificate":
      const popupSection3 = document.getElementById(
        "openPopupOrderCertificateSection"
      );
      popupSection3.style.display = "block";
      break;

    default:
      break;
  }
}

// Функція для закриття popup
function closePopup() {
  const popup = document.getElementById("myPopup");
  const popupSection1 = document.getElementById("openPopupCourseSection");
  const popupSection2 = document.getElementById(
    "openPopupHaveCertificateSection"
  );
  const popupSection3 = document.getElementById(
    "openPopupOrderCertificateSection"
  );

  popup.style.display = "none";
  popupSection1.style.display = "none";
  popupSection2.style.display = "none";
  popupSection3.style.display = "none";
}

// Додаємо обробник події для клавіші "Esc"
document.addEventListener("keydown", function (event) {
  const popup = document.getElementById("myPopup");
  if (event.key === "Escape" && popup.style.display === "block") {
    closePopup();
  }
});

// Додаємо обробник події для кнопок
const openButton1 = document.getElementById("openPopupButton1");
const openButton2 = document.getElementById("openPopupButton2");
const openButton3 = document.getElementById("openPopupButton3");
const closeButton = document.getElementById("closePopupButton");

openButton1.addEventListener("click", openPopup);
openButton2.addEventListener("click", openPopup);
openButton3.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
