const form = document.querySelector(".main__form");
const fieldCurrency = document.querySelector(".main__moedaCampo");
const valueSelect = document.querySelector(".main__moedaSelect");
const resultprice = document.querySelector(".main__result");
const coinsNames = document.querySelectorAll(".main__valor-cotacao");

function formatResultConvert(value) {
  return `R$ ${value.toFixed(2)}`;
}

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
    if (fieldCurrency.classList.contains("main__error")) {
      e.preventDefault();
      return;
    }

    fieldCurrency.classList.add("main__error");
    const textErro = document.createElement("p");
    textErro.classList.add("main__errorText");
    textErro.innerText = "*Por favor informe um valor numerico e acima de 0";
    fieldCurrency.parentElement.appendChild(textErro);
    throw new Error("Por favor informe um valor numerico e acima de 0");
  } else if (fieldCurrency.parentElement.querySelector(".main__errorText")) {
    fieldCurrency.classList.remove("main__error");
    fieldCurrency.parentElement.querySelector(".main__errorText").remove();
  }
}

export function convertValue(data) {
  const valueSelectedCliente = valueSelect.value.replace("-", "");

  if (valueSelectedCliente === "USDBRL") {
    const bid = data.USDBRL.bid;
    const resultConvert = fieldCurrency.value * bid;
    resultprice.textContent = formatResultConvert(resultConvert);
  } else if (valueSelectedCliente === "EURBRL") {
    const bid = data.EURBRL.bid;
    const resultConvert = fieldCurrency.value * bid;
    resultprice.textContent = formatResultConvert(resultConvert);
  }
}

export async function displayValuesCoinsInRealTime() {
  const url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL";
  const respose = await fetch(url);
  const data = await respose.json();
  coinsNames[0].textContent = `R$ ${Number(data.USDBRL.bid).toFixed(2)}`;
  coinsNames[1].textContent = `R$ ${Number(data.EURBRL.bid).toFixed(2)}`;
}
