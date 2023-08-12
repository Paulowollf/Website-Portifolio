document.getElementById("whatsapp-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;
    const question = document.getElementById("question").value;
    const message = document.getElementById("message").value;

    const questionText = getQuestionText(question);

    const encodedMessage = encodeURIComponent(`Nome: ${name}\nIdade: ${age}\nCidade: ${city}\nPergunta Favorita: ${questionText}\nMensagem Adicional: ${message}`);

    // Altere o número do WhatsApp para o número desejado
    const phoneNumber = "NUMERO_DO_WHATSAPP";
    const whatsappLink = `https://wa.me/5519989196613?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
});

function getQuestionText(questionValue) {
    switch (questionValue) {
        case "1":
            return "Brocolis com catupry?";
        case "2":
            return "Qual é o seu animal favorito?";
        case "3":
            return "Qual é o seu hobby favorito?";
        case "4":
            return "Qual é o seu prato favorito?";
        default:
            return "N/A";
    }
}
