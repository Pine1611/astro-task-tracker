import { useContext } from "react";
import ItemTask from "./ItemTask";
import { TaskTrackerContext } from "./utils/configs";

const ListTask = () => {
	const { listData, taskProgress, msgWarning } =
		useContext(TaskTrackerContext);

	const [listTask] = listData;
	const [inProgress] = taskProgress;
	const [warning] = msgWarning;

	// sort data for the listing
	const sortBy = "status";
	const statusOrder = {
		"in-progress": 1,
		todo: 2,
		done: 3,
	};
	// create new list for sort => avoid affecting the list data
	let sortedList = [...listTask];
	// begin sort
	sortedList.sort((a, b) => {
		const statusA = statusOrder[a[sortBy]];
		const statusB = statusOrder[b[sortBy]];

		if (statusA < statusB) return -1;
		if (statusA > statusB) return 1;

		if (a.id < b.id) return -1;
		if (a.id > b.id) return 1;

		return 0;
	});

	return (
		<>
			<div>
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
			</div>

			<ul className="w-full">
				{sortedList.map((item, index) => (
					<ItemTask
						key={index}
						id={item.id}
						title={item.title}
						status={item.status}
					/>
				))}
			</ul>
		</>
	);
};

export default ListTask;
