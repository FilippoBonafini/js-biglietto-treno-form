'use strict'

//Definiamo le variabili costanti:
const priceKm = 0.21; //---------> Euro per ogni km percorso
const discountUnder18 = 20; //---> Percentuale sconto under 18
const discountOver65 = 40; //----> Percentuale sconto over 65

//Definiamo le variabili contenenti parti del DOM:
//bottoni
const buttonConferm = document.getElementById("idBottoneConferma");
const buttonReset = document.getElementById("idBottoneReset");
const DOMticket = document.getElementById("biglietto").classList;

//text-input
let contentAge;
let contentKm;
let contentName;

//Definiamo le variabili che prenderanno un valore una volta inseriti i dati
let priceFull;
let finalPrice;

//Definiamo le variabili che prenderanno un valore randomico (n. vagone e codice)
const vagonNumber = Math.floor(Math.random()*10);
const codeTicket =  Math.floor(Math.random()*10000);


//Iniziamo un evento:
buttonConferm.addEventListener("click",
    function(){

        //salviamo il conenuto degli input dentro le variabili prima inizializzate
        contentAge = document.getElementById("idInputEta").value;
        contentKm = document.getElementById("idInputKm").value;
        contentName = document.getElementById("idInputName").value;
        priceFull = priceKm * Number(contentKm).toFixed(2);

        //Salviamo in delle variabili in contenuto dell'html dell'offerta e del costo
        const DOMoffert = document.getElementById("insertOffert");
        const DOMprice = document.getElementById("insertPrice");

        //Scriviamo all'interno del biglietto le informazioni che siamo già sicuri di avere
        document.getElementById("insertName").innerHTML = contentName;
        document.getElementById("insertVagon").innerHTML = vagonNumber;
        document.getElementById("insertCode").innerHTML = codeTicket;

        //Verifichiamo se l'utente può accedere a sconti e se si salviamo le variabili
        if (contentAge === 'Minorenne'){
            finalPrice = (priceFull-(discountUnder18 / 100)*priceFull).toFixed(2); //---> minorenni
            console.log(finalPrice);
            DOMoffert.innerHTML = "UNDER 18";
            DOMprice.innerHTML = finalPrice+"$";
        }
        else if (contentAge === 'Senior(over 65)'){
            finalPrice = (priceFull-(discountOver65 / 100)*priceFull).toFixed(2); //---> over
            console.log(finalPrice);
            DOMoffert.innerHTML = "OVER 65";
            DOMprice.innerHTML = finalPrice+"$";
        }
        else{
            console.log (String(priceFull)); //scriviamo direttamente il priceFull
            DOMoffert.innerHTML = "STANDARD";
            DOMprice.innerHTML = priceFull+"$";
        }

        DOMticket.remove("hidden");
    }

)

//iniziamo un secondo evento
buttonReset.addEventListener("click",
    function(){
        DOMticket.add("hidden");
    }
)