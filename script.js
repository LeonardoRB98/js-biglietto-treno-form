// creo la variabile nome e cognome
var nomeCognomeInput = document.getElementById('nome_cognome');
// creo la variabile km
var kmInput = document.getElementById('km');
// creo la variabile meta
var etaInput = document.getElementById('eta');
// recupero i dati dall' HTML
document.getElementById('genera').addEventListener('click',
  function() {

    // estraggo il valore dalla varibile kmInput
    var km = kmInput.value;
    var eta = etaInput.value;
    var nomeCognome = nomeCognomeInput.value;
    console.log(nomeCognomeInput.value);
    console.log(kmInput.value);
    console.log(etaInput.value);

    // calcolo costo biglietto
    var costoBiglietto = km * 0.21;
    console.log(costoBiglietto);
    var sconto;
    // sconto minorenni
    if (eta == 'minorenne') {
      sconto = (costoBiglietto * 20) / 100;
      console.log(sconto);
      costoBiglietto += -sconto;
      console.log(costoBiglietto);
      // sconto over 65
    } else if (eta == 'over 65') {
      sconto = (costoBiglietto * 40) / 100;
      console.log(sconto);
      costoBiglietto = costoBiglietto - sconto;
      console.log(costoBiglietto);
    } else {

    }
    var carrozza = Math.floor(Math.random() * 9) + 1;
    var codiceCp = Math.floor(Math.random() * 100000) + 90000;
    document.getElementById('passeggero').innerHTML = nomeCognome;
    document.getElementById('offerta').innerHTML = eta;
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codice_cp').innerHTML = codiceCp;
    document.getElementById('costo_biglietto').innerHTML = costoBiglietto;
})
