let num = [1, 2, 4, 7]
console.log(num)
console.log(`O primeiro elemento do vetor é ${num[0]}, tendo ${num.length} posições`)

// num[4] = 8 cria mais um valor dentro do elemento 4
console.log(`Vou inserir mais um elemento: ${num[4]=8}`)
console.log(num)

// num.push(10) cria um elemento no final da array e coloca o valor que está entre aspas
console.log(`Estou inserindo o número no final do vetor: ${num.push(10)}`)

console.log(num)

num.length // imprime o número de elementos no array
console.log(`O vetor tem ${num.length} posições`)

console.log(num)

console.log(` Agora o vetor foi colocado em ordem numérica e ficou assim: ${num.sort()}`) //coloca em ordem crescente
