import { Link } from 'react-router-dom';
import { CardBior } from "../components/CardBior";
import { CardSigno } from '../components/CardSigno';
export function StonePage() {
  return (
    <div> 
        <CardSigno></CardSigno>
        <h3 className="mid">Segun tu Biorritmo,deberias pensar en tener cerca:</h3>
        <CardBior></CardBior>
    </div>
  );
}
