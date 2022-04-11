const alertEl = document.querySelector("[data-alert]");
const alertElEng = document.querySelector("[data-alert-eng]");
const alertElFr = document.querySelector("[data-alert-fr]");

const showAlert = () => {
  alert("Aby uzyskać dostęp do ofert specjalnych, zaloguj się w sklepie.");
};
const showAlertEng = () => {
  alert("To access special offers, please log in to the store.");
};
const showAlertFr = () => {
  alert(
    "Pour accéder aux offres spéciales, veuillez vous connecter à la boutique."
  );
};
if (alertEl == null && alertElEng == null) {
  alertElFr.addEventListener("click", () => showAlertFr());
}
if (alertEl == null && alertElFr == null) {
  alertElEng.addEventListener("click", () => showAlertEng());
} else {
  alertEl.addEventListener("click", () => showAlert());
}
