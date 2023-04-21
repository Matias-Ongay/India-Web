import "./cardBior.css"
import {biorritmo} from "../Signo"

export function CardBior() {
  const { piedra1,piedra2,piedra3, img11,img22,img33,txt1,txt2,txt3 }=biorritmo(); 
  return (
    
    <div className="conteinerCard">
      <div className="description">
       <img className="piedrita" src={img11} alt="" />
       <div className="mini-conteiner">
       <h2 className="sub">{piedra1}: {txt1}</h2>
       </div>
        
      </div>
      <div className="description">
        <div className="mini-conteiner">
          <h2 className="sub1">{piedra2}: {txt2}</h2>
        </div>
          
        <img className="piedrita" src={img22} alt="" />
      </div>
      <div className="description">
       <img className="piedrita" src={img33} alt="" />
        <h2 className="sub">{piedra3}: {txt3}</h2>
      </div>
      
        

      
      
      
    </div>


  );
}
