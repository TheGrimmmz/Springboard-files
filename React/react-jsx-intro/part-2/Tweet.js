const Tweet = (props) => {
//props of username, name, message
    return (
        <div>
            <h2>Tweet</h2>
            <ul>
                <li>Username: {props.username}</li>
                <li>Name: {props.name}</li>
                <li>Message: {props.message}</li>
            </ul>
        </div>
    )
}
