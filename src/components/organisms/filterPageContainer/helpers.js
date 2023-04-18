export const getPetTypes = ({items}) => {
  const list = [];
  items.forEach((item) => {
      if (list.includes(item.species)) {
        return list;
      } else return list.push(item.species);
    });
    return list;
};

const fuzzySearch = ({ items, input }) => {
  const inputLowerCase = input.toLowerCase();
  const inputArr = inputLowerCase.split(" ");
  return items.filter(item => {
      const name = item.name.toLowerCase();
      let includes = false;
      inputArr.forEach(element => {
          includes = name.includes(element)
      });
      return includes;
  })

};

export const getPetsToDisplay = ({items, action, value }) => {
  switch (action) {
    case "filter":
      return items.filter((pet) => pet.species === value);
    case "search":
      return fuzzySearch({ items, input: value});
    default:
      return items.slice(0,3);
  }
};
