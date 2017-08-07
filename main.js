var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];

var tabla=document.getElementById("tabla");
var avanzar=document.getElementById('avanzar');
var izquierda=document.getElementById("izquierda");
var derecha=document.getElementById('derecha');


var filas= new Array(mapa.length);
for (var i = 0; i < filas.length; i++) {
	filas[i] = new Array(mapa[0].length);
}

var tdActual;

var table=document.createElement("table");
table.setAttribute("class", "table1");
table.border="1";
for (var i=0 ;i< mapa.length;i++){
	var tr=document.createElement("tr");
	for(var j=0 ;j< mapa[0].length;j++){
		var td=document.createElement("td");
		tr.appendChild(td);

		td.setAttribute("class","td1");
		if(mapa[i][j]=="*"){
			td.setAttribute("style", "background-color: black;");
		}
		if(mapa[i][j]=="_"){
			td.setAttribute("style", "background-color: white;");
		}
		if(mapa[i][j]=="o"){
			td.setAttribute("style", "background-color: blue;");
			var imagen=document.createElement("img");
			td.appendChild(imagen);
			imagen.src="arriba.png";
			tdActual ={x:i,y:j,direccion:"arriba"}; // creando un objeto literal

		}
		if(mapa[i][j]=="W"){
			td.setAttribute("style", "background-color: green;");
		}

	filas[i][j]=td;
	}
table.appendChild(tr);
}
tabla.appendChild(table);




avanzar.onclick = function(){
	if(tdActual.direccion== "arriba"){
		if(mapa[tdActual.x-1][tdActual.y] == "_" ){
			var imagen = document.createElement("img");
			imagen.src = "arriba.png";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild);
			tdActual.x = tdActual.x-1;
			filas[tdActual.x][tdActual.y].appendChild(imagen);
		}
	}

	else if(tdActual.direccion== "derecha"){
		if(mapa[tdActual.x][tdActual.y+1] == "_" ){
			var imagen = document.createElement("img");
			imagen.src = "derecha.png";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild);
			tdActual.y = tdActual.y+1;
			filas[tdActual.x][tdActual.y].appendChild(imagen);
		}
	}

else if(tdActual.direccion== "izquierda"){
		if(mapa[tdActual.x][tdActual.y-1] == "_" ){
			var imagen = document.createElement("img");
			imagen.src = "izquierda.png";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild);
			tdActual.y = tdActual.y-1;
			filas[tdActual.x][tdActual.y].appendChild(imagen);
		}
	}
	else if(tdActual.direccion== "abajo"){
		if(mapa[tdActual.x+1][tdActual.y] == "_" ){
			var imagen = document.createElement("img");
			imagen.src = "derecha.png";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild);
			tdActual.x = tdActual.x+1;
			filas[tdActual.x][tdActual.y].appendChild(imagen);
		}
	}
}


derecha.onclick=function(){
	if(tdActual.direccion == "arriba"){
		var imagen = document.createElement("img");
			imagen.src = "derecha.png";
			tdActual.direccion = "derecha";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild);
			filas[tdActual.x][tdActual.y].appendChild(imagen);
	}
	else if(tdActual.direccion == "derecha"){
		var imagen = document.createElement("img");
			imagen.src = "abajo.png";
			tdActual.direccion = "abajo";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild);
			filas[tdActual.x][tdActual.y].appendChild(imagen);
	}
	else if(tdActual.direccion == "abajo"){
		var imagen = document.createElement("img");
			imagen.src = "izquierda.png";
			tdActual.direccion = "izquierda";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild);
			filas[tdActual.x][tdActual.y].appendChild(imagen);
	}
	else if(tdActual.direccion == "izquierda"){
		var imagen = document.createElement("img");
			imagen.src = "arriba.png";
			tdActual.direccion = "arriba";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild);
			filas[tdActual.x][tdActual.y].appendChild(imagen);
	}


}
izquierda.onclick=function(){
	if(tdActual.direccion == "derecha"){
		var imagen = document.createElement("img");
			imagen.src = "arriba.png";
			tdActual.direccion = "arriba";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild);
			filas[tdActual.x][tdActual.y].appendChild(imagen);
	}
	else if(tdActual.direccion == "arriba"){
		var imagen = document.createElement("img");
			imagen.src = "izquierda.png";
			tdActual.direccion = "izquierda";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild);
			filas[tdActual.x][tdActual.y].appendChild(imagen);
	}
	else if(tdActual.direccion == "izquierda"){
		var imagen = document.createElement("img");
			imagen.src = "abajo.png";
			tdActual.direccion = "abajo";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild);
			filas[tdActual.x][tdActual.y].appendChild(imagen);
	}
	else if(tdActual.direccion == "abajo"){
		var imagen = document.createElement("img");
			imagen.src = "derecha.png";
			tdActual.direccion = "derecha";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild);
			filas[tdActual.x][tdActual.y].appendChild(imagen);
	}


}