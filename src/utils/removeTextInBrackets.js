/**
 *
 * @param {*} text
 * @returns text without brackets + text inside brackets
 */
const removeTextInBrackets = (text) => {
  const roundBracketsRemoved = text.split('(')[0];
  const squareBracketsRemoved = roundBracketsRemoved.split('[')[0];
  return squareBracketsRemoved;
};

export default removeTextInBrackets;
