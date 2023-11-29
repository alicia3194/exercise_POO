# Object-Oriented Programming Exercises

## Exercise POO1

### Description

This exercise involves creating three classes: `Person`, `Student`, and `Teacher`. Each class inherits from the previous one, creating a class hierarchy. Specific properties and methods are defined for each class.

### Classes

#### 1. Person

- **Properties:**
  - `name`: Person's name.
  - `age`: Person's age.
  - `gender`: Person's gender.

- **Methods:**
  - `getDetails()`: Displays the person's properties.

#### 2. Student (Inherits from Person)

- **Additional Properties:**
  - `course`: Course in which the student is enrolled.
  - `group`: Group to which the student belongs.

- **Additional Methods:**
  - `register()`: Displays details of the student, including course and group.

#### 3. Teacher (Inherits from Person)

- **Additional Properties:**
  - `subject`: Subject taught by the teacher.
  - `level`: Level or course taught by the teacher.

- **Additional Methods:**
  - `assign()`: Displays details of the teacher, including subject and level.

            _____________________________________________________________________________________________________________________________


## Exercise POO2

### Description

This exercise involves implementing the `Warrior`, `Maya`, and `Aztec` classes. The base class `Warrior` has methods for attacking and defending, and the child classes `Maya` and `Aztec` add specific methods.

### Classes

#### 1. Warrior

- **Properties:**
  - `life`: Warrior's life.
  - `power`: Warrior's attack power.

- **Methods:**
  - `attack()`: Returns the warrior's power value.
  - `defend(damage)`: Subtracts the received damage from the life value and displays the remaining life.

#### 2. Maya (Inherits from Warrior)

- **Additional Methods:**
  - `drinkColaCao()`: Increases the warrior's power by 10.

#### 3. Aztec (Inherits from Warrior)

- **Additional Methods:**
  - `drinkNesquik()`: Increases the warrior's life by 10.

### Battle Sequence

A simulated battle sequence has been created between an instance of the `Maya` class and an instance of the `Aztec` class to demonstrate the functionality of the classes.

```javascript
const aztec = new Aztec(100, 20);
const maya = new Maya(80, 15);

aztec.drinkNesquik();
maya.drinkColaCao();

aztec.defend(maya.attack());
maya.defend(aztec.attack());
