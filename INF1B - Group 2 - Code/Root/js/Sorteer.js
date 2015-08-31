var titels = [];
var titels2 = [];
var tijd = [];
var lengte = [];
var filmnaamx = [];
var tergnaarstring = [];
var titelsnaam = [];
var genrex = [];


function sorting(manier) {
    
    titels = [];
    if (manier.value == "A-Z") {
        //ophalen van film naam
        var titelfilms = document.getElementsByClassName("filmnaam");
        for (var i = 0; i < titelfilms.length; i++) {
            titels.push(titelfilms[i].innerHTML);
            
        }
        //sorteren 
        

        titels.sort()
        

        //Functie om resultaten weer te geven
        Show(titels);
    }
    else if (manier.value == "Z-A") {
        //ophalen van film naam

        var titelfilms = document.getElementsByClassName("filmnaam");
        for (var i = 0; i < titelfilms.length; i++) {
            titels.push(titelfilms[i].innerHTML);
            
        }
        //sorteren en omkeren
        
        titels.sort();
        titels.reverse();
        

        //Functie om resultaten weer te geven
        Show(titels);

    }
    else if (manier.value == "Speeltijd") {
        //h3 pakken 
        var tijd = document.getElementsByTagName("h3");
        var text = [];
        for (i = 0; i < tijd.length; i++) {
            text.push(tijd[i].innerHTML);
            

        }
        //tijd pakken
        for (n = 0; n < text.length; n++) {
            text[n] = text[n].substring(7, 10);
            
        }
        //omzetten naar integer
        for (v = 0; v < text.length; v++) {
            text[v] = (parseInt(text[v]));
            
        }
        //sorteren
        text.sort();
        
        for (v = 0; v < text.length; v++) {
            titels.push(document.getElementById(text[v]).innerHTML);
            
        }
        //Functie om resultaten weer te geven
        Show(titels);

    }
    else if (manier.value == "IMDB") {

        tergnaarstring = [];

        //h3 pakken 
        var rating = document.getElementsByTagName("h3");
        var ratingimdb = [];
        for (i = 0; i < rating.length; i++) {
            ratingimdb.push(rating[i].innerHTML);
            

        }
        //tijd pakken
        for (n = 0; n < ratingimdb.length; n++) {
            ratingimdb[n] = ratingimdb[n].substring(19, 22);
            
        }
        //omzetten naar integer
        for (v = 0; v < ratingimdb.length; v++) {
            ratingimdb[v] = Number(ratingimdb[v]);

            
        }
        ratingimdb.sort();
        ratingimdb.reverse();
        

        for (v = 0; v < ratingimdb.length; v++) {
            tergnaarstring.push(ratingimdb[v].toString());
            
        }

        for (v = 0; v < tergnaarstring.length; v++) {
            titels.push(document.getElementsByClassName(tergnaarstring[v])[0].innerHTML);
            
        }

        Show(titels);
    }
    else {
        
        location.reload(true);

    }

}


function Show(volgorde) {

    
    
    // asd
    for (var i = 0; i < volgorde.length; i++) {

        titelsnaam[i] = document.getElementById(volgorde[i]).innerHTML;
    }
    
    var inhoudss = document.getElementById("overzicht_list");

    var nixxxx = "";
    inhoudss.innerHTML = nixxxx;

    

    for (var v = 0 ; v < volgorde.length; v++) {
        if (volgorde[v] == 'lucy') {
            inhoudss.innerHTML += "<li id='" + volgorde[v] + "' class='overzicht_list_item A C'>" + titelsnaam[v] + "</li>";
        }
        else if (volgorde[v] == 'if i stay' || volgorde[v] == 'the zero theorem' || volgorde[v] == 'As Above, So Below' || volgorde[v] == 'into the storm' || volgorde[v] == 'pijnstillers' || volgorde[v] == 'bloedlink' || volgorde[v] == 'lucia de b.' || volgorde[v] == 'nightcrawler' || volgorde[v] == 'beyond the lights') {
            inhoudss.innerHTML += "<li id='" + volgorde[v] + "' class='overzicht_list_item D'>" + titelsnaam[v] + "</li>";
        }
        else if (volgorde[v] == 'expendables 3' || volgorde[v] == 'ninja turtles' || volgorde[v] == '22 jump street' || volgorde[v] == 'the equalizer') {
            inhoudss.innerHTML += "<li id='" + volgorde[v] + "' class='overzicht_list_item A'>" + titelsnaam[v] + "</li>";
        }
        else if (volgorde[v] == 'guardians of the galaxy' || volgorde[v] == 'interstellar' || volgorde[v] == 'the maze runner' || volgorde[v] == 'the hunger games mockingjay part 1' ) {
            inhoudss.innerHTML += "<li id='" + volgorde[v] + "' class='overzicht_list_item C'>" + titelsnaam[v] + "</li>";
        }
        else if (volgorde[v] == 'the penguins of madagascar' || volgorde[v] == 'rio 2' || volgorde[v] == 'big hero 6' || volgorde[v] == 'dumb and dumber to' || volgorde[v] == 'horrible bosses 2') {
            inhoudss.innerHTML += "<li id='" + volgorde[v] + "' class='overzicht_list_item C'>" + titelsnaam[v] + "</li>";
        }
    }

    volgorde = [];
    inhoudss = "";
    titels = [];
    titels2 = [];
    tijd = [];
    lengte = [];
    filmnaamx = [];
    tergnaarstring = [];
    titelsnaam = [];

}

