import { LandingPage } from "./pages/LandingPage";
export function Signo() {
    const fechaNacimiento = new Date(localStorage.getItem('fecha'));
    
    const dia = fechaNacimiento.getDate();
    const mes = fechaNacimiento.getMonth() + 1; // los meses empiezan desde 0
  
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20)) {
      return "Aries";
    } else if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)) {
      return "Tauro";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
      return "Géminis";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
      return "Cáncer";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
      return "Leo";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
      return "Virgo";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
      return "Libra";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
      return "Escorpio";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
      return "Sagitario";
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
      return "Capricornio";
    } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
      return "Acuario";
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
      return "Piscis";
    } else {
      return "";
    }
  }
  export function getPiedra(signo) {
    let piedra = '';
    let img1 = '';
    let img2 = '';
  
    switch (signo) {
      case 'Aries':
        piedra = 'Cornalina';
        img1 = '../images/aries.png';
        img2 = 'https://example.com/cornalina2.jpg';
        break;
      case 'Tauro':
        piedra = 'Cuarzo rosa';
        img1 = '../images/tauro.png';
        img2 = 'https://example.com/cuarzorosa2.jpg';
        break;
      case 'Géminis':
        piedra = 'Ágata';
        img1 = '../images/geminis.png';
        img2 = 'https://example.com/agata2.jpg';
        break;
      case 'Cáncer':
        piedra = 'Cuarzo lechoso';
        img1 = '../images/cancer.png';
        img2 = 'https://example.com/cuarzolechoso2.jpg';
        break;
      case 'Leo':
        piedra = 'Ojo de tigre';
        img1 = '../images/leo.png';
        img2 = 'https://example.com/ojotigre2.jpg';
        break;
      case 'Virgo':
        piedra = 'Jaspe';
        img1 = '../images/virgo.png';
        img2 = 'https://example.com/jaspe2.jpg';
        break;
      case 'Libra':
        piedra = 'Citrino';
        img1 = '../images/libra.png';
        img2 = 'https://example.com/citrino2.jpg';
        break;
      case 'Escorpio':
        piedra = 'Granate';
        img1 = '../images/escorpio.png';
        img2 = 'https://example.com/granate2.jpg';
        break;
      case 'Sagitario':
        piedra = 'Turmalina';
        img1 = '../images/sagitario.png';
        img2 = 'https://example.com/turmalina2.jpg';
        break;
      case 'Capricornio':
        piedra = 'Ónix';
        img1 = '../images/capricornio.png';
        img2 = 'https://example.com/onix2.jpg';
        break;
      case 'Acuario':
        piedra = 'Amatista';
        img1 = '../images/acuario.png';
        img2 = 'https://example.com/amatista2.jpg';
        break;
      case 'Piscis':
        piedra = 'Aguamarina';
        img1 = '../images/piscis.png';
        img2 = 'https://example.com/aguamarina2.jpg';
        break;
      default:
        piedra = 'No se encontró una piedra correspondiente';
        break;
    }
  
    return { piedra, img1, img2 };
  }