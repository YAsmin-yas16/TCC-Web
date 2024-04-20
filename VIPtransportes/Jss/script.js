///Variável possuindo o HTML da tela de Login
const telaLoginHtml = '<div class="signup-container">'+
                        '<form action="#">'+
                            '<div class="input-group">'+
                                '<label for="email">E-mail:</label>'+
                                '<input type="email" id="email" name="email" required>'+
                            '</div>'+
                            '<div class="input-group">'+
                                '<label for="password">Senha:</label>'+
                                '<input type="password" id="password" name="password" required>'+
                            '</div>'+
                        '</form>'+
                        '</div>';

///Variável possuindo o HTML da tela de Cadastro
const telaCadastroHtml = '<div class="signup-container">'+
                            '<form action="#">'+
                                '<div class="input-group">'+
                                    '<label for="username">Usuário:</label>'+
                                    '<input type="text" id="username" name="username" required>'+
                                '</div>'+
                                '<div class="input-group">'+
                                    '<label for="email">E-mail:</label>'+
                                    '<input type="email" id="email" name="email" required>'+
                                '</div>'+
                                '<div class="input-group">'+
                                    '<label for="password">Senha:</label>'+
                                    '<input type="password" id="password" name="password" required>'+
                                '</div>'+
                                '<div class="input-group">'+
                                    '<label for="confirm-password">Confirmar Senha:</label>'+
                                    '<input type="password" id="confirm-password" name="confirm-password" required>'+
                                '</div>'+
                            '</form>'+
                            '</div>';

///Variável possuindo o HTML da tela de Confirmação de E-mail
const telaConfirmacaoHtml = '<div class="signup-container">'+
                                '<form action="#">'+
                                    '<h3>Insira o código que foi enviado para seu email em seguida:</h3>'+
                                    '<div class="input-group">'+
                                        '<label for="codigo-rastreio">Código:</label>'+
                                        '<input type="text" id="codigo-rastreio" name="codigo-rastreio" required>'+
                                    '</div>'+
                                '</form>'+
                                '</div>';
/**
 * Abrir tela de Login
 */
function Login()
{
    Swal.fire({
        title: "Logar",
        showCancelButton: true,
        confirmButtonText: "Logar",
        html: telaLoginHtml
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        }
      });
}

/**
 * Abrir tela de Cadastro
 */
function Cadastrar()
{
    Swal.fire({
        title: "Cadastrar",
        showCancelButton: true,
        confirmButtonText: "Cadastrar",
        html: telaCadastroHtml
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            ConfirmarEmail();
        }
      });
}

/**
 * Abrir tela de Confirmação de E-mail
 */
function ConfirmarEmail()
{
    Swal.fire({
        title: "Confirme E-mail",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        html: telaConfirmacaoHtml
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        }
      });
}