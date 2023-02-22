# ---CONSEGNA ESERCIZIO---

### Scrivere un programma che chieda all’utente:
####    -Il numero di chilometri da percorrere
####    -Età del passeggero
####
### Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
####    -il prezzo del biglietto è definito in base ai km (0.21 € al km)
####    -va applicato uno sconto del 20% per i minorenni
####    -va applicato uno sconto del 40% per gli over 65.

---------
## MILESTONE 1

### Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

## MILESTONE 2

### Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).


---------

# ---LOGICA UTILIZZATA---

## MILESTONE 1
### Definisco tutte le variabili che verranno utilizzate all'interno dello script:

```javascript
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

```

### Inserisco nel mio documento HTML 2 input e 1 bottone con relativi ID

```HTML
<body>
    <div>
        <form action="/" method="get">
            <label for="idInputEta">Inserisci la tua età</label>
            <input type="number" id="idInputEta">

            <label for="idInputKm">Inserisci i km da percorrere</label>
            <input type="number" id="idInputKm">

            <button id="idBottoneConferma" type="button">Conferma</button>
        <form>
    </div>
</body>
```

### Prendiamo i valori inseriti dall'utente dopo aver fatto il click sul bottone:

```javascript
//Iniziamo un evento:
buttonConferm.addEventListener("click",
    function(){
        //salviamo il conenuto degli input dentro le variabili prima inizializzate
        contentAge = document.getElementById("idInputEta").value;
        contentKm = document.getElementeById("idInputKm").value;
        priceFull = priceKm * Number(contentKm);
        //Verifichiamo se l'utente può accedere a sconti e se si salviamo le variabili
        if Number(contentAge) < 18{
            finalPrice = discountUnder18% di priceFull; //---> minorenni
            console.log(finalPrice);
        }
        else if Number(ContentAge) >= 65{
            finalPrice = discountOver65% di priceFull;
            console.log(finalPrice);
        }
        else{
            document.innerHTML
            console.log(priceFull); //scriviamo direttamente il priceFull
        }
    }
)
```
--------

#### Realizzato da Filippo Bonafini