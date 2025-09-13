function Main({children,name,city,position}) {
    // const name = "Awishka Isuru";
    // const position = "developer";


    // const myObj ={
    //     name : `{name}`,
    //     position : `{position}`,
    //     city : `Kegalle`
    // }

    // console.log(props);
    // const {city} = myObj;
    return (
        <>
        <div>This is Main Component</div>
        <ul>
            <li>{name}</li>
            <li>{position}</li>
            <li>{city}</li>
            <li>Item 4</li>
        </ul>
        {children}
        <p>Awishka Isuru</p>
        <p>Awishka Isuru</p>
        <p>Awishka Isuru</p>
     
        </>
    );
}

export default Main;