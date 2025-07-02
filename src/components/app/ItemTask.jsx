import { Pause, Play, Trash } from "../Icons";
import ButtonAction from "./Buttons";

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
	function handlePlayTask() {
		console.log("Play task");
	}

	function handlePauseTask() {
		console.log("Pause task");
	}

	function handleDeleteTask() {
		console.log("Delete task");
	}

	return (
		<li className="flex flex-row items-center justify-between gap-4 border-b border-slate-100 py-2 last:border-b-0">
			<LabelTask
				id={id}
				title={title}
				status={status}
			/>

			<div
				id="actions"
				className="flex flex-nowrap gap-2">
				<ButtonAction
					handleClick={handlePlayTask}
					typeBtn="play">
					<Play className="h-4 w-4 stroke-blue-500" />
				</ButtonAction>

				<ButtonAction handleClick={handlePauseTask}>
					<Pause className="h-4 w-4 stroke-yellow-500" />
				</ButtonAction>

				<ButtonAction handleClick={handleDeleteTask}>
					<Trash className="h-4 w-4 stroke-red-500" />
				</ButtonAction>
			</div>
		</li>
	);
};

export default ItemTask;
