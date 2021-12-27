export const toSentenceCase = (word) => {
   return word[0].toUpperCase() + word.substr(1, word.length - 1);
}

export const delimitArray = (array, delimeter) => {
   return array.flatMap((each, i) => i ? [delimeter, each] : [each]);
}