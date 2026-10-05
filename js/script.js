const formLogin = document.getElementById('form-login');

if (formLogin) {
    formLogin.addEventListener('submit', function (evento) {
        evento.preventDefault();
        window.location.href = 'inicio.html';
    });
}
