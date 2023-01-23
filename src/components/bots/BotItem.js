
import React from "react";

// function BotItem({image,name, health, damage, armor, bot_class, catchphrase, key, id}){
function BotItem({image,name, health, damage, armor, bot_class, catchphrase, id, handleClicked}){

    // const [botId, setBotId] = useState([])
    // console.log(botId)


    return(

        <div className="col-3 p-1" >
        <div className="card border-warning h-100" name={id} onClick={()=>handleClicked(id)} key={name+id}>
            <img className="card-img-top" src={image} alt="news item" />
            <div className="card-body" >
                <h3 className="card-title">{name}</h3>
                <h4 className="card-title">{bot_class}</h4>
                <p className="card-text">{catchphrase}</p>
                <hr/>
                <hr/>  
                <p><span>Health:{health}</span> <span>Damage:{damage}</span> <span>Armor:{armor}</span></p>
            </div>
        </div>
    </div>
    );
}

export default BotItem