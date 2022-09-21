import imageFromPainting from './imageFromPainting';

/**
 * Pulls the first measured length from the input string and uses it to calculate the height (width is measured by aspect ratio when rendering)
 * @param {*} item
 * @returns Height (scaled)
 */
const calculatePaintingHeight = (item) => {
  const split = item.dimensions.replace(/[\])}[{(]/g, ' ').split(' ');
  const scalingFactor = 1 / 1.5;
  const splitWithoutCM = split.filter(
    (string) => string !== 'cm' && string !== ''
  );

  let size;
  let sideMeasured;

  for (const string of splitWithoutCM) {
    const stringSlicedAtDash = string.split('-')[0];

    if (!size) {
      if (/\d/.test(stringSlicedAtDash)) {
        size = parseFloat(stringSlicedAtDash.replace(/,/g, '.'));
      }
    } else {
      sideMeasured = stringSlicedAtDash;

      break;
    }
  }

  switch (sideMeasured) {
    case 'oben':
      size =
        (size / imageFromPainting(item).sizes.medium.dimensions.width) *
        imageFromPainting(item).sizes.medium.dimensions.height;

      break;
    case 'Durchmesser':
      const scaledDiameter = Math.sqrt(
        Math.pow(imageFromPainting(item).sizes.medium.dimensions.width, 2) +
          Math.pow(imageFromPainting(item).sizes.medium.dimensions.height, 2)
      );

      const scalingFactor = size / scaledDiameter;

      size =
        imageFromPainting(item).sizes.medium.dimensions.height * scalingFactor;

      break;
    default:
      break;
  }

  return (size / 100) * scalingFactor;
};

export default calculatePaintingHeight;
