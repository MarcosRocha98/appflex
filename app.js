/**
 * App Flex
 * @author Marcos Rocha
 */

function calcular() {
    // Entrada
    // variável etanool recebe o contéudo da caixa input
    let etanol = frmflex.inputetanol.value
    console.log(etanol) // teste e apoio a lógica
    let gasolina = frmflex.inputgasolina.value
    console.log(gasolina) // teste e apoio a lógica

    // Processamento
    // Se valor do litro do etanol custar até 70% do valor da gasolina, abastecer com etanol
    if (etanol < 0.7 * gasolina) {
        console.log("Abasteça com etanol")
        // troca a imagem no html
        document.getElementById("status").src="./img/etanol.png"
    } else {
        console.log("Abasteça com gasolina")
        document.getElementById("status").src="./img/gasolina.png"
    }
}

function limpar(){
    document.getElementById("status").src="./img/neutro.png"
}