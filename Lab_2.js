// Task 1: Code a Person class
class Person{
    name = "Tom"
    age = 20
    energy = 100
    constructor(name, age, energy) { }
    
    sleep = function(energy) {
        energy += 10
    }

    doSomethingFun = function (energy) {
        energy -= 10
    }
}

// Task 2: Code a Worker class
class Worker extends Person{
    xp = 0
    hourlyWage = 10
    goToWork = function (xp) {
        xp += 10
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker
    intern.name = "Bob"
    intern.age = 21
    intern.energy = 110
    intern.xp = 0
    intern.hourlyWage = 10
    return intern
}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker
    manager.name = "Alice"
    manager.age = 30
    manager.energy = 120
    manager.xp = 100
    manager.hourlyWage = 30
    manager.doSomethingFun()
    return manager
}