import "/.styles.css"

const App = () => {
    const docNames = { doc1: "José da Silva", doc2: "Maria da Silva", doc3: "Jaqueline Mendes" };

    const containerStyles = () => {
        return {
            width: 1280,
            margin: 'auto',
            border '1px solid black',
            background- color: "#EEE",
                border - Radius: 8,
                    padding: 12,
                        text - align: 'center'
    };
}

return (
    <div style={containerStyles()}>
        <h2>Profissionais de saúde</h2>
        <div style={{
            margin: 8,
            border '1px solid #DDD',
            border- radius: 8,
        padding: 8,
        dsplay: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }}>

        <div className="profissional">
            <img src={doc1} />
            <p>{docNames.doc1}</p>
        </div>
        <div className="profissional">
            <img src={doc2} />
            <p>{docNames.doc2}</p>
        </div>
        <div className="profissional">
            <img src={doc3} />
            <p>{docNames.doc3}</p>
        </div>
    </div>

)

}


export default App