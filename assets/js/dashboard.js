if (document.cookie === '') {
    window.location.href = 'index.html'
}
const navbar = document.querySelector('.col-navbar')
const cover = document.querySelector('.screen-cover')
const profilename = document.getElementById('profile-name')


let sidebar_items = document.querySelector('.sidebar-item')
const obj = JSON.parse(document.cookie.substring(10));

profilename.innerText = obj.username

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
function logout() {
    var cookies = document.cookie.split(";");

    // Iterate over cookies and remove them
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
    window.location.href = 'index.html'
}
setTimeout(() => {
    circles.forEach((v, k) => {
        v.classList.add('running')
    })
}, 0)