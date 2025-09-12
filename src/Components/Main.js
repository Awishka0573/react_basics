function Main(props) {
    const name = "Awishka Isuru";
    const position = "developer";


    const myObj ={
        name : `{name}`,
        position : `{position}`,
        city : `Kegalle`
    }

    const {city} = myObj;
    return (
        <>
        <div>This is Main Component</div>
        <ul>
            <li>{name}</li>
            <li>{position}</li>
            <li>{city}</li>
            <li>Item 4</li>
        </ul>
        {props.children}
        <p>Awishka Isuru</p>
        <p>Awishka Isuru</p>
        <p>Awishka Isuru</p>
     
        </>
    );
}

export default Main;