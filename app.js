function criptografarTexto(texto) {
  return texto.replace(/e/g, "enter")
              .replace(/i/g, "imes")
              .replace(/a/g, "ai")
              .replace(/o/g, "ober")
              .replace(/u/g, "ufat");
}

function descriptografarTexto(texto) {
  return texto.replace(/enter/g, "e")
              .replace(/imes/g, "i")
              .replace(/ai/g, "a")
              .replace(/ober/g, "o")
              .replace(/ufat/g, "u");
}

function exibirResultado(resultado) {
  const areaResultado = document.querySelector('.areaResult');
  const mensagemResultado = areaResultado.querySelector('h1');
  const notMessageImg = areaResultado.querySelector('.notMessage');

  if (resultado) {
    mensagemResultado.textContent = resultado;
    notMessageImg.style.display = 'none';
  } else {
    mensagemResultado.textContent = 'Nenhuma mensagem encontrada';
    notMessageImg.style.display = 'block';
  }
}

function copiarTexto(texto) {
  const textarea = document.createElement('textarea');
  textarea.value = texto;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

// Função principal para lidar com a interação do usuário
function main() {
  const textarea = document.getElementById('decodificar');
  const criptografarBtn = document.getElementById('criptografar');
  const descriptografarBtn = document.getElementById('descriptografar');
  const copiarBtn = document.getElementById('copy');

  criptografarBtn.addEventListener('click', () => {
    const texto = textarea.value.toLowerCase();
    const resultado = criptografarTexto(texto);
    exibirResultado(resultado);
    copiarBtn.classList.remove('hidden');
  });

  descriptografarBtn.addEventListener('click', () => {
    const texto = textarea.value.toLowerCase();
    const resultado = descriptografarTexto(texto);
    exibirResultado(resultado);
    copiarBtn.classList.remove('hidden');
  });

  copiarBtn.addEventListener('click', () => {
    const areaResultado = document.querySelector('.areaResult h1');
    copiarTexto(areaResultado.textContent);
    alert('Texto copiado para área de transferência!');
  });
}

// Inicialização do script
window.addEventListener('DOMContentLoaded', main);