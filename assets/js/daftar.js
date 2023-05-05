const api = 'https://64510c9ca3221969115946ad.mockapi.io'

const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    event.preventDefault()

    const formData = handleGetFormData();

    saveData(formData)
});


const saveData = async(formData) => {
    const { email, username, password, universitas, no_hp } = formData
    try {
        const response = await fetch(`${api}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                universitas,
                email,
                no_hp
            })
        });

        if (!response.ok) {
            throw new Error(`POST request failed with status code ${response.status}`);
        }

        alert('Data Berhasil Tersimpan');
        window.location.href = "/login.html";
        return true;
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }

}

function handleGetFormData() {
    const password = document.getElementById("password").value;
    const confpassword = document.getElementById("confpassword").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const universitas = document.getElementById("universitas").value;
    const no_hp = document.getElementById("no_hp").value;


    if (username.includes(' ')) {
        alert('Username Tidak boleh Menggunakan spasi');
        return false; // terdapat spasi
    }
    if (password != confpassword) {
        alert('Password, dan Konfirmasi Password Tidak Cocok');
        return false;
    }
    return { email, username, password, universitas, no_hp }
}


// function validateFormData(formData) {
//     if (formData) {
//         return true;
//     } else {
//         return false;
//     }
// }