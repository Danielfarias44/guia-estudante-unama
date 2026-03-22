function reservar(botao) {

  // pega o card (caixa do laboratório)
  const card = botao.closest(".card");

  // pega o nome do labz
  const lab = card.querySelector(".badge").innerText;

  // muda o botão
  botao.innerText = "Reservado";
  botao.style.backgroundColor = "#999";
  botao.disabled = true;

  // opcional: mostrar alerta
  alert(lab + " reservado com sucesso!");
}