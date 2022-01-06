
function contar (){
    let inicio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let pulo = document.querySelector('#pulo')

    let res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || pulo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
       // alert('Erro. Faltam dados!')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value) // convertendo para number o valor presente no início.
        let p = Number(pulo.value)
        let f = Number(fim.value)

        if (p <= 0){
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }

        if(i < f){
// Enquanto o contador começa no INICIO, e enquanto ele for MENOR OU IGUAL ao FIM, o contator vai receber ele mesmo, mais o PASSO
        for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}` // código da mãozinha no site unicode emoji. Usa o comando \u{INSERE O CÓDIGO AQUI}
             }
           
        } else {
            for (let c = i ; c >= f ; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}


