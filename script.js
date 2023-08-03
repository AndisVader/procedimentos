function teste() {

    var cons, tono, paq, micro, cera, bio, pam

    cons = prompt("Qual o código da consulta?")
    tono = prompt("Qual o código da tonometria?")
    paq = prompt("Qual o código da paquimetria?")
    micro = prompt("Qual o código da microscopia?")
    cera = prompt("Qual o código da ceratoscopia?")
    bio = prompt("Qual o código da biometria?")
    pam = prompt("Qual o código do PAM?")

    document.getElementById("cons").innerHTML = "O código da consulta é: 10101012. Você respondeu com " + cons
    document.getElementById("tono").innerHTML = "O código da tonometria é: 41301323. Você respondeu com " + tono
    document.getElementById("paq").innerHTML = "O código da paquimetria é: 41501128. Você respondeu com " + paq
    document.getElementById("micro").innerHTML = "O código da microscopia é: 41301269. Você respondeu com " + micro
    document.getElementById("cera").innerHTML = "O código da ceratroscopia é: 41301080. Você respondeu com " + cera
    document.getElementById("bio").innerHTML = "O código da biometria é: 41501012. Você respondeu com " + bio
    document.getElementById("pam").innerHTML = "O código da pam é: 41301307. Você respondeu com " + pam


    if (cons == 10101012) {
        document.getElementById("acert").innerHTML = "Você acertou! Parabéns. ✓ "
    } else {
        document.getElementById("acert").innerHTML = "Você errou. Tente novamente :("
    }
    if (tono == 41301323) {
        document.getElementById("acert1").innerHTML = "Você acertou! Parabéns. ✓"
    } else {
        document.getElementById("acert1").innerHTML = "Você errou. Tente novamente :("
    }
    if (paq == 41501128) {
        document.getElementById("acert2").innerHTML = "Você acertou! Parabéns. ✓"
    } else {
        document.getElementById("acert2").innerHTML = "Você errou. Tente novamente :("
    }
    if (micro == 41301269) {
        document.getElementById("acert3").innerHTML = "Você acertou! Parabéns. ✓"
    } else {
        document.getElementById("acert3").innerHTML = "Você errou. Tente novamente. :("
    }
    if (cera == 41301080) {
        document.getElementById("acert4").innerHTML = "Você acertou! Parabéns. ✓"
    } else {
        document.getElementById("acert4").innerHTML = "Você errou. Tente novamente. :("
    }
    if (bio == 41501012) {
        document.getElementById("acert5").innerHTML = "Você acertou! Parabéns. ✓"
    } else {
        document.getElementById("acert5").innerHTML = "Você errou. Tente novamente. :("
    }
    if (pam == 41301307) {
        document.getElementById("acert6").innerHTML = "Você acertou! Parabéns. ✓"
    } else {
        document.getElementById("acert6").innerHTML = "Você errou. Tente novamente. :("
    }
}