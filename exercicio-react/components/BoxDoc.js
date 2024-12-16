import PropType from "prop-types"

function BoxDoc() {
    return (
        <div className="profisional">
            <img src={doc1} />
            <p>{nomeDoc}</p>
        </div>
    )
}

BoxDoc.propTypes = {
    srcDoc: PropType.string.isrequired
}


export default BoxDoc