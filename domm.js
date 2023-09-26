const user = {
    name: 'jane Doe',
    age: 25,
    mail: 'jane@mail.com',
    favFilms: ['Spencer', 'Ice Age 3', 'Se7en', 'Inception', 'SAW'],
}

function createUser(user) {

    document.getElementById('username').textContent = user.name;
    document.getElementById('edad').textContent = user.age;
    document.getElementById('email').textContent = user.mail;

    const ul = document.getElementById('fav-films');

    user.favFilms.forEach((film) => {
        const li = document.createElement('li');
        li.textContent = film;
        ul.appendChild(li);
    })
}

createUser(user);


// Eventos

const inputName = document.getElementById('name');
const userName = document.getElementById('username');
const inputage = document.getElementById('age');
const edad = document.getElementById('edad');
const inputemail = document.getElementById('mail');
const email = document.getElementById('email');


const profileBtn = document.getElementById('ProfileBtn');

profileBtn.addEventListener('click', () => {
    userName.textContent = inputName.value;
    edad.textContent = inputage.value;
    email.textContent = inputemail.value;
})
