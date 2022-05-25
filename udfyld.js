// udskrivning af liste til skærm
const FORMULAR = document.getElementById("formular");
FORMULAR.addEventListener("submit", function (e) {
    e.preventDefault();
    sessionStorage.setItem("fornavn", document.getElementById("fornavn").value);
    sessionStorage.setItem("efternavn", document.getElementById("efternavn").value);
    sessionStorage.setItem("vejnavn", document.getElementById("vejnavn").value);
    sessionStorage.setItem("vejnr", document.getElementById("vejnr").value);
    sessionStorage.setItem("postnr", document.getElementById("postnr").value);
    window.location.href = "kvittering.html";
})


// API med postnumre
fetch("https://api.dataforsyningen.dk/postnumre")
    .then(function (data) {
        return data.json();
    })
    .then(function (post) {
        const PBLISTE = document.getElementById("pbliste");
        for (const oplysninger of post) {
            PBLISTE.insertAdjacentHTML("beforeend", "<option>" + oplysninger.nr + " " + oplysninger.navn + "</option>");
        }
    })


// Her fanges forkerte postnumre og en advarsel vil poppe op hvis ugyldigt postnummer indtastes
    .catch(function (error) {
        const PB = document.getElementById("postnr");
        PB.innerHTML = "Postnr og by ikke tilgængelige";
    })

// Her kodes en alert der fortæller brugeren, at bookingen af foodtrucken er succesfuld
function minprint(){
    let email=document.getElementById("email");
    alert("Tak for din booking, Vi sender en mail på:"+email.value);
}


// Javascript til sidenav og burgerbar for mobil-format
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
