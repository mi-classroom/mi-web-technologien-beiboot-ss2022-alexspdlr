const groupTitleToIndex = (groupTitle) => {
  if (groupTitle === 'RELATED_IN_CONTENT_TO') {
    return 1;
  }

  if (groupTitle === 'SIMILAR_TO') {
    return 2;
  }

  if (groupTitle === 'BELONGS_TO') {
    return 3;
  }

  if (groupTitle === 'PART_OF_WORK') {
    return 4;
  }

  return 0;
};

export default groupTitleToIndex;
