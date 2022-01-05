function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 6
    var mes = data.toLocaleDateString()

    msg.innerHTML = `Hoje é dia ${mes}. <br> Agora são ${hora} horas.`

    if (hora >= 0 && hora < 11){
        //bom dia
        img.src = './img/manha.jpg'
        document.body.style.backgroundColor = '#F1F0CF'
        document.body.style.color = 'black'

    } else if ( hora >= 12 && hora <= 18){
        //tarde
        img.src = './img/tarde.jpeg'
        document.body.style.backgroundColor = '#C2DDC8'
        document.body.style.color = 'black'
    } else if (hora >= 19){
        //noite
        img.src = './img/anoitecer.jpeg'
        document.body.style.backgroundColor = '#A4A5A6'
    }
}