// JavaScript Document

// reset de filter
 function terug(){
	var a = document.getElementsByClassName("A");
	var c = document.getElementsByClassName("B");
	var s = document.getElementsByClassName("C");
	var t = document.getElementsByClassName("D");
	var l = document.getElementsByClassName("L");
 for (var i=0; i!=a.length; i++){
 if(a[i].style.display == 'none'){
	 a[i].style.display = 'block';
 }
 }
 for (var i=0; i!=c.length; i++){
  if(c[i].style.display == 'none'){
	 c[i].style.display = 'block';
 }
 }
 for (var i=0; i!=s.length; i++){
  if(s[i].style.display == 'none'){
	 s[i].style.display = 'block';
 }
 }
 for (var i=0; i!=t.length; i++){
  if(t[i].style.display == 'none'){
	 t[i].style.display = 'block';
 }
 }
 for (var i=0; i!=l.length; i++){
 if(l[i].style.display == 'none'){
	l[i].style.display = 'block';
 }
 }
} 
				/*
				A = Actie
				B = comedie
				C = Sci-fi
				D = Thriller
				A C = Zowel actie als sci-fi
				*/
				// Fillter reseten Alle
				function alle(){
					terug();
				}
				// Filter functie voor de Actie films = A
					function actie(){
						terug();
					var c = document.getElementsByClassName("B");
					var s = document.getElementsByClassName("C");
					var t = document.getElementsByClassName("D");
					var l = document.getElementsByClassName("L");
					var ac = document.getElementsByClassName("A C");
					for (var i=0; i!=c.length; i++){
				if(c[i].style.display == 'none'){
				c[i].style.display = 'block';
				}
				else{
					c[i].style.display = 'none';
					}
				}
					for (var i=0; i!=s.length; i++){
				if(s[i].style.display == 'none'){
				s[i].style.display = 'block';
				}
				else{
					s[i].style.display = 'none';
					}
				}
						for (var i=0; i!=t.length; i++){
				if(t[i].style.display == 'none'){
				t[i].style.display = 'block';
				}
				else{
					t[i].style.display = 'none';
					}
				}
				for (var i=0; i!=l.length; i++){
				if(l[i].style.display == 'none'){
				l[i].style.display = 'block';
				}
				else{
					l[i].style.display = 'none';
					}
				}
				for (var i=0; i!=ac.length; i++){
				if(ac[i].style.display == 'none'){
				ac[i].style.display = 'block';
				}
				else{
					ac[i].style.display = 'none';
					}
				}
				}
				
				// Filter functie voor de Comedie films = B 
				function comedy(){
					terug();
					var a = document.getElementsByClassName("A");
					var s = document.getElementsByClassName("C");
					var t = document.getElementsByClassName("D");
					var l = document.getElementsByClassName("L");
					var ac = document.getElementsByClassName("A C");
					for (var i=0; i!=a.length; i++){
				if(a[i].style.display == 'none'){
				a[i].style.display = 'block';
				}
				else{
					a[i].style.display = 'none';
					}
				}
					for (var i=0; i!=s.length; i++){
				if(s[i].style.display == 'none'){
				s[i].style.display = 'block';
				}
				else{
					s[i].style.display = 'none';
					}
				}
						for (var i=0; i!=t.length; i++){
				if(t[i].style.display == 'none'){
				t[i].style.display = 'block';
				}
				else{
					t[i].style.display = 'none';
					}
				}
				for (var i=0; i!=l.length; i++){
				if(l[i].style.display == 'none'){
				l[i].style.display = 'block';
				}
				else{
					l[i].style.display = 'none';
					}
				}
				for (var i=0; i!=ac.length; i++){
				if(ac[i].style.display == 'none'){
				ac[i].style.display = 'block';
				}
				else{
					ac[i].style.display = 'none';
					}
				}
				}
				
				// Filter funtie voor de scifictie films = C
				function scifi(){
					terug();
					var a = document.getElementsByClassName("A");
					var c = document.getElementsByClassName("B");
					var t = document.getElementsByClassName("D");
					var l = document.getElementsByClassName("L");
					var ac = document.getElementsByClassName("A C");
					for (var i=0; i!=a.length; i++){
				if(a[i].style.display == 'none'){
				a[i].style.display = 'block';
				}
				else{
					a[i].style.display = 'none';
					}
				}
					for (var i=0; i!=c.length; i++){
				if(c[i].style.display == 'none'){
				c[i].style.display = 'block';
				}
				else{
					c[i].style.display = 'none';
					}
				}
						for (var i=0; i!=t.length; i++){
				if(t[i].style.display == 'none'){
				t[i].style.display = 'block';
				}
				else{
					t[i].style.display = 'none';
					}
				}
				for (var i=0; i!=l.length; i++){
				if(l[i].style.display == 'none'){
				l[i].style.display = 'block';
				}
				else{
					l[i].style.display = 'none';
					}
				}
				for (var i=0; i!=ac.length; i++){
				if(ac[i].style.display == 'none'){
				ac[i].style.display = 'block';
				}
				else{
					ac[i].style.display = 'none';
					}
				}
				}

				// Filter voor de Thriller films = D	
				function thriller(){
					terug();
					var a = document.getElementsByClassName("A");
					var c = document.getElementsByClassName("B");
					var s = document.getElementsByClassName("C");
					var l = document.getElementsByClassName("L");
					var ac = document.getElementsByClassName("A C");
					for (var i = 0; i != a.length; i++) {
				if(a[i].style.display == 'none'){
				a[i].style.display = 'block';
				}
				else{
					a[i].style.display = 'none';
					}
				}
					for (var i=0; i!=c.length; i++){
				if(c[i].style.display == 'none'){
				c[i].style.display = 'block';
				}
				else{
					c[i].style.display = 'none';
					}
				}
						for (var i=0; i!=s.length; i++){
				if(s[i].style.display == 'none'){
				s[i].style.display = 'block';
				}
				else{
					s[i].style.display = 'none';
					}
				}
				for (var i=0; i!=l.length; i++){
				if(l[i].style.display == 'none'){
				l[i].style.display = 'block';
				}
				else{
					l[i].style.display = 'none';
					}
				}
				for (var i=0; i!=ac.length; i++){
				if(ac[i].style.display == 'none'){
				ac[i].style.display = 'block';
				}
				else{
					ac[i].style.display = 'none';
					}
				}
				}
	
function selectie(genre){
    if (genre.value == "Niets") {
        //alert("test");
		alle();
	}
    if (genre.value == "A") {
        //alert("test");
		actie();
	}
    if (genre.value == "B") {
        //alert("test");
		comedy();
	}
    if (genre.value == "C") {
        //alert("test");
		scifi();
	}
    if (genre.value == "D") {
        //alert("test");
		thriller();
	}
}