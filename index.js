const informacao = [
  { codigo: "USD", nome: "Dólar Americano" },
  { codigo: "EUR", nome: "Euro" },
  { codigo: "BRL", nome: "Real Brasileiro" },
  { codigo: "GBP", nome: "Libra Esterlina" },
  { codigo: "JPY", nome: "Iene Japonês" }
]

taxas = {
  USD: 1,
  BRL: 5.26,  
  EUR: 0.84,  
  GBP: 0.73,
  JPY: 154.4
}


let botao = document.getElementById("calc");

let texto = document.getElementById("mostrar");

let valor = document.getElementById("valor");

let escolhas = document.getElementById("moedas");

let opcao_dois = document.getElementById("opcao_dois");



informacao.forEach(moeda => {
  const opcao1 = document.createElement("option");
  opcao1.value = moeda.codigo;
  opcao1.textContent = `${moeda.codigo} (${moeda.nome})`;

  const opcao2 = opcao1.cloneNode(true);

 escolhas.appendChild(opcao1);

 opcao_dois.appendChild(opcao2)

});


botao.addEventListener("click", function() {

let valor_usuario = parseFloat(valor.value);

let de = escolhas.value;

let para = opcao_dois.value;

let valorFinal = valor_usuario*(taxas[para] / taxas[de])


if (valor_usuario==0){
  alert("Digite um valor");
}
texto.innerHTML = valorFinal.toFixed(2);


})

