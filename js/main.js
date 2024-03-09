    $('#cpf').mask('000.000.000-00');

    $('#cep').mask('00000-000')

    $('#telefone').mask('(00) 00000-0000')

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        endereco: {
            required: true
        },
        email: {
            required: true
        },
        telefone: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        }
    },

    messages: {
            nome: 'Por favor, insira o seu nome'
    },

    submitHandler: function(form) {
        console.log(form)
    }
})