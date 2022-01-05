function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', './img/menino.jpeg')
            }else if (idade > 10 && idade < 21){
                //jovem
                img.setAttribute('src', './img/rapaz.jpeg')
            }else if(idade > 21 && idade < 59){
                //adulto
                img.setAttribute('src', './img/homem.jpeg')
            } else if (idade > 60){
                //idoso
                img.setAttribute('src', './img/idoso.jpeg')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade > 0 && idade < 10){
                //criança
                img.setAttribute('src', './img/menina.jpeg')
            }else if (idade > 10 && idade < 21){
                //jovem
                img.setAttribute('src', './img/moca.jpeg')
            }else if(idade > 21 && idade < 59){
                //adulto
                img.setAttribute('src', './img/mulher.jpeg')
            } else if (idade > 60){
                //idoso
                img.setAttribute('src', './img/idosa.jpeg')
            }
        }
    }
    
    res.innerHTML = `<strong>Idade e sexo verificados</strong>: ${genero} com ${idade} anos. </br> </br>`

    res.appendChild(img)
}