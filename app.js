document.getElementById("btn").addEventListener("click", () => {
  const inputField = document.getElementById("input-field").value;
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      inputField
    )
  );

  const valid = document.getElementById("valid");
  const notValid = document.getElementById("not-valid");

  if (emailRegex.test("true")) {
    valid.style.display = "block";
    notValid.style.display = "none";
  } else {
    valid.style.display = "none";
    notValid.style.display = "block";
  }
  document.getElementById("input-field").value = "";
});
