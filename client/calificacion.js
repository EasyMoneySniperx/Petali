function calificacion (number) {
    if(number >= 0 && number<=2){
      return "No me gustó esta recomendacion"
    }else if(number === 3){
      return "Muy regular"
    }else if(number===4 || number===5){
      return "Excelente recomendacion"
    }else if (number > 5){
        return "Gracias por tu califación tan alta, pero la calificación es hasta 5 :D"
    }
  }

  module.exports = calificacion;