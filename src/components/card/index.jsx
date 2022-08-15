const card = (props) => {
    console.log(props)
    const { text } = props;

    return(
        <div>{props.text}</div>
    )
}

export default card;