function tryToLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    try {
        verifyEmail(email);
        verifyPassword(password);

        location.href = "./home.html";
    } catch (erro) {
        alert(erro.message);
    }

}

function verifyPassword(password) {
    if (!password) {
        throw new Error('Campo senha não pode ser vazio')
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
