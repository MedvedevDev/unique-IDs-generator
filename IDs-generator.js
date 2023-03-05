function* IdGenerator() {
  let id = 0; // Avariable that keeps track of IDs. This variable can’t be modified from outside our generator.
  
  // A loop that generates an infinite sequence of IDs
  while (true) {
    yield ++id;
  }
}

const idIterator = IdGenerator();

const book1 = { id: idIterator.next().value };
const book2 = { id: idIterator.next().value };
const book3 = { id: idIterator.next().value };

console.log(book3.id === 3); // true