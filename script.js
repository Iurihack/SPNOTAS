
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'iuri' && password === 'admin') {
    window.location.href = 'pedidos.html';
  } else {
    document.getElementById('error').textContent = 'Usuário ou senha incorretos!';
  }
});
