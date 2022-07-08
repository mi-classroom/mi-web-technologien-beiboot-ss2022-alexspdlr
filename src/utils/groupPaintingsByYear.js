/**
 * Groups the given paintings by year
 * @param {*} items
 * @returns Object with keys = years & values = Array of paintings
 */
const groupPaintingsByYear = (items) =>
  items.reduce((groups, item) => {
    const group = groups[item.sortingInfo.year] || [];
    group.push(item);
    groups[item.sortingInfo.year] = group;

    return groups;
  }, {});

export default groupPaintingsByYear;
