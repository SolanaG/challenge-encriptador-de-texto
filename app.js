let text = "";
let encryptedText = "";

let textInput = document.getElementById("text");

document.getElementById("validation-div").style.display = "none";

textInput.addEventListener("focus", (event) => {
  document.getElementById("boyImage").style.display = "block";
  document.getElementById("newText").innerText = "";

  document.getElementById("validation-div").style.display = "flex";
  document.getElementById("validation").textContent =
    "Solo letras minúsculas y sin acentos";
});
textInput.addEventListener("input", (event) => {
  text = event.target.value;
});

function encrypt(text) {
  const encryption = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };

  return text.replace(/[eioua]/g, function (matched) {
    return encryption[matched];
  });
}

function decrypt(text) {
  const decryption = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  return text.replace(/enter|imes|ai|ober|ufat/g, function (matched) {
    return decryption[matched];
  });
}

function textValidate(text) {
  const regex = /^[a-z\s]+$/;
  return regex.test(text);
}

function handleEncrypt() {
  if (!textValidate(text)) {
    document.getElementById("validation").textContent =
      "Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.";
    document.getElementById("newText").innerText = "";

    return;
  }

  document.getElementById("validation").textContent = "";
  encryptedText = encrypt(text);
  document.getElementById("newText").innerText = encryptedText;
  document.getElementById("boyImage").style.display = "none";
  textInput.value = "";
  document.getElementById("validation-div").style.display = "none";
}

function handleDecrypt() {
  if (!textValidate(text)) {
    document.getElementById("validation").textContent =
      "Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.";
    document.getElementById("newText").innerText = "";
    return;
  }
  document.getElementById("validation").textContent = "";
  decryptedText = decrypt(text);
  document.getElementById("newText").innerText = decryptedText;
  document.getElementById("boyImage").style.display = "none";
  textInput.value = "";
  document.getElementById("validation-div").style.display = "none";
}

function handleCopy() {
  let copiedText = document.getElementById("newText").textContent;
  navigator.clipboard
    .writeText(copiedText)
    .then(() => {
      console.log("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}
