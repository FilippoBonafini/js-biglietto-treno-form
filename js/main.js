'use strict'

//Definiamo le variabili costanti:
const priceKm = 0.21; //---------> Euro per ogni km percorso
const discountUnder18 = 20; //---> Percentuale sconto under 18
const discountOver65 = 40; //----> Percentuale sconto over 65

//Definiamo le variabili contenenti parti del DOM:
//bottoni
const buttonConferm = document.getElementById("idBottoneConferma");
const buttonReset = document.getElementById("idBottoneReset");
//text-input
let contentAge;
let contentKm;
let contentName;

//Definiamo le variabili che prenderanno un valore una volta inseriti i dati
let priceFull
let finalPrice

//Iniziamo un evento:
buttonConferm.addEventListener("click",
    function(){

        //salviamo il conenuto degli input dentro le variabili prima inizializzate
        contentAge = document.getElementById("idInputEta").value;
        contentKm = document.getElementById("idInputKm").value;
        contentName = document.getElementById("inputName").value;
        priceFull = priceKm * Number(contentKm).toFixed(2);

        //Verifichiamo se l'utente può accedere a sconti e se si salviamo le variabili
        if (Number(contentAge) < 18){
            finalPrice = (priceFull-(discountUnder18 / 100)*priceFull).toFixed(2); //---> minorenni
            console.log(finalPrice);
        }
        else if (Number(contentAge) >= 65){
            finalPrice = (priceFull-(discountOver65 / 100)*priceFull).toFixed(2); //---> over
            console.log(finalPrice);
        }
        else{
            console.log (String(priceFull)); //scriviamo direttamente il priceFull
        }
    }
)