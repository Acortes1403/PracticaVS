function ComparacionDosVariables(){
    let var1 = prompt('Dame el numero1')//variable 1
    let var2 = prompt('Dame el numero2')//variable 2
    if (var1>var2){
        alert("El numero " + var1 + " es mas grande que " + var2)//mayor que
    }else if (var1<var2){
        alert("El numero " + var1 + " es mas pequeño que " + var2)//menor que
    }else if (var1==var2){
        alert("Los numeros son iguales")
    }else{
        alert("No me has brindado entidad valida")
    }
}

function Logico(){
    let var1 = false;
    let var2 = true;
    console.log(var1 && var2)//False
    console.log(var1 || var2)//True
    console.log(!var1 && var2)//True
}

function Variable(){
    let miString = "Hello World"
    let miNumero = 42;
    let miBooleano = false
    let miNull = null
    let miUndefined
    let miBigInt = BigInt(123)
    
    console.log(typeof miString)
    console.log(typeof miNumero)
    console.log(typeof miBooleano)
    console.log(typeof miNull)
    console.log(typeof miUndefined)
    console.log(typeof miBigInt)
}
function tiposDatos(){
    let valor = prompt("Introduce un dato")

    if(!isNaN(valor)){
        console.log("Es un numero")
    } 
    else if (valor ==="true" || valor === "false"){
        console.log("Es un booleano")
    }
    else if (valor === "null"){
        console.log("Es un null")
    }
    else {
        console.log("Es un string")
    }
}
function suma(a,b,c){
    console.log(a+b+c)
}
function multiplica(a,b,c){
    console.log(a*b*c)
}
function esString(x,y,z){
    if((typeof x)==="string"){
        console.log("el texto x es string")
    }else{
        console.log("el texto x no es string")
    }
    if((typeof y)==="string"){
        console.log("el texto y es string")
    }else{
        console.log("el texto y no es string")
    }
    if((typeof z)==="string"){
        console.log("el texto z es string")
    }else{
        console.log("el texto z no es string")
    }
}
function verificarVocales(x){
    const esVocal = /^[aeiou]$/i.test/(x)

    if (esVocal){
        console.log("Es una vocal")
    }
    else{
        console.log("No es una vocal")
    }
}
function validarEdad(edad){
    if (edad >= 18){
        alert("Mayor de Edad")
    } else{
        alert("Menor de Edad")
    }
}
function manejoArreglos(){
    let nombres = ["Ana","Juan","Carlos"]
    nombres.push("Luis")
    console.log(nombres)
    nombres.pop()
    nombres.pop()
    let index = nombres.indexOf("Sara")

    if(index!== -1){
        alert("El nombre esta en el arreglo")
    }
}
function mapas(){
    const numeros = [4,9,16,25,36,81]
    const raiz = numeros.map(x =>x**0.5)

    console.log(raiz)
}
function loop(){
    let conta = 0
    for (var i=0;i<=10;i++){
        console.log(conta)
        conta=conta+1
    }
    let conta2=0
    while(conta2!=11){
        console.log(conta2)
        conta2++
    }
    let conta3=0
    do{
        console.log(conta3)
        conta3++
    } while (conta3!=11)
}
ComparacionDosVariables();
Logico();
Variable();
tiposDatos();
suma(4,1,3)
multiplica(3,2,5)
esString("hola","null","true")
verificarVocales("b")
validarEdad(19)
manejoArreglos()
mapas()
loop()

