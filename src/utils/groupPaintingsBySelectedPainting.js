const groupPaintingsBySelectedPainting = (targetInventoryNumber, items) => {
  const groups = {
    SELECTED_PAINTING: [],
    RELATED_IN_CONTENT_TO: [],
    SIMILAR_TO: [],
    BELONGS_TO: [],
    PART_OF_WORK: [],
  };

  const targetItem = items.find(
    (item) => item.inventoryNumber === targetInventoryNumber
  );
  groups.SELECTED_PAINTING.push(targetItem);

  targetItem.references.forEach((reference) => {
    const referencedItem = items.find(
      (item) => item.inventoryNumber === reference.inventoryNumber
    );
    groups[reference.kind].push(referencedItem);
  });

  return groups;
};

export default groupPaintingsBySelectedPainting;
