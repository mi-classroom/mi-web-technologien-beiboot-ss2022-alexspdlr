const groupPaintingsBySelectedPainting = (targetInventoryNumber, items) => {
  const groups = {
    RELATED_IN_CONTENT_TO: [],
    SIMILAR_TO: [],
    BELONGS_TO: [],
    PART_OF_WORK: [],
  };

  // get item
  const targetItem = items.find(
    (item) => item.inventoryNumber === targetInventoryNumber
  );

  // for each entry in references
  targetItem.references.forEach((reference) => {
    const referencedItem = items.find(
      (item) => item.inventoryNumber === reference.inventoryNumber
    );
    groups[reference.kind].push(referencedItem);
  });

  return groups;
};

export default groupPaintingsBySelectedPainting;
