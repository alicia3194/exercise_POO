// Ejercicio POO1
class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }

  obtDetalles() {
    return `${this.nombre} de ${this.edad} años y es ${this.genero}`;
  }
}

const persona = new Persona("Carlos", 22, "Hombre");
console.log(persona.obtDetalles());

class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }

  registrar() {
    return `${this.nombre} de ${this.edad} años, es ${this.genero} del curso ${this.curso} y grupo ${this.grupo}`;
  }
}

const estudiante = new Estudiante("Virginia", 21, "Mujer", "tercero", "A");
console.log(estudiante.registrar());

class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }

  asignar() {
    return `${this.nombre} de ${this.edad} años, es ${this.genero} de ${this.asignatura} y nivel ${this.nivel}`;
  }
}

const profesor = new Profesor(
  "Rogelia",
  45,
  "Mujer",
  "Anatomía",
  "primero de bachillerato"
);
console.log(profesor.asignar());

// Ejercicio POO2
class Warrior {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }

  attack() {
    return `${this.power}`;
  }

  defend(damage) {
    this.life -= damage;
    console.log(`Vida restante: ${this.life}`);
  }
}

class Maya extends Warrior {
  constructor(life, power) {
    super(life, power);
  }

  drinkColaCao() {
    this.power += 10;
  }

  defend(damage) {
    super.defend(damage);
  }
}

class Azteca extends Warrior {
  constructor(life, power) {
    super(life, power);
  }

  drinkNesquik() {
    this.life += 10;
  }

  defend(damage) {
    super.defend(damage);
  }
}

// Cadena de intercambio de golpes
const azteca = new Azteca(100, 20);
const maya = new Maya(80, 15);

console.log("Azteca bebe Nesquik");
azteca.drinkNesquik();
console.log("Maya bebe Cola Cao");
maya.drinkColaCao();

console.log("Maya ataca a Azteca");
azteca.defend(maya.attack());

console.log("Azteca ataca a Maya");
maya.defend(azteca.attack());
