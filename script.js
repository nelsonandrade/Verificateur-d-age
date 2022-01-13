function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if  (fano.value.length == 0 || Number (fano.value) > ano){ 
        window.alert('[ERRO] Vérifier votre donnes et réessayes!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var radius = document.querySelectorAll("input[type='radio']")
        var genero = ''
        if (radius [0].checked) {
            genero = 'Homme'
        }else{
            genero = 'Femme'
        }
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = ' un Homme'
            if (idade >=0 && idade <10) {
                //enfant
                img.setAttribute('src', 'bebeh.jpg')
            }else if (idade <21) {
                //jeune
                img.setAttribute('src', 'rapaz.jpg')
            }else if ( idade < 50) {
                //adulte
                img.setAttribute('src', 'homem.jpg')
            }else {
                //+65
                img.setAttribute('src', 'idoso.jpg')
            }

        }else if (fsex[1].checked) {
            genero = 'une Femme'
            if (idade >=0 && idade <10) {
                //enfant
                img.setAttribute('src', 'menina.jpg')
            }else if (idade <21) {
                //jeune
                img.setAttribute('src', 'rapariga.jpg')
            }else if ( idade < 50) {
                //adulte
                img.setAttribute('src', 'mulher.jpg')
            }else {
                //+65
                img.setAttribute('src', 'idosa.jpg')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = ` Nous avons trouvé  ${genero} avec ${idade} ans`
    res.appendChild(img)
} 
