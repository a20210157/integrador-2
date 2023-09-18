alert("Ejercicio integrador 2")
alert("Este es la trivia de la primavera")
nom=prompt("ingresa tu nombre")
document.write("hola ",nom   )
res1=prompt("¿como se llama el primera dia de primavera ?\nA:Primera dia de primavera\nB:equinoccio de primavera\nC:equinoccio de invierno")
if (res1=="A"){
    res1=0
}
else if(res1=="B"){
    res1=25
}
else if(res1=="C"){
    res1=0
}
else{
    alert(nom, "no es un opcion valida")
}
res2=prompt("¿Que sucede en el polo norte con la primavera?\nA:6 meses de luz\nB:6 meses de oscuridad\nC:6 meses alernado")
if (res2=="A"){
    res2=0
}
else if(res2=="B"){
    res2=0
}
else if(res2=="C"){
    res2=25
}
else{
    alert(nom, "no es un opcion valida")
}
var total=res1+res2
if(total>=25){
    document.write(nom, "sabes de primavera")
}
else{
    document.write(nom, "no sabe de primavera")
}
