// creo la variabile nome e cognome
var nomeCognome = document.getElementById('nome_cognome');
// creo la variabile km
var km = document.getElementById('km');
// creo la variabile meta
var eta = document.getElementById('eta');
// recupero i dati dall' HTML
document.getElementById('genera').addEventListener('click',
function() {
  km = ParseInt('km');
  console.log(nomeCognome.value);
  console.log(km.value);
  console.log(eta.value);

  var costoBiglietto = km * 0.21;
  console.log(costoBiglietto);
})
// calcolo il costo del biglietto
// var costoBiglietto = km. * 0.21;
// console.log(costoBiglietto);
