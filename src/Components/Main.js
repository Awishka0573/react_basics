function Main({children,name,city,position,age}) {
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
            <li>{age}</li>
        </ul>
        {children}
     
     
        </>
    );
}

export default Main;