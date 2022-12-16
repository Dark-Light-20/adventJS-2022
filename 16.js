function fixLetter(letter) {
  return letter
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s([,.?!])/g, '$1')
    .replace(/([?])+/g, "$1")
    .replace(/,(\w)/g, (_, g1) => `, ${g1}`)
    .replace(/([.?!])\s(\w)/g, (_, g1, g2) => `${g1} ${g2.toUpperCase()}`)
    .replace(/santa claus/gi, "Santa Claus")
    .replace(/^\w/g, (start) => start.toUpperCase())
    .replace(/(\w)$/g, (_, g1) => `${g1}.`);
}

const letter = fixLetter(
  ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
);
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.
console.log(letter);

const letter2 = fixLetter(
  "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
);
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
console.log(letter2);
