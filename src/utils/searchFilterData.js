export function searchFilterData(searchText, restaurants) {
  const searchFilterData = restaurants.filter((res) =>
    res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return searchFilterData;
}
