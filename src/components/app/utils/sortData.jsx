import { useMemo } from "react";

/**
 * Sort base on filter.
 * @param {Array} listdata value need to format
 * @param {Array} sortConfig sort configs
 * @returns Return result for sorted data
 */
export default function sortData(listData, sortConfig) {
	// *** IDEA for sort by status if active in filter ***
	// const sortBy = "status";
	// const statusOrder = {
	// 	"in-progress": 2,
	// 	todo: 1,
	// 	done: 3,
	// };
	// const statusA = statusOrder[a[sortBy]];
	// const statusB = statusOrder[b[sortBy]];
	// if (statusA < statusB) return -1;
	// if (statusA > statusB) return 1;

	// sort data
	const sortedData = useMemo(() => {
		// check if sort config exist
		if (sortConfig.length > 0) {
			// loop all configs
			for (let i = 0; i < sortConfig.length; i++) {
				// get data config
				const { columnName, sortOrder } = sortConfig[i];

				// begin sort
				listData.sort((a, b) => {
					// get comparison for multipe columns
					let comparison =
						a[columnName] - b[columnName] ||
						a[columnName].localeCompare(b[columnName]);

					// check for sort order
					if (comparison > 0) {
						return sortOrder === "asc" ? -1 : 1;
					} else if (comparison < 0) {
						return sortOrder === "asc" ? 1 : -1;
					}
					return 0;
				});
			}
		}
	}, [listData, sortConfig]);

	return sortedData;
}
