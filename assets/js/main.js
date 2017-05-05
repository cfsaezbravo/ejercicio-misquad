function MiembroSquad(nombre,edad,hobbie1){
	this.nombre = nombre;
	this.edad = edad;
	this.hobbie1 = hobbie1;
}

var miembro1 = new MiembroSquad("Camila Sáez",24,"Origami");
var miembro2 = new MiembroSquad("Antonia Cerda",23,"Diseñar");
var miembro3 = new MiembroSquad("Carolina Tapia",27,"Trekking");
var miembro4 = new MiembroSquad("María José Rodríguez",32,"Ver series");
var miembro5 = new MiembroSquad("María José Pozo", 31, "Bailar");
var miembro6 = new MiembroSquad("Francisca Ojeda", 28, "Rollerderby");
var miembro7 = new MiembroSquad("Marion Castillo", 29, "Caminar");

var resultado = document.getElementById("miembro1");
var mostrarResultado1 = ("<b>Nombre: </b>" + miembro1.nombre + "<br><b>Edad: </b>" + miembro1.edad + "<br><b>Hobbie:</b><li>" + miembro1.hobbie1);
resultado.innerHTML = mostrarResultado1
var resultado = document.getElementById("miembro2");
var mostrarResultado1 = ("<br><b>Nombre: </b>" + miembro2.nombre + "<br><b>Edad: </b>" + miembro2.edad + "<br><b>Hobbie:</b><li>" + miembro2.hobbie1);
resultado.innerHTML = mostrarResultado1
var resultado = document.getElementById("miembro3");
var mostrarResultado1 = ("<br><b>Nombre: </b>" + miembro3.nombre + "<br><b>Edad: </b>" + miembro3.edad + "<br><b>Hobbie:</b><li>" + miembro3.hobbie1);
resultado.innerHTML = mostrarResultado1
var resultado = document.getElementById("miembro4");
var mostrarResultado1 = ("<br><b>Nombre: </b>" + miembro4.nombre + "<br><b>Edad: </b>" + miembro4.edad + "<br><b>Hobbie:</b><li>" + miembro4.hobbie1);
resultado.innerHTML = mostrarResultado1
var resultado = document.getElementById("miembro5");
var mostrarResultado1 = ("<br><b>Nombre: </b>" + miembro5.nombre + "<br><b>Edad: </b>" + miembro5.edad + "<br><b>Hobbie:</b><li>" + miembro5.hobbie1);
resultado.innerHTML = mostrarResultado1
var resultado = document.getElementById("miembro6");
var mostrarResultado1 = ("<br><b>Nombre: </b>" + miembro6.nombre + "<br><b>Edad: </b>" + miembro6.edad + "<br><b>Hobbie:</b><li>" + miembro6.hobbie1);
resultado.innerHTML = mostrarResultado1
var resultado = document.getElementById("miembro7");
var mostrarResultado1 = ("<br><b>Nombre: </b>" + miembro7.nombre + "<br><b>Edad: </b>" + miembro7.edad + "<br><b>Hobbie:</b><li>" + miembro7.hobbie1);
resultado.innerHTML = mostrarResultado1
