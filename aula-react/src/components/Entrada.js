import React from "react"

const Entrada = ({ children, textoLabel, type = "text" }) => {
    const [texto, botao] = React.Children.toArray(children)
    return (
        <>
            <label className="rotulo" htmlFor="nome">{textoLabel}</label>
            {texto}
            <input type={type} id="nome" />
            {botao}
        </>
    )
}

export default Entrada