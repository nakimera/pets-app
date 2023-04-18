export const getPetTypes = ({ items }) => {
  const typesArr = [];
  items?.forEach((item) => {
    if (typesArr.includes(item.species)) {
      return typesArr;
    } else return typesArr.push(item.species);
  });
  return typesArr;
};

const fuzzySearch = ({ items, input }) => {
  const inputLowerCase = input.toLowerCase();
  const inputArr = inputLowerCase.split(" ");
  return items?.filter(item => {
    const name = item.name.toLowerCase();
    let includes = false;
    inputArr.forEach(element => {
      includes = name.includes(element)
    });
    return includes;
  })

};

export const getPetsToDisplay = ({ items, action, value }) => {
  switch (action) {
    case "filter":
      return items?.filter((pet) => pet.species === value);
    case "search":
      return fuzzySearch({ items, input: value });
    default:
      return items?.slice(0, 3);
  }
};
