function Main(props) {
    const name = "Awishka Isuru";
    const position = "developer";
    return (
        <>
        <div>This is Main Component</div>
        <ul>
            <li>{name}</li>
            <li>{position}</li>
            <li>Item 3</li>
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