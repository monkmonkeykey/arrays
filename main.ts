input.onGesture(Gesture.Shake, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 2500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    basic.showString("el" + pronombres[randint(0, pronombres.length)] + " " + verbos[randint(0, verbos.length)])
})
let verbos: string[] = []
let pronombres: string[] = []
pronombres = [
"niño",
"perro",
"gato",
"animal",
"burro",
"primo",
"hermano",
"abuelo",
"papá"
]
verbos = [
"juega",
"tiene",
"estudia",
"sopla",
"piensa",
"habla",
"invade",
"canta",
"va"
]
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
music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 2500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
basic.showString("el" + pronombres[randint(0, pronombres.length)] + " " + verbos[randint(0, verbos.length)])
basic.forever(function () {
	
})
