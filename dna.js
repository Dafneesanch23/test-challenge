function stringDNA (input){
    if (input === '') {
        return '';
    }

   const validCharacters = ['C', 'T', 'A', 'G'];
   const arrayDNA = [];

   for (let i=0; i<stringDNA.length; i++){
    const Characters = input[i].toUpperCase();

    if (validCharacters.includes(Characters)) {
        arrayDNA.push(Characters);
    }
   }

   const processDNA = arrayDNA.join('');
   return processDNA; 
}


// const originalDNA = 'CTAGGgTA'
// const processDNA = stringDNA (originalDNA);
// console.log = processDNA;

module.exports = {stringDNA};