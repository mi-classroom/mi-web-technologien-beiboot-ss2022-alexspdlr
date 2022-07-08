const indexToGroupTitle = (index) => {
  if (index === 0) {
    return 'Ausgewähltes Gemälde';
  }

  if (index === 1) {
    return 'Inhaltlich verwandt mit';
  }

  if (index === 2) {
    return 'Ähnlich wie';
  }

  if (index === 3) {
    return 'Gehört zu';
  }

  return 'Teil des Werks';
};

export default indexToGroupTitle;
