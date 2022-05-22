function tryToRegister() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let fullName = document.getElementById("fullName").value;
    let userName = document.getElementById("userName").value;


    try {
        verifyEmail(email);
        verifyPassword(password);
        verifyText(fullName,"nome completo");
        verifyText(userName,"username")

        location.href = "./home.html";
    } catch (erro) {
        alert(erro.message);
    }

}

function verifyPassword(password) {
    if (!password) {
        throw new Error('Campo senha não pode ser vazio')
    }
    if (password.length < 8) {
        throw new Error('Campo senha deve ter no minimo 8 caracteres')
    }
    return true;
}

function verifyEmail(email) {
    let verifyEstruct = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}$/;
    if (!email) {
        throw new Error('O campo email não pode ser vazio')
    }

    if (!verifyEstruct.test(email)) {
        throw new Error('Email invalido')
    }
    return true;
}

function verifyText(text,campo) {
    if (!text) {
        throw new Error(`O campo ${campo} não pode ser vazio`);
    }
}