console.log("connected");
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular

// Interpolated
console.log('Hello I am a %s string','+po');
// Styled
// console.log('%c I am good programmer', 'font-size:20px; background-color:yellow; text-shadow: 10px 10px 0 grey');
// warning!
console.warn('OH Nooo!');

// Error :|
console.error('Errorrrrrrrr!');

// Info
console.info('JavaScript is great');
// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
})
  
// counting
console.count("tuns");
console.count("tuns");
console.count("buks");
console.count("tuns");
console.count("tuns");
console.count("buks");
console.count("tuns");
console.count("buks");
console.count("tuns");
console.count("buks");
console.clear();
// timing
console.time('fetching data');
fetch('https://api.github.com/users/osbornetunde')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  })


 