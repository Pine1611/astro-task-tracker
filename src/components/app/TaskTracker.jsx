import { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import ListTask from "./ListTask";

const ERROR_MESSAGES = {
	str_empty: "Please enter task title!",
	str_too_short: "Title task too short!",
};

const DEFAULT_TASKS = [
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

const TaskTracker = () => {
	const [task, setTask] = useState(null);
	const [listTask, setListTask] = useState(DEFAULT_TASKS);
	const [isError, setIsError] = useState({ status: false, message: "" });

	useEffect(() => {
		handleCheckValue();
	}, [task]);

	function handleEvent(event) {
		if (event && (event.key === "Enter" || event.type === "click")) {
			if (task == null) {
				setTask("");
			} else {
				// begin add task
			}
		}
	}

	function handleTextChange(event) {
		const valueInput = event.target.value;
		setTask(valueInput.toString().trim());
	}

	function handleCheckValue() {
		if (task != null) {
			if (task === "") {
				setIsError({ status: true, message: ERROR_MESSAGES.str_empty });
			} else {
				if (task.length <= 3) {
					setIsError({
						status: true,
						message: ERROR_MESSAGES.str_too_short,
					});
				} else {
					setIsError({ status: false, message: "" });
				}
			}
		}
	}

	return (
		<>
			<CreateTask
				handleEvent={handleEvent}
				handleTextChange={handleTextChange}
				isError={isError}
			/>

			<ListTask tasks={listTask} />
		</>
	);
};

export default TaskTracker;
