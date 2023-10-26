import { useState } from "react";

export function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const SORTBYASC = "ASC";
  const SORTBYDESC = "DSC";
  const handleClick = (label) => {
    if (label !== sortBy) {
      setSortOrder(SORTBYASC);
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder(SORTBYASC);
      setSortBy(label);
    } else if (sortOrder === SORTBYASC) {
      setSortOrder(SORTBYDESC);
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  // sorting logic
  let sortedData = data;

  if (sortBy && sortOrder) {
    // find the value from config obj
    const { sortValue } = config.find((x) => x.label === sortBy);

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === SORTBYASC ? 1 : -1;
      if (typeof valueA === "string")
        return valueA.localeCompare(valueB) * reverseOrder;
      return (valueA - valueB) * reverseOrder;
    });
  }
  return {
   setSortColumn: handleClick,
    sortedData,
    sortBy,
    sortOrder,
    SORTBYASC,
    SORTBYDESC
  };
}
