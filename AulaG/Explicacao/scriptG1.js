// para imprimir os valores dentro dos elementos

let valores = [8,1,7,4,2,9]

//console.log(valores)

//console.log(valores[0])
//console.log(valores[1])
//console.log(valores[2])
//console.log(valores[3])
//console.log(valores[4])
//console.log(valores[5])

for(let pos = 0 ; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}
// ou

for(let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}

