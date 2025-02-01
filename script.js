document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'iuri' && password === 'admin') {
    // Redireciona para a página de pedidos
    window.location.href = './pedidos.html';
  } else {
    document.getElementById('error').textContent = 'Usuário ou senha incorretos!';
  }
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const pedido = document.getElementById('pedido').value;
  const valor = document.getElementById('valor').value;
  const observacao = document.getElementById('observacao').value;
  const endereco = document.getElementById('endereco').value;

  // Mensagem formatada para o pedido
  const mensagemPedido = `*Novo Pedido* 🍔\nPedido: ${pedido}\nValor: R$${valor}\nObservação: ${observacao}\nEndereço: ${endereco}`;
  
  // Número de WhatsApp para o pedido
  const numeroWhatsAppPedido = "5577991399209"; // Número do WhatsApp para o pedido

  // Redireciona para o WhatsApp com a mensagem do pedido
  window.open(`https://api.whatsapp.com/send?phone=${numeroWhatsAppPedido}&text=${encodeURIComponent(mensagemPedido)}`, '_blank');

  // Mensagem formatada para a confirmação de pedido
  const mensagemConfirmacao = `*Confirmação de Pedido* ✅\nPedido: ${pedido}\nValor: R$${valor}\nObservação: ${observacao}\nEndereço: ${endereco}\n\nSeu pedido foi recebido e está em preparação.`;

  // Número de WhatsApp para a confirmação
  const numeroWhatsAppConfirmacao = "5577981063119"; // Número para a confirmação do pedido

  // Redireciona para o WhatsApp com a mensagem de confirmação
  window.open(`https://api.whatsapp.com/send?phone=${numeroWhatsAppConfirmacao}&text=${encodeURIComponent(mensagemConfirmacao)}`, '_blank');
});
