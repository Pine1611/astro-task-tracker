import { useContext, useState } from "react";
import {
	Check,
	ExclamationTriangle,
	Pause,
	Play,
	ShieldCheck,
	Trash,
} from "../Icons";
import { ERROR_MESSAGES, TaskTrackerContext } from "./utils/configs";
import ButtonAction from "../Buttons";
import ModalConfirm from "../Modal";

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

const CompleteTask = ({ handleComplete }) => {
	return (
		<>
			<ButtonAction
				typeBtn={"done"}
				handleClick={handleComplete}>
				<Check className="h-4 w-4 stroke-green-500" />
			</ButtonAction>
		</>
	);
};

const DeleteTask = ({
	handleDeleteTask,
	handleConfirmDeleteTask,
	isOpen,
	handleCloseModal,
}) => {
	return (
		<>
			<ButtonAction
				typeBtn={"delete"}
				handleClick={handleConfirmDeleteTask}>
				<Trash className="h-4 w-4 stroke-red-500" />
			</ButtonAction>

			<ModalConfirm
				isOpen={isOpen}
				handleClose={handleCloseModal}>
				<div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<div className="xs:items-start xs:flex-row flex flex-col items-center gap-4">
						<div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 p-2">
							<ExclamationTriangle className="h-8 w-8 stroke-red-500" />
						</div>
						<div className="xs:text-left flex flex-col gap-3 text-center">
							<h4 className="text-xl font-semibold text-slate-900">
								Clear Task
							</h4>
							<p className="text-sm text-slate-600">
								Are you sure you want to delete this task? Your
								task will be permanently removed. This action
								cannot be undone.
							</p>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center gap-2 border-t-1 border-slate-100 bg-slate-50 p-3 *:inset-1 *:cursor-pointer *:rounded *:border-1 *:px-5 *:py-2 *:text-xs *:font-semibold">
					<button
						className="border-slate-200 bg-white text-slate-800"
						onClick={() => {
							handleCloseModal(false);
						}}>
						Cancel
					</button>
					<button
						className="bg-red-600 text-slate-50"
						onClick={handleDeleteTask}>
						Clear Task
					</button>
				</div>
			</ModalConfirm>
		</>
	);
};

const ActionBlock = ({ status, id }) => {
	const { listData, taskProgress, msgWarning } =
		useContext(TaskTrackerContext);

	const [listTask, setListTask] = listData;
	const [inProgress, setInProgress] = taskProgress;
	const [, setWarning] = msgWarning;

	const [openModal, setOpenModal] = useState(false);

	function handleStartTask() {
		if (inProgress >= 2) {
			setWarning(ERROR_MESSAGES.too_much_inprogress);
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

	function handleComplete() {
		setInProgress(inProgress - 1);
		listTask.find((task) => task.id === id).status = "done";
	}

	function handleDelete() {
		const taskDelete = listTask.find((task) => task.id === id);
		if (taskDelete.status !== "in-progress") {
			setListTask(listTask.filter((task) => task.id !== id));
		} else {
			setWarning(ERROR_MESSAGES.task_inprogress);
		}
	}

	return (
		<>
			<div className="flex flex-nowrap items-center justify-center gap-2">
				{status === "done" ? (
					<div className="cursor-pointer items-center justify-center rounded-sm bg-slate-100/80 p-1 transition hover:bg-slate-50">
						<ShieldCheck className="h-4 w-4 stroke-green-500" />
					</div>
				) : (
					<>
						{status === "todo" && (
							<>
								<StartTask handleStartTask={handleStartTask} />

								<DeleteTask
									handleDeleteTask={handleDelete}
									handleConfirmDeleteTask={() =>
										setOpenModal(true)
									}
									isOpen={openModal}
									handleCloseModal={setOpenModal}
								/>
							</>
						)}

						{status === "in-progress" && (
							<>
								<CompleteTask handleComplete={handleComplete} />
								<PauseTask handlePauseTask={handlePauseTask} />
							</>
						)}
					</>
				)}
			</div>
		</>
	);
};

export default ActionBlock;
