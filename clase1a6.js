// -------------Objeto literal (Natalia)-------------

const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],

  // Crear el metodo para hacer que Natalia apruebe otro curso

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};

// -------------Prototipo (Student)-------------

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}

// Crear el metodo para hacer que un Student apruebe otro curso

Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

// Crear nuevo estudiante a partir del prototipo (Juana)

const juana = new Student("Juana", 15, [
  "Curso de Introducción a los videojuegos",
  "Curso de Creación de Personajes",
]);

// -------------Prototipos con la sintaxis de clases (Student)-------------

class Student2 {
  constructor(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

// Crear nuevo estudiante a partir del prototipo con sintaxis de clase (Miguel)

const miguel = new Student2("Miguel", 28, [
  "Curso de Análisis de Negocios para Ciencia de Datos",
  "Curso de Principios de Visualización de Datos para BI",
]);

// -------------Prototipos con la sintaxis de clases, el constructor con objeto literal y valores por defecto (Student)-------------

class Student3 {
  constructor({ name, age = undefined, email, cursosAprobados = [] }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.cursosAprobados = cursosAprobados;
  }
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

// Crear nuevo estudiante a partir del prototipo con sintaxis de clase y el constructor con objeto literal (Carlos)

const carlos = new Student3({
  email: "carlos@gmail.com",
  name: "Carlos",
});
