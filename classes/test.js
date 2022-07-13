
const Usuario = require('./script.js');

const user1 = new Usuario("Pepe", "Argento", [], [])

function test() {
    console.log(user1.getFullName())// Pepe Argento
    user1.addMascotas("Fatiga") // void
    console.log(user1.countMascotas()) // 1
    user1.addBook("El libro de la buena memoria", "Anónimo") // void
    console.log(user1.getBookNames()) // [ 'El libro de la buena memoria' ]
}
test()