# Curso Básico de Programación Orientada a Objetos con JavaScript

Este es un resumen de los conceptos aprendidos en el curso:

## Clase 1: JavaScript: orientado a objetos, basado en prototipos

Introducción al curso.

## Clase 2: Qué es programación orientada a objetos

Los paradigmas son distintas maneras de programar, los más comunes son:

- Estructurado
- Orientado a objetos ✅
- Funcional

Un paradigma NO es mejor que otro, depende de la situación y el contexto.

Cada lenguaje puede trabajar con 1 o varios paradigmas.

Ventajas de POO ✅:

Orden

- Todo está conectado
- Reutilizar código -> Los moldes son las clases, que usaremos para instanciar objetos

Los objetos tienen métodos (funciones) y atributos (características).

## Clase 3: Ejemplo de POO

## Clase 4: Qué es un objeto en JavaScript

###Objeto literal

Los objetos literales se distinguen de los objetos de la POO porque no son instancias de un prototipo creado por el desarrollador.

Sin embargo los objetos literales son instancias del prototipo Object creado por defecto en JavaScript.

const Natalia = {
'Name' : 'Natalia',
'Age' : 20,
'Rank': 2000,
};

###Prototipo

Un prototipo es una estructura de código a partir de la cual se crean objetos, ya que guarda los atributos y métodos que luego podrán ser heredados por sus instancias.

Podemos pensarlo como un “molde” de objetos.

function Student() {
this.name = 'Nombre';
this.age = '18';
this.points = '750';
}

const Juanita = new Student();

###Objeto

Los objetos son instancias de su prototipo padre, los cuales están formados por propiedades (atributos) y métodos.

###Propiedades

Un objeto de JavaScript tiene propiedades asociadas a él. Una propiedad de un objeto se puede explicar como una variable adjunta al objeto. Las propiedades de un objeto básicamente son lo mismo que las variables comunes de JavaScript, excepto por el nexo con el objeto.

###Métodos

Un método es una función asociada a un objeto, o, simplemente, un método es una propiedad de un objeto que es una función.

###Atributo **proto**

Es el nombre que se le da al atributo donde se guardan los métodos que las estructuras de datos tienen por defecto en JavaScript.

El atributo **proto** se hereda a partir de los prototipo por defecto de JavaScript para cada estructura de datos en particular, por ejemplo de los prototipos Object y Array.

El atributo **proto** también se hereda a los objetos, ya que éstos son a la vez instancias de algún prototipo creado por el desarrollador y del prototipo Object.

## Clase 5: Objetos literales y prototipos en JavaScript

###Objeto literal

Se denomina objeto literal al objeto cuyas propiedades están declaradas textualmente en el código.

const Natalia = {
'Name' : 'Natalia',
'Age' : 20,
'Rank': 2000,
};

###Prototipo

Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí.

Podemos pensarlo como un “molde” de objetos.

function Student() {
this.name = 'Nombre';
this.age = '18';
this.points = '750';
}

## Clase 6: Clases en JavaScript

Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

Una manera de definir una clase es mediante una declaración de clase. Para declarar una clase, se utiliza la palabra reservada class y un nombre para la clase "Rectangulo".

class Rectangulo {
constructor(alto, ancho) {
this.alto = alto;
this.ancho = ancho;
}
}

## Clase 7: Ventajas de la programación orientada a objetos

## Clase 8: Qué es abstracción

En programación, una abstracción es una manera de reducir la complejidad y permitir un diseño e implementación más eficientes en sistemas de software complejos.

Por lo tanto podemos decir que la abstracción es la forma de abstraer los datos esenciales de un objeto, para crear su molde, su Clase, su Prototipo.

Ventajas de la Abstracción

- Ayuda al usuario a evitar escribir código de bajo nivel.
- Evita duplicar código y aumenta la reusabilidad.
- Se puede cambiar la implementación interna de la clase de forma independiente sin afectar al usuario.
- Ayuda a aumentar la seguridad de la aplicación o programa ya que solo los detalles importantes son proporcionados al usuario.

## Clase 9: Abstracción en JavaScript

## Clase 10: Encapsulamiento (o encapsulación)

La encapsulación es el empaquetamiento de datos y funciones en un componente (por ejemplo, una clase) y para luego controlar el acceso a ese componente para hacer un ejecto de "caja negra" fuera del objeto. Debido a esto, un usuario de esa clase solo necesita conocer su interfaz (es decir, los datos y las funciones expuestas fuera de la clase), no la implementación oculta.

## Clase 11: Getters y setters en JavaScript

Son métodos útiles para encapsular información dentro de un objeto que poroviene de un prototipo clase.

Una función que obtiene un valor de una propiedad se llama "getter" y una que establece el valor de una propiedad se llama "setter".

Esta característica a sido implementada en ES2015, pudiendo modificar el funcionamiento normal de establecer u obtener el valor de una propiedad. Conociendoselas como "accessor properties".

##Implementación

class Course {
constructor({
name,
classes = [],
}) {
this.\_name = name;
this.classes = classes;
}

get name() {
return this.\_name;
}

set name(nuevoNombrecito) {
if (nuevoNombrecito === "Curso Malito de Programación Básica") {
console.error("Web... no");
} else {
this.\_name = nuevoNombrecito;
}
}
}

## Clase 12: Módulos de ECMAScript 6

Un módulo es solo un archivo. Un script es un módulo. Tan sencillo como eso.

Se recomienda que un módulo contenga la extension ".mjs", aunque simplemente puede ser un archivo ".js" con una o varias sentencias "export" o "import".

Los módulos pueden cargarse entre sí y usar directivas especiales "export" e "import" para llamar a funciones objetos o tipos de dato primitivos de otro módulo.

###export

La declaración export se utiliza al crear módulos de JavaScript para exportar funciones, objetos o tipos de dato primitivos del módulo para que puedan ser utilizados por otros programas con la sentencia import.

###import

La sentencia import se usa para importar funciones que han sido exportadas desde un módulo externo.

## Clase 13: Qué es herencia

La herencia nos permite crear “clases madre”, la cual servirá de molde para sus "clases hijas", que heredarán sus métodos y atributos.

Para crear estos prototipos hijos a partir de los prototipos madre, utilizamos la palabra reservada "extends".

## Clase 14: Herencia en JavaScript II

La palabra clave "extends" es usada en la declaración o expresión de clases, para crear una clase hija de otra.

###Sintaxis

class ChildClass extends ParentClass { ... }

La palabra clave extends se puede usar para crear una subclase a partir de clases personalizadas, así como sus objetos incorporados.

La propiedad .prototype de la nueva subclase debe ser un Object o null.

###super

La palabra clave "super" es usada para acceder y llamar funciones del padre de un objeto.

Las expresiones super.prop y super[expr] son válidas en cualquier definición de método tanto para clases como para objetos literales.

####Sintaxis

Para llamar al método constructor del objeto padre.

super([arguments]);

Para llamar cualquier otro método del objeto padre.

super.functionOnParent([arguments]);

## Clase 15: Qué es polimorfismo

El polimorfismo es la habilidad que poseen los objetos para tener múltiples formas. Esto permite que las subclases tengan métodos con el mismo nombre que los de sus superclases pero con diferentes implementaciones.

Tipos de polimorfismo:

- Polimorfismo de Sobrecarga: ocurre cuando existen métodos con el mismo nombre y funcionalidad similar en clases totalmente independientes entre ellas.
- Polimorfismo Paramétrico: El polimorfismo paramétrico es la capacidad para definir varias funciones utilizando el mismo nombre, pero usando parámetros diferentes (nombre y/o tipo).
- Polimorfismo de Inclusión (JS): La habilidad para redefinir por completo el método de una superclase en una subclase.

El polimorfismo de inclusión es el único tipo de polimorfismo aplicado en JavaScript.

## Clase 16: Polimorfismo en JavaScript II

El polimorfismo es uno de los principios de la programación orientada a objetos (OOP). Es la práctica de diseñar objetos para compartir comportamientos y poder anular los comportamientos compartidos con otros específicos. El polimorfismo se aprovecha de la herencia para que esto suceda.

Es así que se pueden sobre escribir métodos heredados con nuevos métodos del mismo nombre en clases hijas para darles una nueva funcionalidad.

## Clase 17: Fin del curso
