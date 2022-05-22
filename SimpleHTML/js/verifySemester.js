function attSemestre() {
    let nome = document.getElementById("nome-att").value;
    let dataIni = document.getElementById("dataIni-att").value;
    let dataFim = document.getElementById("dataFim-att").value;
    
    try {
        verifyName(nome);
        verifyDate(dataIni, dataFim);
        
        document.location.reload(true);
    } catch (erro) {
        alert(erro.message);
    }
    
}

function cadSemestre() {
    let nome = document.getElementById("nome-cad").value;
    let dataIni = document.getElementById("dataIni-cad").value;
    let dataFim = document.getElementById("dataFim-cad").value;
    
    try {
        verifyName(nome);
        verifyDate(dataIni, dataFim);

        document.location.reload(true);
    } catch (erro) {
        alert(erro.message);
    }
    
}

function verifyName(name) {
    if (!name) {
        throw new Error('Campo SEMESTRE não pode ser vazio')
    }
    return true;
}

function verifyDate(dateStr, dateEnd) {
    if (!dateStr) {
        throw new Error('Selecione a data de inicio do semestre')
    }
    if (!dateEnd) {
        throw new Error('Selecione a data de finalização do semestre')
    }
    if (dateEnd < dateStr) {
        throw new Error('Data inicial deve ser anterior a de finalização')
    }

    return true;
}