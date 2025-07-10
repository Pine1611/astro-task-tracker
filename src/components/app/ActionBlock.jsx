import { useContext } from "react";
import { Pause, Play, ShieldCheck, Trash } from "../Icons";
import ButtonAction from "./Buttons";
import { TaskTrackerContext } from "./utils/configs";

const StartTask = ({ handleStartTask }) => {
	return (
		<>
			<ButtonAction
				typeBtn={"play"}
				handleClick={handleStartTask}>
				<Play className="h-4 w-4 stroke-blue-500" />
			</ButtonAction>
		</>
	);
};

const PauseTask = ({ handlePauseTask }) => {
	return (
		<>
			<ButtonAction
				typeBtn={"pause"}
				handleClick={handlePauseTask}>
				<Pause className="h-4 w-4 stroke-blue-500" />
			</ButtonAction>
		</>
	);
};

const ActionBlock = ({ status, id }) => {
	const { listData, taskProgress, msgWarning } =
		useContext(TaskTrackerContext);

	const [listTask] = listData;
	const [inProgress, setInProgress] = taskProgress;
	const [, setWarning] = msgWarning;

	function handleStartTask() {
		if (inProgress >= 2) {
			setWarning("Too much tasks in-progress in this day, pls STOP!");
		} else {
			setInProgress(inProgress + 1);
			setWarning("");
			listTask.find((task) => task.id === id).status = "in-progress";
		}
	}

	function handlePauseTask() {
		setInProgress(inProgress - 1);
		listTask.find((task) => task.id === id).status = "todo";
	}

	return (
		<>
			{status === "done" ? (
				<div className="cursor-pointer items-center justify-center rounded-sm bg-slate-100/80 p-1 transition hover:bg-slate-50">
					<ShieldCheck className="h-4 w-4 stroke-green-500" />
				</div>
			) : (
				<>
					{status === "todo" && (
						<StartTask handleStartTask={handleStartTask} />
					)}

					{status === "in-progress" && (
						<PauseTask handlePauseTask={handlePauseTask} />
					)}

					<ButtonAction typeBtn={"delete"}>
						<Trash className="h-4 w-4 stroke-red-500" />
					</ButtonAction>
				</>
			)}
		</>
	);
};

export default ActionBlock;
