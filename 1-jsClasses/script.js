class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(){
        console.log(`${this.nombre} ${this.apellido}`)
    }
    addMascotas(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        console.log(this.mascotas.length)
    }
    addBook(nombre, autor){
        this.libros.push({nombre, autor})
    }
    getBookNames(){
        let bookNames = [];
        for (let i=0; i<this.libros.length; i+=1) {
            bookNames.push(this.libros[i].nombre)
        }
        console.log(bookNames)
    }
}

const user1 = new Usuario("Pepe", "Argento", [], [])

user1.getFullName() // Pepe Argento
user1.addMascotas("Fatiga") // void
user1.countMascotas() // 1
user1.addBook("El libro de la buena memoria", "Anónimo") // void
user1.getBookNames() // [ 'El libro de la buena memoria' ]
