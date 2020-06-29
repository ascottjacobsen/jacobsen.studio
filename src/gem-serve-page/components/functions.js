export const selectifyArray = function(array) {
  if (array.length > 0) {
    let startingHash = `#`;
    let string = array.reduce(
      (accumulator, currentValue) => `${accumulator}, #${currentValue}`
    );

    return startingHash + string;
  } else {
    return "";
  }
};

export const handleMapOrSphereClick = (type, element, func) => {
  func(type, element);
};
