function subscribe(plan) {
    const message = `*Novo Pedido de Assinatura de Pães*\n\n` +
                    `*Plano Escolhido:* ${plan}\n\n` +
                    `Por favor, envie seu nome e dia de entrega preferido.`;

    const whatsappNumber = '+5511937457836';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}

document.getElementById('subscriptionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const deliveryDay = document.getElementById('deliveryDay').value;
    const plan = document.getElementById('plan').value;
    const paymentDay = document.getElementById('paymentDay').value;
    const reminder = document.getElementById('reminder').value;

    const message = `*Novo Pedido de Assinatura de Pães*\n\n` +
                    `*Nome:* ${name}\n` +
                    `*Dia de Entrega Preferido:* ${deliveryDay}\n` +
                    `*Plano Escolhido:* ${plan}\n` +
                    `*Dia do Mês para Pagamento:* ${paymentDay}\n` +
                    `*Deseja ser lembrado:* ${reminder}\n\n` +
                    `Por favor, aguarde nosso contato!`;

    const whatsappNumber = '+5511937457836';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
});
