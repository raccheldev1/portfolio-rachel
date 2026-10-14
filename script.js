document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const project = button.dataset.project;
    alert(`${project}\n\nProjeto demonstrativo do portfólio. Personalize e adicione o link para o código-fonte quando publicar sua versão.`);
  });
});
