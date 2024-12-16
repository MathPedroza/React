function enviar() {
    return alert("Enviou!")
}

const Botao = ({ texto, funcao = enviar }) => {
    return (
        <button className="estiloBotao" onClick={funcao} >{texto}</button>
    )
}

export default Botao