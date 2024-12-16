import React from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import env from 'react-dotenv'

export default class Busca extends React.Component {
    state = {
        termoDeBusca: ""
    }

    onTermoAlterado = (event) => {
        this.setState({termoDeBusca: event.target.value})
    }

onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onBuscaRealizda(this.state.termoDeBusca)
}
    render() {
        console.log(env.PEXELS_KEY)
        console.log(window.env.PEXELS_KEY)
        return (
            <form onSubmit={this.onFormSubmit}>
            <div className="flex flex-column">             
                {/* ícone à esquerda, largura máxima 
                  empilhando os filhos*/}

                <IconField iconPosition="left" className='w-full'>
                    <InputIcon className="pi pi-search"> </InputIcon>
                    <InputText 
                    value={this.state.termoDeBusca}
                    className="w-full"
                    placeholder={this.props.dica}
                    onChange={this.onTermoAlterado}
                     />
                </IconField>
                <Button
                    label="OK"
                    className="p-button-outlined mt-2"
                />
            </div>
            </form>
        )
    }
}
Busca.defaultProps = {
    dica: 'Digite algo que deseja ver...'
}