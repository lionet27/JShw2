// Задание 1: ""Управление библиотекой книг""  Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
class Book{
    constructor(title, author, pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
    }

    displayInfo() {
        console.log(`Название книги: ${this.title},автор:${this.author}, количество страниц: ${this.pages}`);
    }
}
const book1=new Book('Улисс', 'Джеймс Дж', 1056);
book1.displayInfo();
const book2=new Book('Трилогия желания', 'Драйзер Т', 1152);
book2.displayInfo();

// Задание 2: ""Управление списком студентов"".  Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
class Student{
    constructor(name, age, grade){
    this.name=name;
    this.age=age;
    this.grade=grade;
    }

    displayInfo() {
        console.log(
        `
        Name: ${this.name}
        Age:${this.age}
        Grage: ${this.grade}`);
    }
}
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();


//3 Создать класс "Телефонная книга" с методами для добавления, удаления и поиска контактов по имени или номеру телефона.


class Phonebook {
    constructor() {
      this.contacts = {};
    }
  
    addContact(name, phoneNumber) {
      this.contacts[name] = phoneNumber;
    }
  
         
    deleteContact(query) {
        for (const name in this.contacts) {
            if (name.includes(query) || this.contacts[name].includes(query)) {
              delete this.contacts[name];
            }
          }

      }
  
    findContact(query) {
      const results = [];
      for (const name in this.contacts) {
        if (name.includes(query) || this.contacts[name].includes(query)) {
          results.push({ name, phoneNumber: this.contacts[name] });
        }
      }
      return results;
    }
  }
  // Пример использования
let phonebook = new Phonebook();
phonebook.addContact("Иванов", "123-45-67");
phonebook.addContact("Петров", "987-65-43");
console.log(phonebook.contacts);
console.log(phonebook.findContact("Иванов")); // { name: "Иванов", phone: "123-45-67" }
console.log(phonebook.findContact("987-65-43")); // { name: "Петров", phone: "987-65-43" }
phonebook.deleteContact("Иванов");
console.log(phonebook.contacts); // [{ name: "Петров", phone: "987-65-43" }]
phonebook.deleteContact("987-65-43");
console.log(phonebook.contacts);





