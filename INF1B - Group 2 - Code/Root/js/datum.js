var inhoud = "";

window.onload = go();

// start het proberen
function go() {
  //  localStorage.setItem('filmnaam', 'If i stay');
    start();

}
// verkrijg datum en tijd en opslaan in local storage
function verzend(id) {
    localStorage.datumentijd = document.getElementById("datumpicker").value;
    //verkrijg filmnaam uit localstorage
    var filmname = localStorage.getItem("filmnaam");
    //sla datum tijd en zaal op in localstorage
    var waarde = localStorage.datumentijd;
    localStorage.datum = localStorage.datumentijd.substring(0, 7);
    localStorage.tijd = localStorage.datumentijd.substring(9, 14);
    localStorage.zaal = localStorage.datumentijd.substring(16);
   //valideer knop uit zetten
    var valideeruit = document.getElementById("valideer");
    valideeruit.disabled = "disabled";
    //link genereren om door te gaan naar bijbehorende zaal.
    var link = "zaal" + localStorage.zaal + ".html";
    //zaal weg halen om errors te voorkomen
    var weghalen = document.getElementById("inhoud");
    var weghaaltext = '<h3>' + filmname + "</h3> <br/> <p>U heeft gekozen voor " + localStorage.datum + " om " + localStorage.tijd + ". <br/> <br/>";
    weghaaltext += '<a href="' + link + '"><button id="verder" class="knopdatumtijd"  onclick="verzend(this)">Verder</button></a>';
    weghalen.innerHTML = weghaaltext;

}

function start() {
    // haal film naam op uit de local storage
    var filmname = localStorage.getItem("filmnaam");
    //kijk aan welke film die overeen komt 
    //maak een dropdown met tijden en data voor de film tentoonstellingen
    if (filmname === 'If i stay') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += '<p>Selecteer de datum en tijd</p>';
        inhoud += '<select id="datumpicker">';
        inhoud += '<option  value="2-11-14, 15:00, 3">2 november 2014 om 15:00</option> <br/>';
        inhoud += '<option  value="3-11-14, 17:00, 3">3 november 2014 om 17:00</option><br/>';
        inhoud += '<option  value="4-11-14, 23:00, 1">4 november 2014 om 23:00</option><br/>';
        inhoud += '<option  value="6-11-14, 15:00, 1">6 november 2014 om 15:00</option><br/>';
        inhoud += '<option  value="7-11-14, 20:00, 3">7 november 2014 om 20:00</option><br/>';
        inhoud += '<option  value="8-11-14, 23:00, 3">8 november 2014 om 23:00</option><br/>';
        inhoud += '</select> <br/   >';
        inhoud += '<br/><button id="valideer" class="knopdatumtijd"  onclick="verzend(this)">Valideer</button>';
        

        document.getElementById("inhoud").innerHTML = inhoud;
    }
    else if (filmname === 'Bloedlink') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += '<p>Selecteer de datum en tijd</p>';
        inhoud += '<select id="datumpicker">';
        inhoud += '<option  value="3-11-14, 14:00, 2">3 november 2014 om 15:00</option><br/>';
        inhoud += '<option  value="4-11-14, 18:00, 3">4 november 2014 om 18:00</option><br/>';
        inhoud += '<option  value="5-11-14, 22:00, 2">5 november 2014 om 22:00</option><br/>';
        inhoud += '<option  value="7-11-14, 14:00, 2">7 november 2014 om 14:00</option><br/>';
        inhoud += '<option  value="8-11-14, 18:00, 1">8 november 2014 om 18:00</option><br/>';
        inhoud += '</select> <br/   >';
        inhoud += '<br/><button id="valideer" class="knopdatumtijd"  onclick="verzend(this)">Valideer</button>';

        document.getElementById("inhoud").innerHTML = inhoud; 
    }
    else if (filmname === 'Lucia de b.') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += '<p>Selecteer de datum en tijd</p>';
        inhoud += '<select id="datumpicker">';
        inhoud += '<option  value="3-11-14, 15:00, 1">3 november 2014 om 15:00</option><br/>';
        inhoud += '<option  value="4-11-14, 19:00, 1">4 november 2014 om 19:00</option><br/>';
        inhoud += '<option  value="5-11-14, 23:00, 3">5 november 2014 om 23:00</option><br/>';
        inhoud += '<option  value="7-11-14, 15:00, 3">7 november 2014 om 15:00</option><br/>';
        inhoud += '<option  value="8-11-14, 19:00, 3">8 november 2014 om 19:00</option><br/>';
        inhoud += '</select> <br/   >';
        inhoud += '<br/><button id="valideer" class="knopdatumtijd"  onclick="verzend(this)">Valideer</button>';

        document.getElementById("inhoud").innerHTML = inhoud; 
    }
   else if (filmname === 'As Above, So below') {
       inhoud = '<h3>' + filmname + '</h3>';
       inhoud += '<p>Selecteer de datum en tijd</p>';
        inhoud += '<select id="datumpicker">';
        inhoud += '<option  value="2-11-14, 13:00, 1">2 november 2014 om 13:00</option> <br/>';
        inhoud += '<option  value="3-11-14, 19:00, 1">3 november 2014 om 19:00</option><br/>';
        inhoud += '<option  value="4-11-14, 21:00, 2">4 november 2014 om 21:00</option><br/>';
        inhoud += '<option  value="6-11-14, 13:00, 3">6 november 2014 om 13:00</option><br/>';
        inhoud += '<option  value="7-11-14, 18:00, 1">7 november 2014 om 18:00</option><br/>';
        inhoud += '<option  value="8-11-14, 21:00, 2">8 november 2014 om 21:00</option><br/>';
        inhoud += '</select> <br/   >';
        inhoud += '<br/><button id="valideer" class="knopdatumtijd"  onclick="verzend(this)">Valideer</button>';

        document.getElementById("inhoud").innerHTML = inhoud;
    }
    else if (filmname === 'Guardians of the galaxy') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += '<p>Selecteer de datum en tijd</p>';
        inhoud += '<select id="datumpicker">';
        inhoud += '<option  value="2-11-14, 14:00, 2">2 november 2014 om 14:00</option><br/>';
        inhoud += '<option  value="3-11-14, 18:00, 2">3 november 2014 om 18:00</option><br/>';
        inhoud += '<option  value="4-11-14, 22:00, 3">4 november 2014 om 22:00</option><br/>';
        inhoud += '<option  value="6-11-14, 14:00, 2">6 november 2014 om 14:00</option><br/>';
        inhoud += '<option  value="7-11-14, 19:00, 2">7 november 2014 om 19:00</option><br/>';
        inhoud += '<option  value="8-11-14, 22:00, 1">8 november 2014 om 22:00</option><br/>';
        inhoud += '</select> <br/   >';
        inhoud += '<br/><button id="valideer" class="knopdatumtijd"  onclick="verzend(this)">Valideer</button>';

        document.getElementById("inhoud").innerHTML = inhoud; 
    }
    else if (filmname === 'The zero theorem') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += '<p>Selecteer de datum en tijd</p>';
        inhoud += '<select id="datumpicker">';
        inhoud += '<option  value="2-11-14, 17:00, 1">2 november 2014 om 17:00</option> <br/>';
        inhoud += '<option  value="3-11-14, 21:00, 3">3 november 2014 om 21:00</option><br/>';
        inhoud += '<option  value="5-11-14, 13:00, 1">5 november 2014 om 13:00</option><br/>';
        inhoud += '<option  value="6-11-14, 17:00, 3">6 november 2014 om 17:00</option><br/>';
        inhoud += '<option  value="7-11-14, 22:00, 1">7 november 2014 om 22:00</option><br/>';
        inhoud += '</select> <br/   >';
        inhoud += '<br/><button id="valideer" class="knopdatumtijd"  onclick="verzend(this)">Valideer</button>';

        document.getElementById("inhoud").innerHTML = inhoud; 
    }
    else if (filmname === 'The equalizer') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += '<p>Selecteer de datum en tijd</p>';
        inhoud += '<select id="datumpicker">';
        inhoud += '<option  value="2-11-14, 18:00, 2">2 november 2014 om 18:00</option> <br/>';
        inhoud += '<option  value="3-11-14, 22:00, 2">3 november 2014 om 22:00</option><br/>';
        inhoud += '<option  value="5-11-14, 14:00, 2">5 november 2014 om 14:00</option><br/>';
        inhoud += '<option  value="6-11-14, 18:00, 2">6 november 2014 om 18:00</option><br/>';
        inhoud += '<option  value="7-11-14, 23:00, 2">7 november 2014 om 23:00</option><br/>';
        inhoud += '</select> <br/   >';
        inhoud += '<br/><button id="valideer" class="knopdatumtijd"  onclick="verzend(this)">Valideer</button>';

        document.getElementById("inhoud").innerHTML = inhoud;
    }
     else if (filmname === 'The mazerunner') {
         inhoud = '<h3>' + filmname + '</h3>';
         inhoud += '<p>Selecteer de datum en tijd</p>';
        inhoud += '<select id="datumpicker">';
        inhoud += '<option  value="2-11-14, 19:00, 3">2 november 2014 om 19:00</option> <br/>';
        inhoud += '<option  value="3-11-14, 23:00, 1">3 november 2014 om 23:00</option><br/>';
        inhoud += '<option  value="5-11-14, 15:00, 3">5 november 2014 om 15:00</option><br/>';
        inhoud += '<option  value="6-11-14, 19:00, 1">6 november 2014 om 19:00</option><br/>';
        inhoud += '<option  value="7-11-14, 00:00, 3">7 november 2014 om 00:00</option><br/>';
        inhoud += '</select> <br/   >';
        inhoud += '<br/><button id="valideer" class="knopdatumtijd"  onclick="verzend(this)">Valideer</button>';

        document.getElementById("inhoud").innerHTML = inhoud; 
    }
    else if (filmname === 'Pijnstillers') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += '<p>Selecteer de datum en tijd</p>';
        inhoud += '<select id="datumpicker">';
        inhoud += '<option  value="2-11-14, 21:00, 1">2 november 2014 om 21:00</option><br/>';
        inhoud += '<option  value="4-11-14, 13:00, 2">4 november 2014 om 13:00</option><br/>';
        inhoud += '<option  value="5-11-14, 17:00, 1">5 november 2014 om 17:00</option><br/>';
        inhoud += '<option  value="6-11-14, 21:00, 3">6 november 2014 om 21:00</option><br/>';
        inhoud += '<option  value="8-11-14, 13:00, 2">8 november 2014 om 13:00</option><br/>';
        inhoud += '</select> <br/   >';
        inhoud += '<br/><button id="valideer" class="knopdatumtijd"  onclick="verzend(this)">Valideer</button>';

        document.getElementById("inhoud").innerHTML = inhoud;
    }
    else if (filmname === 'Lucy') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += '<p>Selecteer de datum en tijd</p>';
        inhoud += '<select id="datumpicker">';
        inhoud += '<option  value="2-11-14, 22:00, 2">2 november 2014 om 22:00</option> <br/>';
        inhoud += '<option  value="4-11-14, 14:00, 3">4 november 2014 om 14:00</option><br/>';
        inhoud += '<option  value="5-11-14, 18:00, 2">5 november 2014 om 18:00</option><br/>';
        inhoud += '<option  value="6-11-14, 22:00, 2">6 november 2014 om 22:00</option><br/>';
        inhoud += '<option  value="8-11-14, 14:00, 3">8 november 2014 om 14:00</option><br/>';
        inhoud += '</select> <br/   >';
        inhoud += '<br/><button id="valideer" class="knopdatumtijd"  onclick="verzend(this)">Valideer</button>';

        document.getElementById("inhoud").innerHTML = inhoud; 
    }
    else if (filmname === 'Into the storm') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += '<p>Selecteer de datum en tijd</p>';
        inhoud += '<select id="datumpicker">';
        inhoud += '<option  value="2-11-14, 23:00, 3">2 november 2014 om 23:00</option> <br/>';
        inhoud += '<option  value="4-11-14, 15:00, 1">4 november 2014 om 15:00</option><br/>';
        inhoud += '<option  value="5-11-14, 19:00, 3">5 november 2014 om 19:00</option><br/>';
        inhoud += '<option  value="6-11-14, 23:00, 1">6 november 2014 om 23:00</option><br/>';
        inhoud += '<option  value="8-11-14, 14:00, 1">8 november 2014 om 14:00</option><br/>';
        inhoud += '</select> <br/   >';
        inhoud += '<br/><button id="valideer" class="knopdatumtijd"  onclick="verzend(this)">Valideer</button>';
         
        document.getElementById("inhoud").innerHTML = inhoud; 
    }
    else if (filmname === 'Ninja turtles') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += '<p>Selecteer de datum en tijd</p>';
        inhoud += '<select id="datumpicker">';
        inhoud += '<option  value="3-11-14, 13:00, 3">3 november 2014 om 13:00</option><br/>';
        inhoud += '<option  value="4-11-14, 17:00, 2">4 november 2014 om 17:00</option><br/>';
        inhoud += '<option  value="5-11-14, 21:00, 1">5 november 2014 om 21:00</option><br/>';
        inhoud += '<option  value="7-11-14, 13:00, 1">7 november 2014 om 13:00</option><br/>';
        inhoud += '<option  value="8-11-14, 17:00, 2">8 november 2014 om 17:00</option><br/>';
        inhoud += '</select> <br/   >';
        inhoud += '<br/><button id="valideer" class="knopdatumtijd"  onclick="verzend(this)">Valideer</button>';

        document.getElementById("inhoud").innerHTML = inhoud; 
    }
    else if (filmname === 'Nightcrawler') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += 'Helaas kunt u deze film nog niet reserveren. <br/> Binnenkort verschijnt deze in de bioscoop en kunt u hem wel reserveren. <br/><br/>';
        inhoud += 'Klik rechtsboven om dit scherm af te sluiten.'

        document.getElementById("inhoud").innerHTML = inhoud;
    }
    else if (filmname === 'Interstellar') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += 'Helaas kunt u deze film nog niet reserveren. <br/> Binnenkort verschijnt deze in de bioscoop en kunt u hem wel reserveren. <br/><br/>';
        inhoud += 'Klik rechtsboven om dit scherm af te sluiten.'

        document.getElementById("inhoud").innerHTML = inhoud;
    }
    else if (filmname === 'Dumb and dumber to') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += 'Helaas kunt u deze film nog niet reserveren. <br/> Binnenkort verschijnt deze in de bioscoop en kunt u hem wel reserveren. <br/><br/>';
        inhoud += 'Klik rechtsboven om dit scherm af te sluiten.'

        document.getElementById("inhoud").innerHTML = inhoud;
    }
    else if (filmname === 'Beyond the lights') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += 'Helaas kunt u deze film nog niet reserveren. <br/> Binnenkort verschijnt deze in de bioscoop en kunt u hem wel reserveren. <br/><br/>';
        inhoud += 'Klik rechtsboven om dit scherm af te sluiten.'

        document.getElementById("inhoud").innerHTML = inhoud;
    }
    else if (filmname === 'The hunger games mockingjay part 1') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += 'Helaas kunt u deze film nog niet reserveren. <br/> Binnenkort verschijnt deze in de bioscoop en kunt u hem wel reserveren. <br/><br/>';
        inhoud += 'Klik rechtsboven om dit scherm af te sluiten.'

        document.getElementById("inhoud").innerHTML = inhoud;
    }
    else if (filmname === 'Horrible bosses 2') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += 'Helaas kunt u deze film nog niet reserveren. <br/> Binnenkort verschijnt deze in de bioscoop en kunt u hem wel reserveren. <br/><br/>';
        inhoud += 'Klik rechtsboven om dit scherm af te sluiten.'

        document.getElementById("inhoud").innerHTML = inhoud;
    }
    else if (filmname === 'The penguins of madagascar') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += 'Helaas kunt u deze film nog niet reserveren. <br/> Binnenkort verschijnt deze in de bioscoop en kunt u hem wel reserveren. <br/><br/>';
        inhoud += 'Klik rechtsboven om dit scherm af te sluiten.'

        document.getElementById("inhoud").innerHTML = inhoud;
    }
    else if (filmname === 'Big hero 6') {
        inhoud = '<h3>' + filmname + '</h3>';
        inhoud += 'Helaas kunt u deze film nog niet reserveren. <br/> Binnenkort verschijnt deze in de bioscoop en kunt u hem wel reserveren. <br/><br/>';
        inhoud += 'Klik rechtsboven om dit scherm af te sluiten.'

        document.getElementById("inhoud").innerHTML = inhoud;
    }

//else 
    else {
        
        document.getElementById("inhoud").innerHTML = 'Geen geldige film <br/>Klik rechts in de hoek om terug te gaan';

    }
}