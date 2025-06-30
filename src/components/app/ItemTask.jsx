const LabelTask = ({ id, title, status }) => {
	const listStatus = ["todo", "in-progress", "done"];

	const classStatus = listStatus.find((item) => item === status);
	console.log(classStatus);

	return (
		<>
			<span className="flex max-w-full cursor-pointer flex-row items-center gap-2 text-sm text-slate-600 sm:max-w-8/10">
				{`#${id} - ${title}`}
				<span className={classStatus}>{status}</span>
			</span>
		</>
	);
};

const ItemTask = ({ id, title, status }) => {
	return (
		<li className="space-between flex flex-row items-center gap-4 border-b border-slate-100 py-2 last:border-b-0">
			<LabelTask
				id={id}
				title={title}
				status={status}
			/>
		</li>
	);
};

export default ItemTask;
