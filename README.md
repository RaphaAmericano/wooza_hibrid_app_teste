## Descrição

Desenvolver um aplicativo para autenticar, exibir e detalhar usuários. O aplicativo deve funcionar no Navegador, Android e IOS. Contém os seguintes requisitos:

### Login
- Criar uma tela de login, para acesso via email/senha. Armazenar os dados no storage para que o usuário possa navegar no app sem necessidade de nova autenticação.
- Ler o arquivo "usuarios.json", para validar se o email/senha informados estão corretos.
- Salvar no storage o usuário atualmente logado.

### Home
- Criar uma tela que será a página inicial do aplicativo. Após o login, deve-se redirecior para a home. 
- Se usuário Android ou IOS, deve-se verificar se o usuário está com ou sem internet, e exibir um alerta caso esteja offline.
- A home deve conter botões de ação para as seguintes funcionalidades: deslogar, acessar perfil (usuário autenticado), listar usuarios.

### Lista de usuários
- Criar uma tela que liste todos os usuários contidos no arquivo "usuarios.json".
- Ao clicar em um dos itens da lista, deve-se abrir os dados completos em uma nova tela com o perfil (dados completos).

### Perfil do usuário
- Criar uma tela que exiba todos os dados do usuário selecionado. Esta tela pode ser chamada pela home (exibindo o perfil do usuário autenticado) ou pela listagem de usuário.

### Outras informações
- Deve-se utilizar o component do ionic native para verificar se existe ou não conexão com a internet.
- Folha de estilo pode ser: .sass ou .scss
- Fique a vontade para melhorias e inclusão de funcionalidades.
- Organize bem seus módulos e componentes, sempre pensando no conceito de lazy load.
- Organize suas branches e commits no git.
- Caso tenha dúvidas ou encontre alguma falha, fique a vontade para entrar em contato e ou corrigir.


## Tecnologia(s) obrigatória(s)

- [Ionic](http://ionicframework.com/docs/components/)
- [Ionic Native](https://ionicframework.com/docs/native/)
- [Angular](https://angular.io)
- [Typescript](https://ionicframework.com/docs/native/)
- [Node](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [SASS](https://sass-lang.com/)


## Entregáveis 

- Após finalizar o teste, disponibilize-o em um repositório git público.
- Junto ao projeto inclua um arquivo .apk para o Android
- Devido a complexidade, não é necessário arquivos ou versões IOS.
- O importante não é se tudo está ao pé da letra, mas se consegue fazer e outras pessoas conseguem compreender o código :)

