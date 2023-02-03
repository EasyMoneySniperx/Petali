const calificacion = require('./calificacion');

describe('Probando funcion calificacion', ()=> {

  test('Debe mostrar la calificación obtenida con el argumento 1',() => {
      let resultado = calificacion(1)
      expect(resultado).toBe("No me gustó esta recomendacion")
      
  })

  test('Debe mostrar la calificación obtenida con el argumento 3',() => {
    let resultado = calificacion(3)
    expect(resultado).toBe("Muy regular")
  })

  test('Debe mostrar la calificación obtenida con el argumento 5', () => {
    let resultado = calificacion(5)
    expect(resultado).toBe("Excelente recomendacion")
  })

  test('Debe mostrar la calificación obtenida con el argumento 80', () => {
    let resultado = calificacion(80)
    expect(resultado).toBe("Gracias por tu califación tan alta, pero la calificación es hasta 5 :D")
  })
  
})