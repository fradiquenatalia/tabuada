function gerar() {
  let numero = document.getElementById("txtn");
  let resultado = document.getElementById("res");

  if (numero.value.length == 0) {
    alert("Por favor digite um número!");
  } else {
    let n = Number(numero.value);
    resultado.innerHTML = " ";
    for (let c = 1; c <= 10; c++) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c} `;
      resultado.appendChild(item);
    }
  }
}
