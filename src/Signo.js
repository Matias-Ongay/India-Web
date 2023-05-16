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
    let piedraa='';
    let img1 = '';
    let img2 = '';
    let img3 = '';
  
    switch (signo) {
      case 'Aries':
        piedra = 'Amatista';
        piedraa='Agua-marina';
        img1 = '../images/aries.png';
        img2 = '../images/amatista.jpg';
        img3 = '../images/aguamarina.jpg';
        break;
      case 'Tauro':
        piedra = 'Cuarzo rosa';
        piedraa='Agua-marina';
        img1 = '../images/tauro.png';
        img2 = '../images/cuarzo-rosa.jpg';
        img3 = '../images/aguamarina.jpg';
        break;
      case 'Géminis':
        piedra = 'Ágata';
        piedraa='Turmalina';
        img1 = '../images/geminis.png';
        img2 = '../images/agata.jpg.jpg';
        img3 = '../images/turmalina.jpg';
        break;
      case 'Cáncer':
        piedra = 'Ambar';
        piedraa='Piedra de luna';
        img1 = '../images/cancer.png';
        img2 = '../images/Ambar.jpg';
        img3 = '../images/piedra-luna.jpg';
        break;
      case 'Leo':
        piedra = 'Ojo de tigre';
        piedraa = 'Cuarzo'
        img1 = '../images/leo.png';
        img2 = '../images/ojo-de-tigre.jpg';
        img3 = '../images/cuarzo.jpg';
        break;
      case 'Virgo':
        piedra = 'Rodonita';
        piedraa = 'Obsidiana';
        img1 = '../images/virgo.png';
        img2 = '../images/rodonita.jpg';
        img3 = '../images/obsidiana.jpg';
        break;
      case 'Libra':
        piedra = 'Jade';
        piedraa = 'Piedra de Luna';
        img1 = '../images/libra.png';
        img2 = '../images/jade.jpg';
        img3 = '../images/piedra-luna.jpg';
        break;
      case 'Escorpio':
        piedra = 'Obsidiana';
        piedraa = 'Piedra de luna';
        img1 = '../images/escorpio.png';
        img2 = '../images/obsidiana.jpg';
        img3 = '../images/piedra-luna.jpg';
        break;
      case 'Sagitario':
        piedra = 'Amatista';
        piedraa = 'Obsidiana';
        img1 = '../images/sagitario.png';
        img2 = '../images/amatista.jpg';
        img3 = '../images/obsidiana.jpg';
        break;
      case 'Capricornio':
        piedra = 'Cuarzo';
        piedraa = 'Fluorita';
        img1 = '../images/capricornio.png';
        img2 = '../images/cuarzo.jpg';
        img3 = '../images/fluorita.jpg';
        break;
      case 'Acuario':
        piedra = 'Fluorita';
        piedraa = 'Ambar';
        img1 = '../images/acuario.png';
        img2 = '../images/fluorita.jpg';
        img3 = '../images/ambar.jpg';
        break;
      case 'Piscis':
        piedra = 'Aguamarina';
        piedraa = 'Agata Azul';
        img1 = '../images/piscis.png';
        img2 = '../images/aguamarina.jpg';
        img3 = '../images/agata-azul.jpg';
        break;
      default:
        piedra = 'No se encontró una piedra correspondiente';
        break;
    }
  
    return { piedra,piedraa, img1, img2,img3 };
  }

  export function biorritmo() {
    const fechaNacimiento = new Date(localStorage.getItem('fecha'));
    const mesNacimiento = fechaNacimiento.getMonth() + 1;
    const mesActual = new Date().getMonth() + 1;
    const resultado = mesNacimiento + mesActual;
    let piedra1, piedra2, piedra3, img11, img22, img33,txt1,txt2,txt3;
    switch (resultado) {
      case 2:
        piedra1 = "Agata Azul";
        piedra2 = "Ametrino";
        piedra3 = "Ambar";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 3:
        piedra1 = "Aventurina Verde";
        piedra2 = "Serpentina Bruto";
        piedra3 = "Citrino Bruto";
        img11 = "../images/aventurina.jpg";
        img22 =  "../images/serpentina.jpg";
        img33 =  "../images/citrino.jpg";
        txt1="Piedra semipreciosa que otorga calma emocional,equlibrio y armonía ";
        txt2="Mineral que otorga purificación , protección,vitalidad y energía";
        txt3="Variedad del cuarzo que otorga claridad mental,abundancia y prosperidad";
        break;
      case 4:
        piedra1 = "Cuarzo Rosa";
        piedra2 = "Selenita";
        piedra3 = "Jaspe Rojo";
        img11 = "../images/cuarzo-rosa.jpg";
        img22 =  "../images/selenita.jpg";
        img33 =  "../images/jaspe-rojo.jpg";
        txt1="Piedra semipreciosa que otorga amor,relaciones,autoestima y amor propio";
        txt2="Piedra cristalina que otorga claridad mental,concentracion,tranquilidad y paz interior";
        txt3="Jaspe que se utiliza por su energía,vitalidad y vitalidad fisica ";
        break;
      case 5:
        piedra1 = "Pirita";
        piedra2 = "Cuarzo ahumado";
        piedra3 = "Ambar";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 6:
        piedra1 = "Ojo de Buey";
        piedra2 = "Cuarzo Verde";
        piedra3 = "Granate";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 7:
        piedra1 = "Coral";
        piedra2 = "Rodocrosita";
        piedra3 = "Cianita Azul";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 8:
        piedra1 = "Ojo de tigre";
        piedra2 = "Ametrino";
        piedra3 = "Pirita";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 9:
        piedra1 = "Cuarzo Rosa";
        piedra2 = "Cuarzo Verde";
        piedra3 = "Selenita";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 10:
        piedra1 = "Agata Azul";
        piedra2 = "Serpentina Bruto";
        piedra3 = "Jaspe Rojo";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 11:
        piedra1 = "Cuarzo ahumado";
        piedra2 = "Ametrino";
        piedra3 = "Cianita Azul";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 12:
        piedra1 = "Agata Azul";
        piedra2 = "Citrino Bruto";
        piedra3 = "Ambar";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 13:
        piedra1 = "Cuarzo Rosa";
        piedra2 = "Ambar";
        piedra3 = "Jaspe Rojo";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 14:
        piedra1 = "Pirita";
        piedra2 = "Cuarzo ahumado";
        piedra3 = "Selenita";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 15:
        piedra1 = "Aventurina Verde";
        piedra2 = "Serpentina Bruto";
        piedra3 = "Agata Azul";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 16:
        piedra1 = "Pirita";
        piedra2 = "Cuarzo ahumado";
        piedra3 = "Ambar";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 17:
        piedra1 = "Ojo de tigre";
        piedra2 = "Ametrino";
        piedra3 = "Aventurina Verde";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 18:
        piedra1 = "Coral";
        piedra2 = "Rodocrosita";
        piedra3 = "Cianita Azul";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 19:
        piedra2 = "Cuarzo Verde";
        piedra3 = "Selenita";
        piedra3 = "Pirita";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 20:
        piedra1 = "Ojo de tigre";
        piedra2 = "Ametrino";
        piedra3 = "Ambar";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 21:
        piedra1 = "Serpentina Bruto";
        piedra2 = "Selenita";
        piedra3 = "Jaspe Rojo";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 22:
        piedra1 = "Agata Azul";
        piedra2 = "Cuarzo ahumado";
        piedra3 = "Ambar";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 23:
        piedra1 = "Ojo de Buey";
        piedra2 = "Cuarzo Verde";
        piedra3 = "Granate";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      case 24:
        piedra1 = "Jaspe Rojo";
        piedra2 = "Rodocrosita";
        piedra3 = "Cianita Azul";
        img11 = "../images/agata-azul.jpg";
        img22 =  "../images/ametrino.jpg";
        img33 =  "../images/ambar.jpg";
        txt1="Gema tranquilizante y armonizante,incrementa la energia";
        txt2="Gema que otorga equilibrio y positividad";
        txt3="Gema organica,util para alergias,atraer logros materiales y armonia al alma";
        break;
      default:
        piedra1 = "";
        piedra2 = "";
        piedra3 = "";
        img11 = "";
        img22 = "";
        img33 = "";
    }
  
    return { piedra1, piedra2, piedra3, img11, img22, img33,txt1,txt2,txt3 };
  }