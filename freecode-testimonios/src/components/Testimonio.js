import React from "react";
import '../css/testimonio.css';


function Testimonio(props) {
  return (  
     <div className="container-testimonio">
       <img src={require(`../images/testimonio-${props.image}.png`)} alt = {props.alt} className="image-testimonio" />
      <div className="container-text-testimonio">
          <p className="name-testimonio"><strong>{props.name}</strong> en {props.country}</p>
          <p className="work-testimonio">{props.work} en  <strong>{props.company}</strong></p>
          <p className="text-testimonio">{props.testimonio}</p>
      </div>
     </div>
  );
}

export default Testimonio;