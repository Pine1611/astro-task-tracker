import ItemTask from "./ItemTask";

const ListTask = () => {
	const tasks = [
		{
			id: 1,
			title: "Learn something everyday",
			status: "todo",
			createdAt: "12/4/2024, 8:48:29 AM",
			updatedAt: "12/4/2024, 8:48:29 AM",
		},
		{
			id: 2,
			title: "Divide it!",
			status: "in-progress",
			createdAt: "12/4/2024, 8:48:29 AM",
			updatedAt: "12/4/2024, 8:48:29 AM",
		},
		{
			id: 3,
			title: "Do it step by step!",
			status: "done",
			createdAt: "12/4/2024, 8:48:29 AM",
			updatedAt: "12/4/2024, 8:48:29 AM",
		},
	];

	return (
		<>
			<ul className="w-full">
				{tasks.map((item, index) => (
					<ItemTask
						key={index}
						id={item.id}
						title={item.title}
						status={item.status}
					/>
					// <li key={index}>{`#${item.id} - ${item.title}`}</li>
				))}
			</ul>
		</>
	);
};

export default ListTask;
