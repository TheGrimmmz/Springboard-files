const Person = (props) => {
    let reply;
    let name;
    if (props.age < 18){
        reply = "You must be 18 to Vote!"
    } else {
        reply = "Please Go Vote"
    }
    if (props.name.length > 8){
        name = props.name.substring(0, 6)
    } else {
        name = props.name
    }
    return (
        <div>
            <p>Learn some information about the person</p>
            <p>Name: {name}</p>
            <p>Age:{props.age}</p>
            <h3>{reply}</h3>
            <ul>{props.hobbies.map(h => (
                <li>
                    {h}
                </li>
            ))}
            </ul>
        </div>
    )
}
