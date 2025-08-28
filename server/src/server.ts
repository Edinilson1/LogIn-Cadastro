import app from "./app";

const PORT: number = 3000;

app.listen(PORT, () => {
    console.log(`Rodando o BackEnd na porta http://localhost:${PORT}`)
});