export const getPetsToDisplay = ({items, action, type }) => {
  switch (action) {
    case "filter":
      return items.filter((pet) => pet.species === type);
    case "search":
      console.log('----search----');
      break;
    default:
      return items.slice(0,3);
  }
};
