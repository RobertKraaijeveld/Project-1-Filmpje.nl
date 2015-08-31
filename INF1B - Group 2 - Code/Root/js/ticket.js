window.onload = WriteToHTML();

var ticketinhoud = "";
//writetohtml om alles in ticket.html te zetten 
//alles wordt opgeroepen uit localstorage
function WriteToHTML() {
    ticketinhoud = "";
    ticketinhoud += localStorage.logo + "<br/>";
    ticketinhoud += "Film: " + localStorage.filmnaam + "<br/>";
    ticketinhoud += "Datum: " + localStorage.datum + "<br/>";
    ticketinhoud += "Aanvangstijd: " + localStorage.tijd + " uur <br/>";
    ticketinhoud += "Zaalnummer: " + localStorage.zaal + "<br/>";
    ticketinhoud += "Stoelnummer(s): " + localStorage.stoelnummer + "<br/>";
    ticketinhoud += "<br/><br/>";
    ticketinhoud += localStorage.naam + "<br/>";
    ticketinhoud += localStorage.achternaam + "<br/>";
    ticketinhoud += localStorage.nummer + "<br/>";
    ticketinhoud += localStorage.email + "<br/>";
    ticketinhoud += "Prijs: " + localStorage.prijs + "<br/>";
    ticketinhoud += "Bestellingscode: " + localStorage.randomnummer + "<br/>";
    ticketinhoud += localStorage.qrcode + "  <br/>";
       
    document.getElementById("ticket").innerHTML = ticketinhoud;

    //print knopje maken en in html zetten
    var PrintButton = '<a ><button id="uitdraaien" onclick="printTicket()">Printen</button></a>';
   
    document.getElementById("printknop").innerHTML = PrintButton;
    return PrintButton;
}
//print functie en print knop weghalen
function printTicket() {
    PrintButton = "";
    document.getElementById("printknop").innerHTML = PrintButton;
    window.print();
}