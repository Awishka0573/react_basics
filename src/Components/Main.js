import { Fragment } from "react/jsx-runtime";

function Main({children,name,city,position,age}) {
    return (
        <Fragment>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmn20vQEVdg6aMDajDFGOakhxIqBNq9L6NMM4E2mTZzF9lrLlI3dxPcUptMuaXZoxkhM&usqp=CAU" alt="cardImg" />
        
        <div>
            <h3>{name}</h3>
            <p><span>{city}</span><span>{position}</span></p>
        </div>
        </Fragment>
    );
}

export default Main;