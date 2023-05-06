if (document.cookie != '') {
    window.location.href = 'dashboard.html'
}
const api = 'https://64510c9ca3221969115946ad.mockapi.io'
let users = []
const a = (async() => {
    const data = await logJSONData();
    users.push(data);
})();
const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    event.preventDefault()
    handleGetFormData();
});

function handleGetFormData() {
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    if (email === '' || password === '') {
        alert('email dan Password Harus Diisi');
        return false;
    }
    if (!isEmailExist(email) || !isPasswordExist(password)) {
        alert('email atau password salah');
        return false;
    } else {
        setCookie("userLogin", findByEmail(email));
        window.location.href = "/dashboard.html";
    }

}

function isPasswordExist(password) {
    return users[0].some(user => user.password === password);
}

function isEmailExist(email) {
    return users[0].some(user => user.email === email);
}

function findByEmail(email) {
    return users[0].find(user => user.email === email);
}

function setCookie(name, value) {
    const date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000)); // set the expiration time to 1 day
    const expires = "expires=" + date.toUTCString();
    const myObjStr = JSON.stringify(value);
    document.cookie = name + "=" + myObjStr + ";" + expires + ";path=/";
}
async function logJSONData() {
    const response = await fetch(api + '/user');
    const jsonData = await response.json();
    return jsonData
}