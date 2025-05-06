//Menu lateral
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("aberto").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("aberto").style.marginLeft= "0";
  }

//Menu acordeão
  var acc = document.getElementsByClassName("acordeao");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var painel = this.nextElementSibling;
    if (painel.style.display === "block") {
      painel.style.display = "none";
    } else {
      painel.style.display = "block";
    }
  });
}