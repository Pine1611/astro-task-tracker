import ActionBlock from "./ActionBlock";

const LabelTask = ({ id, title, status }) => {
	const listStatus = ["todo", "in-progress", "done"];

	const classStatus = listStatus.find((item) => item === status);

	return (
		<>
			<span className="flex max-w-full flex-row items-center gap-2 text-sm text-slate-600 sm:max-w-8/10">
				{`#${id} - ${title}`}
				<span className={classStatus}>{status}</span>
			</span>
		</>
	);
};

const ItemTask = ({ id, title, status }) => {
	return (
		<li className="xs:flex-row flex flex-col items-center items-start justify-between gap-2 border-b border-slate-100 py-2 last:border-b-0">
			<LabelTask
				id={id}
				title={title}
				status={status}
			/>

			<div
				id="actions"
				className="flex flex-nowrap gap-2">
				<ActionBlock
					status={status}
					id={id}
				/>
			</div>
		</li>
	);
};

export default ItemTask;
