import "../pages/landingPage.css";
import React, { useState } from 'react';
export function LandingPage() {
    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
  return (
    <div className="conteiner">
        <div className="top">
            <h2 className="title">En india queremos ayudarte a encontrar la piedra que te ayudara en este momento</h2>
            <div className="conteiner-img">
                <img src="../images/inicio.png" alt="" />
            </div>
            
        </div>
        <h3 className="mid">Por favor Ingresa los siguientes datos:</h3>
        <div className="down">
            <div className="conteiner-img"> 
                <img src="../images/inicio2.png" alt="" />
            </div>
            <div className="inputs">
                <h3 >Nombre:</h3>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <h3>Fecha de Nacimiento</h3>
                <input type="date" name="ee" id="" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                <button className="piedra">Ver mi piedra</button>
            </div>
            

        </div>

    </div>
  );
}
