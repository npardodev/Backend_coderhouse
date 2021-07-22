 class User2 {

     constructor(nombre, apellido, libros = [], mascotas = []) {
         this.nombre = nombre;
         this.apellido = apellido;
         this.libros = libros;
         this.mascotas = mascotas;
     }

     getFullName() {
         return (`el nombre completo es ${this.nombre} ${this.apellido}`);
     }

     addMascota(mascota) {
         this.mascotas.push(mascota);
     }

     getMascotas() {
         return this.mascotas.length;
     }

     addBook(book, autor) {
         this.libros.push({ nombre: book, autor: autor });
     };

     getBooks() {
         let nombreLibros = [];
         this.libros.map((libro) => {
             return nombreLibros.push(libro.nombre);
         })
         return nombreLibros;
     }
 }

 let librosDeNicolas = [];
 let mascotasDeNicolas = [];
 let nicolas = new User2("Nicolas", "Pardo", librosDeNicolas, mascotasDeNicolas);


 console.log("----------------------");
 console.log("---- Con Clases ------");
 console.log("----------------------");

 console.log(nicolas.getFullName());
 nicolas.addMascota("Balu");
 nicolas.addMascota("Nala");
 nicolas.addBook("El principito", "Antoine de Saint-Exupéry");
 console.log(`la cantidad de mascotas es ${nicolas.getMascotas()}`);
 nicolas.addBook("El señor de los anillos", "J. R. R. Tolkien");
 console.log(`Los libros acumulados son ${nicolas.getBooks()}`);