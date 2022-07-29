import React from "react";

export const CardList = (props) => 
{ return(
    <div className="CardList">
    this should recieve the whole json
    {props.data.map(elem => (<h3>{elem.name}</h3>))}
    {props.data.map(elem => (<p>email: {elem.email}</p>))}

    </div>);
}
