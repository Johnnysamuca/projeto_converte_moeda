import {
  ReturnValueSelect,
  validateForm,
  convertValue,
} from "./src/calculoValidacao.js";
const converterButton = document.querySelector(".main__btnConverte");

document.addEventListener("DOMContentLoaded", function () {
  async function main() {
    try {
      validateForm();
      const url = `https://economia.awesomeapi.com.br/json/last/${ReturnValueSelect()}`;
      const response = await fetch(url);
      const data = await response.json();
      convertValue(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  converterButton.addEventListener("click", main);
});
