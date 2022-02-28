const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  //Altera o tema da página para o modo escuro;
  document.body.classList.toggle("dark");
  document.navbar.classList.toggle("darkBar");
});
