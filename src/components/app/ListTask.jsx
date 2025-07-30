import { useContext, useState } from "react";
import ItemTask from "./ItemTask";
import { TaskTrackerContext } from "./utils/configs";
import { BarsArrowDown, BarsArrowUp } from "../Icons";
import sortData from "./utils/sortData";
// import Filter from "./Filter";
// import SelectBox from "../SelectBox";

const ListTask = () => {
	const { listData, taskProgress, msgWarning, statusFilter } =
		useContext(TaskTrackerContext);

	const [listTask] = listData;
	const [inProgress] = taskProgress;
	const [warning] = msgWarning;
	// const [checkedStatus, setCheckedStatus] = statusFilter;

	const [sortConfig, setSortConfig] = useState([]);

	function handleSort(columnName) {
		let pendingChange = [...sortConfig];
		let index = pendingChange.findIndex(
			(config) => config.columnName === columnName,
		);

		if (index > -1) {
			let currentSortOrder = pendingChange[index].sortOrder;
			pendingChange.splice(index, 1);
			if (currentSortOrder === "desc") {
				pendingChange = [
					...pendingChange,
					{ columnName: columnName, sortOrder: "asc" },
				];
			}
		} else {
			pendingChange = [
				...pendingChange,
				{ columnName: columnName, sortOrder: "desc" },
			];
		}

		setSortConfig([...pendingChange]);
	}

	function setupIconsSortBtn(columnName) {
		const config = sortConfig.find(
			(item) => item.columnName === columnName,
		);

		if (config) {
			if (config.sortOrder === "asc") {
				return <BarsArrowUp className="h-4 w-4 stroke-slate-500" />;
			} else {
				return <BarsArrowDown className="h-4 w-4 stroke-slate-500" />;
			}
		}

		return null;
	}

	// create new list for sort => avoid affecting the list data
	let sortedList = [...listTask];
	sortData(sortedList, sortConfig);

	return (
		<>
			<div className="relative w-full">
				{inProgress > 0 && (
					<p className="flex items-center justify-center gap-2 text-xs font-medium text-slate-600">
						Total in-progress:
						<span className="flex h-6 w-6 items-center justify-center rounded border border-yellow-100 bg-yellow-50 p-1 text-yellow-600">
							{inProgress}
						</span>
					</p>
				)}

				{inProgress >= 2 && (
					<p className="text-center text-xs text-red-500 italic">
						{warning}
					</p>
				)}

				{/* <Filter /> */}
			</div>

			<table className="w-full">
				<thead className="border-b-2 border-slate-200">
					<tr className="*:px-1 *:py-2 *:text-xs *:font-medium *:text-slate-400">
						<th className="flex w-12 items-center gap-1 text-left transition hover:text-slate-500">
							<div className="flex flex-row gap-1">
								<span
									className="cursor-pointer"
									onClick={() => handleSort("id")}>
									ID
								</span>
								<sup>{setupIconsSortBtn("id")}</sup>
							</div>
						</th>
						<th className="w-8/10 transition hover:text-slate-500">
							<div className="flex flex-row gap-1">
								<span
									className="cursor-pointer"
									onClick={() => handleSort("title")}>
									Tasks Title
								</span>
								<sup>{setupIconsSortBtn("title")}</sup>
							</div>
						</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{sortedList.map((item, index) => (
						<ItemTask
							key={index}
							id={item.id}
							title={item.title}
							status={item.status}
						/>
					))}
				</tbody>
			</table>
		</>
	);
};

export default ListTask;
