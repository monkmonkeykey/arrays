input.onButtonPressed(Button.A, function () {
    numeroActual += 1
})
let Nombre = [
"Francisco",
"Josué",
"Rodrigo",
"Amadeo",
"Tonatiuh",
"Gustavo",
"Fabian"
]
let Edad = [
"8",
"27",
"10",
"9",
"9",
"9",
"8"
]
let numeroActual = 0
basic.forever(function () {
    basic.showString("La edad de " + Nombre[numeroActual] + "es de " + Edad[numeroActual])
})
