import { Link } from 'react-router-dom';
import { CardBior } from "../components/CardBior";
import { CardSigno } from '../components/CardSigno';
export function StonePage() {
  return (
    <div> 
        <CardSigno></CardSigno>
        <CardBior></CardBior>
    </div>
  );
}
