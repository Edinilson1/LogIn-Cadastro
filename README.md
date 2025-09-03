Aplicativo necessários:<br>
https://git-scm.com/downloads <br>
https://www.docker.com/             (Thiago não precisa instalar esse, ja que esse é algo que garante que o banco dele rode nos outros computadores)<br>

Caso for baixar este projeto, dê "npm install" nos terminais das respectivas pastas:<br>

PastaPrincipal - pasta que engloba client e server<br>
LogIn - pasta do FrontEnd<br>
Server - Pasta do BackEnd<br>

Adicione um arquivo ".env" na pasta server com a seguinte informação:<br>
DATABASE_URL="mysql://root:Rafaela07072010@localhost:3306/login"<br>
JWT_SECRET="7f5b67e801b90c9c8fef87e6376d71a43afeadaef54c262a2978447ad33bb896d9e8da820b3e8d6bdf3b6fb0f0b7cc2c25dda3048d075402fcdff27fa41f0127"<br>

Dê "npx prisma generate" no terminal da pasta server para gerar as dependências do prisma<br>

Dê "docker-compose up -d" no terminal da PastaPrincipal para iniciar o banco de dados através do container (Thiago não precisa disso, faça isso antes de iniciar as linhas de código listadas abaixo (o Docker Desktop precisa estar aberto))<br>

Use "npm run dev" no terminal da PastaPrincipal para abrir o localhost em ambos FrontEnd e BackEnd (link do localhost estará visivel no terminal)<br>
Use "npm run client" no terminal da PastaPricipal para abrir o localhost apenas no FrontEnd (valor do localhost estará visivel no terminal)<br>
Use "npm run server" no terminal da PastaPricipal para abrir o localhost apenas no BackEnd (valor do localhost estará visivel no terminal)<br>
