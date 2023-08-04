//A primeira função é para os procedimentos oftalmológicos

function teste() {
    alert("Atenção!! Agora você vai precisar digitar o código dos procedimentos.")

    var cons, tono, camp, paq, micro, cera, bio, pam, map, ret, ult

    cons = prompt("Qual o código da Consulta Oftalmológica?")
    tono = prompt("Qual o código da Tonometria?")
    camp = prompt("Qual o código da Campimetria Computadorizada? ")
    paq = prompt("Qual o código da Paquimetria Ultra-sônica?")
    micro = prompt("Qual o código da Microscopia Especular?")
    cera = prompt("Qual o código da Ceratoscopia Computadorizada?")
    bio = prompt("Qual o código da Biometria Ultrasônica?")
    pam = prompt("Qual o código do PAM?")
    map = prompt("Qual o código do Mapeamento de Retina?")
    ret = prompt("Qual o código da Retinografia?")
    ult = prompt("Qual o código da Ultra-Sonografia?")


    document.getElementById("cons").innerHTML = "O código da consulta é: 10101012. Você respondeu com " + cons

    document.getElementById("tono").innerHTML = "O código da tonometria é: 41301323. Você respondeu com " + tono

    document.getElementById("camp").innerHTML = "O código da Campimetria Computadorizada é: 40103137. Você respondeu com " + camp

    document.getElementById("paq").innerHTML = "O código da paquimetria é: 41501128. Você respondeu com " + paq

    document.getElementById("micro").innerHTML = "O código da microscopia é: 41301269. Você respondeu com " + micro

    document.getElementById("cera").innerHTML = "O código da ceratroscopia é: 41301080. Você respondeu com " + cera

    document.getElementById("bio").innerHTML = "O código da biometria é: 41501012. Você respondeu com " + bio

    document.getElementById("pam").innerHTML = "O código da pam é: 41301307. Você respondeu com " + pam

    document.getElementById("map").innerHTML = "O código do Mapeamento de Retina é: 41301250. Você respondeu com " + map

    document.getElementById("ret").innerHTML = "O código da Retinografia é: 41301315. Você respondeu com " + ret

    document.getElementById("ultra").innerHTML = "O código da Ultra-sonografia é: 40901530. Você respondeu com " + ult


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


    if (camp == 40103137) {
        document.getElementById("acertc").innerHTML = "Você acertou! Parabéns. ✓ "
    } else {
        document.getElementById("acertc").innerHTML = "Você errou. Tente novamente :("
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


    if (map == 41301250) {
        document.getElementById("acertm").innerHTML = "Você acertou! Parabéns. ✓"
    } else {
        document.getElementById("acertm").innerHTML = "Você errou. Tente novamente. :("
    }


    if (ret == 41301315) {
        document.getElementById("acertr").innerHTML = "Você acertou! Parabéns. ✓"
    } else {
        document.getElementById("acertr").innerHTML = "Você errou. Tente novamente. :("
    }


    if (ult == 40901530) {
        document.getElementById("acertu").innerHTML = "Você acertou! Parabéns. ✓"
    } else {
        document.getElementById("acertu").innerHTML = "Você errou. Tente novamente. :("
    }
}

//A segunda função se trata sobre os códigos dos médicos

function medicos() {
    var jorge, juliane, carolina, marcelo, carlos

    jorge = parseInt (prompt("Qual o CRM do Dr. Jorge Fernando?"))
    juliane = prompt("Qual o CRM da Dra. Juliane Moledo?")
    carolina = prompt("Qual o CRM da Dra. Carolina Sampaio?")
    marcelo = prompt("Qual o CRM do Dr. Marcelo Silva?")
    carlos = prompt("Qual o CRM do Dr. Carlos Escobar?")


    document.getElementById("jorge").innerHTML = "O CRM do Dr. Jorge Fernando é 363887. Você respondeu com: " + jorge
    document.getElementById("juliane").innerHTML = "O CRM da Dra. Juliane Moledo é 597226. Você respondeu com: " + juliane
    document.getElementById("carolina").innerHTML = "O CRM da Dra. Carolina Sampaio é 961582. Você respondeu com: " + carolina
    document.getElementById("marcelo").innerHTML = "O CRM do Dr. Marcelo Silva é 1004182. Você respondeu com: " + marcelo
    document.getElementById("carlos").innerHTML = "O CRM do Dr. Carlos Alfredo é 595931. Você respondeu com: " + carlos


    if (jorge == 363887) {
        document.getElementById("respostajorge").innerHTML = "Você acertou! Parabéns. ✓"
    } else {
        document.getElementById("respostajorge").innerHTML = "Você errou. Tente novamente. :("
    }

    if (juliane == 597226) {
        document.getElementById("respostajuliane").innerHTML = "Você acertou! Parabéns. ✓"
    } else {
        document.getElementById("respostajuliane").innerHTML = "Você errou. Tente novamente. :("
    }

    if (carolina == 961582) {
        document.getElementById("respostacarolina").innerHTML = "Você acertou! Parabéns. ✓"
    } else {
        document.getElementById("respostacarolina").innerHTML = "Você errou. Tente novamente. :("
    }

    if (marcelo == 1004182) {
        document.getElementById("respostamarcelo").innerHTML = "Você acertou! Parabéns. ✓"
    } else {
        document.getElementById("respostamarcelo").innerHTML = "Você errou. Tente novamente. :("
    }

    if (carlos == 595931) {
        document.getElementById("respostacarlos").innerHTML = "Você acertou! Parabéns. ✓"
    } else {
        document.getElementById("respostacarlos").innerHTML = "Você errou. Tente novamente. :("
    }

}
