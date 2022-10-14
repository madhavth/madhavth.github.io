// exercise 1
String.prototype.filter = function (...banned) {
    let arr = this.split(' ');
    let filtered = [];

    for (let word of arr) {
        if (!banned.includes(word)) {
            filtered.push(word);
        }
    }

    return filtered.join(' ').trim();
};

// exercise 2
Array.prototype.bubbleSort = function () {
    const arrElements = this;
    let i, j;
    for (i = 0; i < arrElements.length - 1; i++) {
        for (j = 0; j < arrElements.length - i - 1; j++) {
            if (arrElements[j] > arrElements[j + 1]) {
                let temp = arrElements[j];
                arrElements[j] = arrElements[j + 1];
                arrElements[j + 1] = temp;
            }
        }
    }

    return arrElements;
};

// exercise 3
const Person = function() {}

Person.prototype.initialize = function(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function() {
    return this.name + ', ' + this.age + " years old.";
}

const Student = function() {}
Student.prototype = new Person();

Student.prototype.learn = function(subject) {
    console.log(this.name + " just learned " + subject);
}

const me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

// teacher
const Teacher = function() {}

Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject) {
    return `${this.name} is now teaching ${subject}`;
}

