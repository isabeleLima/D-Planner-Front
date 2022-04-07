function cadCadeira() {
    let cadeira = document.getElementById("cadeira-cad").value;
    let prof = document.getElementById("prof-cad").value;
    let semestre = document.getElementById("semestre-cad").value;
    let status = document.getElementById("status-cad").value;
    
    try {
        verifyText(cadeira, "NOME DA CADEIRA");
        verifyText(prof, "PROFESSOR");
        verifyText(semestre, "SEMESTRE");
        verifyText(status, "STATUS");

        document.location.reload(true);
    } catch (erro) {
        alert(erro.message);
    }   
}

function attCadeira() {
    let cadeira = document.getElementById("cadeira-att").value;
    let prof = document.getElementById("prof-att").value;
    let semestre = document.getElementById("semestre-att").value;
    let status = document.getElementById("status-att").value;
    
    try {
        verifyText(cadeira, "NOME DA CADEIRA");
        verifyText(prof, "PROFESSOR");
        verifyText(semestre, "SEMESTRE");
        verifyText(status, "STATUS");
        
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