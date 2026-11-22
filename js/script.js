//--------------BUSCA NO NAVEGADOR O VALOR SALVO COMO TEMA-------------
if (localStorage.getItem("tema") === "escuro") {
//--------------ADICIONA À body DA PÁGINA A CLASS "escuro"-------------
  document.body.classList.add("escuro");
}


//--------------PROCURA SE HÁ UM ELEMENTO COM UM ID = "luz------------"
const luz = document.querySelector("#luz");


if (luz) {
  //-----------------DEFINE O QUE ACONTECERÁ APÓS O CLICK----------------
  luz.onclick = function () {
    document.body.classList.toggle("escuro");
    const escuro = document.body.classList.contains("escuro");
    localStorage.setItem("tema", escuro ? "escuro" : "claro");
  };
}
//---------------INICIO DO CÓDIGO PARA SIMULAÇÃO DE CONTATO---------------
//-------------------------SIMULAÇÃO DE CONTATO --------------------------

//---------------VAI BUSCAR O FORMULÁRIO NO ID DO HTML------------------
const formulario = document.querySelector("#contato-simu");

//---------------A CONDICIONAL É PARA VERIFICAR SE EXISTE UM FORMULÁRIO-----------
if (formulario) {
  const campoNome = document.querySelector("#nome");
  const campoEmail = document.querySelector("#email");
  const campoMensagem = document.querySelector("#mensagem");
  
  const aviso = document.querySelector("#aviso");

//---------------LIBERAÇÃO PARA O JAVASCRIPT CONTROLAR OS AVISOS---------------
  formulario.noValidate = true;


//---------------EXECUTARÁ QUANDO A PESSOA TENTAR ENVIAR O FORMULÁRIO----------
  formulario.addEventListener("submit", function (evento) {
//---------------IMPEDE QUE A PÁGINA RECARREGUE------------------
    evento.preventDefault();

//--------------LÊ O TEXTO E REMOVE POSSÍVEIS ESPAÇOS------------
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const mensagem = campoMensagem.value.trim();

//---------------- VALIDAÇÃO DE CONTATO ----------------
    if (nome === "") {
      aviso.textContent = "Preencha seu nome.";
      campoNome.focus();
      return;
    }
    if (email === "" || !campoEmail.validity.valid) {
      aviso.textContent = "Preencha um e-mail válido.";
      campoEmail.focus();
      return;
    }
    if (mensagem === "") {
      aviso.textContent = "Escreva uma mensagem.";
      campoMensagem.focus();
      return;
    }
//------------------CONFIRMA A SIMULAÇÃO-------------------
    aviso.textContent =
      "Logo responderei, " + nome + "! O Envio foi simulado com sucesso.";

//------------------RESETA O FORMULÁRIO------------------.
    formulario.reset();
  });
}
