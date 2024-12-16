import Frase from "./components/Frase.js"
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Botao from "./components/Botao.js";
import Entrada from "./components/Entrada.js";

function App() {
    const textoLabel = "Nome:";
    let texto = "Texto dinâmico!"

    var nota = 3

    function voltar() {
        return alert("Voltou!")
    }

    return (
        <div className="divApp">
            <Frase frase="Olá tudo bem!" titulo="Titulo qualquer." nota={7} />
            <Entrada textoLabel={textoLabel}>
                <p>Olá digite o nome no campo abaixo!</p>
            </Entrada>
            <Entrada textoLabel="Senha: " type="password">
                <p>Olá digite a senha no campo abaixo!</p>
                <Botao texto="Enviar" />
            </Entrada>
            <Frase frase={texto} nota={9} />
            <Frase nota={10} />
            <Frase nota={nota} />
            <Botao texto="Voltar" funcao={voltar} />
        </div>
    )
}

export default App