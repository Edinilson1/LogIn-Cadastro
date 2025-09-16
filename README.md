Aplicativo necessário:<br>
https://www.docker.com/ (Caso seja necessário a criação de uma imagem do banco de dados)<br>

Caso for baixar este projeto, dê "npm install" nos terminais das respectivas pastas:<br>

Pasta Raiz - pasta que engloba client e server<br>
LogIn - pasta do FrontEnd<br>
Server - Pasta do BackEnd<br>

Dê "npx prisma generate" no terminal da pasta server para gerar as dependências do prisma<br>

Dê "docker-compose up -d" no terminal da PastaPrincipal para iniciar uma imagem do banco de dados (Apenas caso seja necessário a criação de uma imagem)<br>

Use "npm run dev" no terminal da PastaPrincipal para abrir o localhost em ambos FrontEnd e BackEnd (link do localhost estará visivel no terminal)<br>
Use "npm run client" no terminal da PastaPricipal para abrir o localhost apenas no FrontEnd (valor do localhost estará visivel no terminal)<br>
Use "npm run server" no terminal da PastaPricipal para abrir o localhost apenas no BackEnd (valor do localhost estará visivel no terminal)<br>
