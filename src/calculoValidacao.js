const form = document.querySelector(".main__form");
const fieldCurrency = document.querySelector(".main__moedaCampo");
const valueSelect = document.querySelector(".main__moedaSelect");

export function ReturnValueSelect() {
  return valueSelect.value;
}

export function validateForm() {
  form.addEventListener("submit", (e) => e.preventDefault());

  if (
    isNaN(fieldCurrency.value) ||
    fieldCurrency.value <= 0 ||
    fieldCurrency.value === ""
  ) {
    fieldCurrency.classList.add("main__error");
    const textErro = document.createElement("p");
    textErro.classList.add("main__errorText");
    textErro.innerText = "*Por favor informe um valor numerico e acima de 0";
    fieldCurrency.parentElement.appendChild(textErro);
    throw new Error("Por favor informe um valor numerico e acima de 0");
  } else if (
    fieldCurrency.classList.contains("main__error") &&
    !isNaN(fieldCurrency.value) &&
    fieldCurrency.value > 0 &&
    fieldCurrency.value !== ""
  ) {
    fieldCurrency.classList.remove("main__error");
    fieldCurrency.parentElement.querySelector(".main__errorText").remove();
  }
}

export function convertValue(data) {
  const bid = data.USDBRL.bid;
  const resultConvert = fieldCurrency.value / bid;
  console.log(resultConvert);
}
