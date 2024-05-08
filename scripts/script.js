const body = document.body;
const inputs = document.querySelectorAll("input")

function enviarFormulario() {
    if (formulario()) {
        enviarParaWhatsApp()
    }
}

function formulario() {
 const form = document.querySelector('form');
 const inputs = form.querySelectorAll('input');

 let isValid = true;

 inputs.forEach(input => {
    if (!input.checkValidty()) {
        input.classList.add('invalid');
        isValid = false;
    } else {
        input.classList.remove('invalid') ;
    
    }
 });
 return isValid;
}


function mascaraTelefone (telefone)  {
    //const texto = telefone.value;
    const textoApenasNumeros = texto.replace(/\D/g,'').substring(0, 11);

    let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    if (textoApenasNumeros.length < 11)  {
        telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }

    inputs[2].value = telefoneFormatado ;

}

    const campoTelefone = document.getElementById( 'input-tel' ) ;
campoTelefone.addEventListener('input', function() {
    mascaraTelefone(this);
});

function enviarParaWhatsApp ()  {
    const nome = document.getElementById('input-nome').value;
    const email = document.getElementById('input-email').value;
    const telefone = document.getElementById('input-tel').value;
    const mensagem = document.getElementById('input-msg').value;

    const texto  =  `Nome: ${nome} \nE-mail: ${email} \nTelefone: ${telefone} \nMensagem: ${mensagem} `;
    const textoCodificado = encodeURIComponent(texto);
    const numeroWhatsApp = '81982271623' ; 
    const url = `https://wa.me/ ${numeroWhatsApp} ?text= ${textoCodificado} `;

    window.open(url , '_blank');
}