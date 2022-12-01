const Card = (props) => {
    return (
        <div>
            <p>{props.text}</p>
            <h3>{props.author}</h3>
        </div>
    )
}

export default Card;