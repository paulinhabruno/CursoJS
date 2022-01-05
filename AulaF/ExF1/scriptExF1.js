
function contar (){
    let inicio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let pulo = document.querySelector('#pulo')

    let res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || pulo.value.length == 0){
        alert('Erro. Faltam dados!')
    }else{
        res.innerHTML = 'Contanto: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pulo.value)

        // Enquanto o contador começa no INICIO, e enquanto ele for MENOR OU IGUAL ao FIM, o contator vai receber ele mesmo, mais o PASSO
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c}`

            // parei no minuto 10:16 da aula

        }
        
    }

}



