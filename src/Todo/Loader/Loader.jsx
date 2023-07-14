import React from "react";
import './Loader.css'

function Loader() {
   return (
      <div className="lds-dual-ring-container">
         <div className="lds-dual-ring"></div>
      </div>
   )
}

export default Loader