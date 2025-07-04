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
	const [inputValue, setInputValue] = useState("");
	const [listTask, setListTask] = useState(DEFAULT_TASKS);
	const [isError, setIsError] = useState({ status: false, message: "" });

	useEffect(() => {
		handleCheckValue();
	}, [inputValue]);

	function handleEvent(event) {
		if (event && (event.key === "Enter" || event.type === "click")) {
			if (!isError.status && inputValue.length > 3) {
				let lastTask = listTask.at(-1);
				const newTask = {
					id: lastTask.id + 1,
					title: inputValue.trim(),
					status: "todo",
					createdAt: new Date(),
					updatedAt: new Date(),
				};

				setListTask([...listTask, newTask]);
				setInputValue("");
			} else if (inputValue === "") {
				setIsError({ status: true, message: ERROR_MESSAGES.str_empty });
			}
		}
	}

	function handleTextChange(event) {
		setInputValue(event.target.value);
	}

	function handleCheckValue() {
		const value = inputValue.toString().trim();
		if (value === "" && !isError.status) {
			// check for first time before handle text changed... do nothing
			setInputValue("");
		} else {
			if (value === "") {
				setIsError({ status: true, message: ERROR_MESSAGES.str_empty });
			} else if (value.length > 0 && value.length < 4) {
				setIsError({
					status: true,
					message: ERROR_MESSAGES.str_too_short,
				});
			} else {
				setIsError({ status: false, message: "" });
			}
		}
	}

	return (
		<>
			<CreateTask
				inputValue={inputValue}
				handleEvent={handleEvent}
				handleTextChange={handleTextChange}
				isError={isError}
			/>

			<ListTask tasks={listTask} />
		</>
	);
};

export default TaskTracker;
