function scrollToRegister() {
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('donorForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for registering as a donor!');
});
