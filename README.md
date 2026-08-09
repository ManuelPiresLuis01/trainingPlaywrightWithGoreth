# trainingPlaywrightWithGoreth

SL1 - Validar funcionamento do input Username
1 - DADO que acedo a pagina saucedemo.com
2 - QUANDO A PAGINA JA ESTIVER CARREGADA
3 - E EU VER O INPUT USERNAME
4 - E o input estar habilitado
5 - então devo conseguir escrever "standard_user"

SL2 - Validar funcionamento do Input Password
1 - DADO que acedo a pagina saucedemo.com
2 - QUANDO A PAGINA JA ESTIVER CARREGADA
3 - E EU VER O INPUT password
4 - E o input estar habilitado
5 - então devo conseguir escrever "secret_sauce"

SL3 - Validar funcionamento do btn Login
1 - DADO que acedo a pagina saucedemo.com
2 - QUANDO A PAGINA JA ESTIVER CARREGADA
3 - E EU VER O botao login
4 - Então o botao deve estar habilitado

SL4 - Validar Login Com sucesso
1 - DADO que acedo a pagina saucedemo.com
2 - QUANDO A PAGINA JA ESTIVER CARREGADA
3 - E PRENCHER USERNAME
4 - E PRENCHER A PASSWORD
5 - ENTÃO VALIDO LOGIN COM SUCESSO

SL5 - Validar lOGIN COM CREDENCIAIS ERRADAS
1 - DADO que acedo a pagina saucedemo.com
2 - QUANDO A PAGINA JA ESTIVER CARREGADA
3 - E PRENCHER USERNAME
4 - E PRENCHER A PASSWORD
5 - ENTÃO VALIDO LOGIN FALHOU

SL6 - VALIDAR lOGIN COM INPUTS VAZIAS
1 - Dado que acedo a página saucedemo.com
2 - QUANDO A PÁGINA JÁ ESTIVER CARREGADA
3 - E EU NÃO PREENCHER A INPUT USERNAME
4 - E EU NÃO PREENCHER A INPUT PASSWORD
5 - E O BOTÃO DE LOGIN ESTIVER HABILITADO
6 - E EU CLICAR NO BOTÃO DE LOGIN
7 - ENTÃO VALIDO QUE O LOGIN FALHOU

SL7 - VALIDAR lOGIN COM INPUT USERNAME VAZIA
1 - Dado que acedo a página saucedemo.com
2 - QUANDO A PÁGINA JÁ ESTIVER CARREGADA
3 - E EU NÃO PREENCHER A INPUT USERNAME
4 - E EU PREENCHER A INPUT PASSWORD
5 - E O BOTÃO DE LOGIN ESTAR HABILITADO
6 - E EU CLICAR NO BOTÃO DE LOGIN
7 - ENTÃO VALIDO LOGIN FALHOU

SL8 - VALIDAR lOGIN COM INPUT PASSWORD VAZIA
1 - Dado que acedo a página saucedemo.com
2 - QUANDO A PÁGINA JÁ ESTIVER CARREGADA
3 - E EU PREENCHER A INPUT USERNAME
4 - E EU NÃO PREENCHER A INPUT PASSWORD
5 - E O BOTÃO DE LOGIN ESTAR HABILITADO
6 - E EU CLICAR NO BOTÃO DE LOGIN
7 - ENTÃO VALIDO LOGIN FALHOU


BDD - Behavior Driven Development

DADO que
QUANDO
E
ENTÃO
