import {Signo,getPiedra} from "../Signo"
export function CardSigno(fecha) {
  const signo = Signo(fecha);
  const nombre = localStorage.getItem('nombre');
  const { piedra, img1,img2 } = getPiedra(signo);
  return (
    
    <div className="conteiner">


      <h2>{signo}</h2>
      <h3>{nombre}</h3>
      <p>{piedra}</p>
      <img src={img1} alt="" />
      
    </div>


  );
}
