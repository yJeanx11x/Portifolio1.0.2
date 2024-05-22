let imgs = document.querySelector(".fotoPrincipal");
function trocarDeFoto() {
  imgs.addEventListener("click", function() {
    imgs.classList.remove("fotoPrincipal");
    imgs.classList.add("fotoPrincipal2");

});
}
trocarDeFoto();
