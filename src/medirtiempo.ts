let dat1: number = document.getElementById("dato1");
let dat2: number = document.getElementById("dato2");
let dat3: number = document.getElementById("dato3");
let dat4: number = document.getElementById("dato4");
let btnEnv = document.getElementById("btnEnviar");



btnEnv.addEventListener("click", () => {
let tiempo1: number = Number(dat1.value);
let tiempo2: number = Number(dat2.value);
let tiempo3: number = Number(dat3.value);
let tiempo4: number = Number(dat4.value);

let total: number = tiempo1 + tiempo2 + tiempo3 + tiempo4;
console.log("El tiempo total es: ", total);
console.log("El promedio de vuelta es: ", total / 4);
})

rotulo1.innerHTML= "vuelta 1";
rotulo2.innerHTML= "vuelta 2";
rotulo3.innerHTML= "vuelta 3";
rotulo4.innerHTML= "vuelta 4";


