/* this be the search engine mateys
Belangrijk: Alle h3's in het document moeten lowercase zijn in html (niet in css dus)!
neem ook de search form in HTML exact over zoals hij in overzicht_archief staat
*/


//einde functie

//zorgt ervoor dat de enter knop de form niet meer submit
var Terug = "<a style='cursor:pointer' onclick='javascript:location.reload()'>Klik hier </a> om terug te gaan naar het volledige overzicht"

//jQuery search
$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
    $('#userinput').change(function () {

        var userinput = this.value.toLowerCase();
        var allElements = $('#overzicht_list h3 a');
        var allChildren = $('#overzicht_list *');

        if (!userinput.replace(/\s+/g, '')) {
            alert("u heeft geen zoekterm ingevuld!");
            allElements.removeClass("matched");
            allChildren.show();
            return;
        }
        
        else {
            allElements.removeClass("matched");
            allChildren.hide();
            allElements.filter(function () {
                var text = this.textContent.toLowerCase();
                return (text.indexOf(userinput) > -1);
            }).addClass("matched").show().parents().show();
            document.getElementById("terug").innerHTML = Terug;
            
        }
    });
});