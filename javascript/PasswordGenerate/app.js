function GeneratePass() {
  const length = document.getElementById("length").value;
  const useUppercase = document.getElementById("uppercase").checked;
  const useLowercase = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;
  const passwordField = document.getElementById("password");

  let char = "";
  if (useUppercase) {
    char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (useLowercase) {
    char += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useNumbers) {
    char += "0123456789";
  }
  if (useSymbols) {
    char += "!@#$%^&*()_+";
  }

  if (char.length === 0) {
    alert("Select at least one.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += char.charAt(Math.floor(Math.random() * char.length));
  }
  passwordField.value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied");
}
