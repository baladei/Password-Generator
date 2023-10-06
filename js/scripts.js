const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

function getLetterLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getLetterUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
  return Math.floor(Math.random() * 10).toString();
}

function getSymbol() {
  const symbols = "!@#$%&*.,()_+=-[]{}^~/<>";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) {
  let password = "";

  const passwordLenght = 10;

  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  ];

  for (i = 0; i < passwordLenght; i = i + generators.length) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }

  password = password.slice(0, passwordLenght);

  generatedPasswordElement.style.display = "block";
  generatedPasswordElement.querySelector("h4").innerText = password;
}

generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});
