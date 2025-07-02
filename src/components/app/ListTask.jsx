import ItemTask from "./ItemTask";

const ListTask = ({ tasks }) => {
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
				))}
			</ul>
		</>
	);
};

export default ListTask;
