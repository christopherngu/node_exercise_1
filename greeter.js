function greet() {

    var greetings = ["hello", "ciao", "howdy", "greetings", "salut", "hola", "Hey"];

    var randomGreeting = greetings [Math.floor(Math.random() * 7)];

    return randomGreeting;
}

console.log(greet());
