class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros || [];
        this.mascotas = mascotas || [];
    }
    getFullName(){
        return`${this.nombre} ${this.apellido}`
    }
    addMascotas(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombre, autor){
        this.libros.push({nombre, autor})
    }
    getBookNames(){
        return this.libros.map(libro => libro.nombre)
    }
}

const user1 = new Usuario("Pepe", "Argento", [], [])

user1.getFullName() // Pepe Argento
user1.addMascotas("Fatiga") // void
user1.countMascotas() // 1
user1.addBook("El libro de la buena memoria", "Anónimo") // void
user1.getBookNames() // [ 'El libro de la buena memoria' ]
console.log(user1.libros)