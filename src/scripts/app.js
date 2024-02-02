function criptografia() {
    let textoParaCriptografar = document.getElementById('textarea_para_acao').value;

    let textoCorreto = verificacaoTexto(textoParaCriptografar);

    if(!textoCorreto) {
        return;
    }

    let textoCriptografado = textoParaCriptografar
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('textarea_resultado').textContent = textoCriptografado;
    document.getElementById('div_textarea_resultado').style.display = 'flex';
    document.getElementById('textarea_resultado').classList.remove('not_visible');
    document.getElementById('botao_copiar').classList.remove('not_visible');
    document.getElementById('div_imagem_resultado').classList.add('not_visible');
    document.getElementById('div_imagem_resultado').classList.remove('conteudo_resultado_itens');
}

function descriptografia() {
    let textoParaDescriptografar = document.getElementById('textarea_para_acao').value;

    let textoCorreto = verificacaoTexto(textoParaDescriptografar);

    if(!textoCorreto) {
        return;
    }

    let textoDescriptografado = textoParaDescriptografar
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        document.getElementById('textarea_resultado').textContent = textoDescriptografado;
        document.getElementById('div_textarea_resultado').style.display = 'flex';
        document.getElementById('textarea_resultado').classList.remove('not_visible');
        document.getElementById('botao_copiar').classList.remove('not_visible');
        document.getElementById('div_imagem_resultado').classList.add('not_visible');
        document.getElementById('div_imagem_resultado').classList.remove('conteudo_resultado_itens');
}

function verificacaoTexto(textoParaVerificar) {
    let possuiMaiuscula = /[A-Z]/.test(textoParaVerificar);
    let possuiCaracteresEspeciais = /[^a-zA-Z0-9\s]/.test(textoParaVerificar);
    
    if(possuiMaiuscula && possuiCaracteresEspeciais) {
        mostrarAlerta('Remova as letras maiúsculas e caracteres especiais');
        return false;
    } else if(possuiCaracteresEspeciais) {
        mostrarAlerta('Remova os caracteres especiais');
        return false;
    } else if(possuiMaiuscula) {
        mostrarAlerta('Remova as letras maiúsculas');
        return false;
    }

    return true;
}

function mostrarAlerta(mensagem) {
    let alerta = document.getElementById('texto_alerta');
    let alertaImagem = document.getElementById('id_icone_alerta');

    const textoOriginal = 'Apenas letras minúsculas e sem acento';

    alerta.textContent = mensagem;
    alerta.classList.add('alerta-piscante');
    alertaImagem.classList.add('icone_alerta_piscante')

    setTimeout(() => {
        alerta.classList.remove('alerta-piscante');
        alertaImagem.classList.remove('icone_alerta_piscante');
        alerta.textContent = textoOriginal;
    }, 6000);
}

function botaoCriptografar() {
    document.getElementById('botao_criptografar').addEventListener('click', () => {
        criptografia();
    });
}

function botaoDescriptografar() {
    document.getElementById('botao_descriptografar').addEventListener('click', () => {
        descriptografia();
    });
}

function botaoCopiar() {
    document.getElementById('botao_copiar').addEventListener('click', () => {
        let textoParaCopiar = document.getElementById('textarea_resultado').textContent;

        navigator.clipboard.writeText(textoParaCopiar);
    })
}

botaoCriptografar();
botaoDescriptografar()
botaoCopiar();