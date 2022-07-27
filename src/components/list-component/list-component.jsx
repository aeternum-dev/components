import React from "react";

export const CardList = (props) => 
{ return
    <div className="CardList">
    this should recieve the whole json
    {props.data.map(elem => (<h3>{elem.name}</h3>))}
    {props.data.map(elem => (<p>email: {elem.email}</p>))}
        and pick here what to display
          
        {/*this.state.monsters.map(monsters => <CardList id = {monsters.id} name = {monsters.name}/>)*/}

    </div>
}
