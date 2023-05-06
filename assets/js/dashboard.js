const navbar = document.querySelector('.col-navbar')
const cover = document.querySelector('.screen-cover')
const logout = document.getElementById("logout");

const sidebar_items = document.querySelectorAll('.sidebar-item')

function toggleNavbar() {
    navbar.classList.toggle('appear')
    cover.classList.toggle('d-none')
}

function toggleActive(e) {
    sidebar_items.forEach(function (v, k) {
        v.classList.remove('active')
    })
    e.closest('.sidebar-item').classList.add('active')

}

const circles = document.querySelectorAll('svg circle:last-of-type')

setTimeout(() => {
    circles.forEach((v, k) => {
        v.classList.add('running')
    })
}, 0)

logout.addEventListener("click", function () {
    // Get all cookiesdsad
    var cookies = document.cookie.split(";");

    // Iterate over cookies and remove them
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
    window.location.href = "/";
    // alert('Berhasil Logout');

});