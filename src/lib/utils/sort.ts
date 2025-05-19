export function sortByProperty<T>(
  array: T[],
  property: keyof T,
  ascending: boolean = true
): T[] {
  return [...array].sort((a, b) => {
    if (a[property] < b[property]) {
      return ascending ? -1 : 1;
    }
    if (a[property] > b[property]) {
      return ascending ? 1 : -1;
    }
    return 0;
  });
}

export function sortByPropertyByLength<T>(
  array: T[],
  property: keyof T,
  ascending: boolean = true
): T[] {
  return [...array].sort((a, b) => {
    const lengthA = (a[property] as unknown as string)?.length || 0;
    const lengthB = (b[property] as unknown as string)?.length || 0;
    return ascending ? lengthA - lengthB : lengthB - lengthA;
  });
}

export function groupAndSortByProperties<T>(
  array: T[],
  groupByProperty: keyof T,
  sortByPropertyKey?: keyof T,
  ascending: boolean = true,
  sortByLength: boolean = false,
  groupByLength: boolean = false
): T[] {
  // Group the array by the specified property or by the length of the property
  const grouped = array.reduce((acc, item) => {
    const key = groupByLength
      ? (item[groupByProperty] as unknown as string)?.length || 0
      : (item[groupByProperty] as string | number);

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string | number, T[]>);

  // Sort the group keys to ensure the groups are processed in the correct order
  const sortedKeys = Object.keys(grouped).sort((a, b) => {
    const numA = parseInt(a, 10);
    const numB = parseInt(b, 10);
    return groupByLength
      ? ascending
        ? numA - numB
        : numB - numA
      : a.localeCompare(b);
  });

  // Sort each group by the specified property or by the length of the property
  const sortedGroups = sortedKeys.map((key) => {
    if (sortByLength) {
      return [...grouped[key]].sort((a, b) => {
        const lengthA =
          (a[sortByPropertyKey!] as unknown as string)?.length || 0;
        const lengthB =
          (b[sortByPropertyKey!] as unknown as string)?.length || 0;
        return ascending ? lengthA - lengthB : lengthB - lengthA;
      });
    } else if (sortByPropertyKey) {
      return [...grouped[key]].sort((a, b) => {
        const valueA = a[sortByPropertyKey];
        const valueB = b[sortByPropertyKey];

        // Check if the property is a date in the format YYYY-MM-DD
        if (
          typeof valueA === "string" &&
          typeof valueB === "string" &&
          /^\d{4}-\d{2}-\d{2}$/.test(valueA) &&
          /^\d{4}-\d{2}-\d{2}$/.test(valueB)
        ) {
          const dateA = new Date(valueA);
          const dateB = new Date(valueB);
          return ascending
            ? dateA.getTime() - dateB.getTime()
            : dateB.getTime() - dateA.getTime();
        }

        // Default sorting for non-date properties
        if (valueA < valueB) {
          return ascending ? -1 : 1;
        }
        if (valueA > valueB) {
          return ascending ? 1 : -1;
        }
        return 0;
      });
    } else {
      return grouped[key]; // If no sortByPropertyKey is provided, return the group as is
    }
  });

  // Flatten the sorted groups back into a single array
  return sortedGroups.flat();
}

export function featuredArray(array: any[]) {
  return array.filter((item) => item?.featured === true);
}
