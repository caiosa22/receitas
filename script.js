// URL do WhatsApp
const whatsappUrl = 'https://api.whatsapp.com/send?phone=5577988281339&text=Ol%C3%A1%2C%20eu%20quero%20o%20ebook%20de%20receitas';

// Variável para controlar se o botão foi clicado
let buttonClicked = false;

// Função para redirecionar para o WhatsApp
function redirectToWhatsApp() {
    if (!buttonClicked) {
        window.location.href = whatsappUrl;
    }
}

// Event listener para quando o botão for clicado
document.getElementById('whatsappButton').addEventListener('click', function() {
    buttonClicked = true;
});

// Redirecionamento automático após 20 segundos
setTimeout(redirectToWhatsApp, 20000);

