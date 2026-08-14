const input = document.querySelector("#prenom");
    const bouton = document.querySelector("#sauvegarder");
    const resultat = document.querySelector("#resultat");

bouton.addEventListener("click", function(){
  localStorage.setItem("prenom" , input.value)
  resultat.textContent = "Bonjour " + localStorage.getItem("prenom");
});