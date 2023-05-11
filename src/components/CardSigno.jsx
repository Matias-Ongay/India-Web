import "./cardSigno.css"
import {Signo,getPiedra} from "../Signo"
export function CardSigno(fecha) {
  const signo = Signo(fecha);
  const nombre = localStorage.getItem('nombre');
  const { piedra, img1,img2 } = getPiedra(signo);
  return (
    
    <div className="conteinerCard">
      <div className="description">
        <h2>{nombre} tu signo es {signo},por lo tanto tu piedra es : {piedra}</h2>
        <img className="signo" src={img1} alt="" />

      </div>
      <div className="conteiner-img2">
        <img className="big" src={img2} alt="" />
      </div>

      <div className="description">
        <h2>Tambien es compatible con tu signo la :</h2>
        

      </div>
      <div className="conteiner-img2">
        <img className="big" src={img2} alt="" />
      </div>



      
    </div>
    
    


  );
}
 