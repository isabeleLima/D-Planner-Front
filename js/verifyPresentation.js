function cadPresentation() {
    let apresentacao = document.getElementById("apresentacao-cad").value;
    let cadeira = document.getElementById("cadeira-cad").value;
    let descricao = document.getElementById("descricao-cad").value;
    let entrega = document.getElementById("entrega-cad").value;

    try {
        verifyText(apresentacao, "NOME DA APRESENTAÇÃO");
        verifyText(cadeira, "CADEIRA");
        verifyText(descricao, "DESCRIÇÃO");
        verifyText(entrega, "PRAZO DE ENTREGA");

        document.location.reload(true);
    } catch (erro) {
        alert(erro.message);
    }
}

function attPresentation() {
    let apresentacao = document.getElementById("apresentacao-att").value;
    let cadeira = document.getElementById("cadeira-att").value;
    let descricao = document.getElementById("descricao-att").value;
    let entrega = document.getElementById("entrega-att").value;

    try {
        verifyText(apresentacao, "NOME DA APRESENTAÇÃO");
        verifyText(cadeira, "CADEIRA");
        verifyText(descricao, "DESCRIÇÃO");
        verifyText(entrega, "PRAZO DE ENTREGA");

        document.location.reload(true);
    } catch (erro) {
        alert(erro.message);
    }
}

function verifyText(text, campo) {
    if (!text) {
        throw new Error(`O campo ${campo} não pode ser vazio`);
    }
    return true;
}