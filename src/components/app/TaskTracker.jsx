import { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import ListTask from "./ListTask";
import {
	DEFAULT_TASKS,
	ERROR_MESSAGES,
	TaskTrackerContext,
} from "./utils/configs";

const TaskTracker = () => {
	const [inputValue, setInputValue] = useState("");
	const [isError, setIsError] = useState({ status: false, message: "" });
	const [listTask, setListTask] = useState(DEFAULT_TASKS);

	const [inProgress, setInProgress] = useState(
		listTask.filter((task) => task.status === "in-progress").length,
	);
	const [warning, setWarning] = useState("");

	useEffect(() => {
		handleCheckValue();
	}, [inputValue]);

	const sortBy = "status";
	const statusOrder = {
		"in-progress": 1,
		todo: 2,
		done: 3,
	};
	listTask.sort((a, b) => {
		const statusA = statusOrder[a[sortBy]];
		const statusB = statusOrder[b[sortBy]];

		if (statusA < statusB) return -1;
		if (statusA > statusB) return 1;

		if (a.id < b.id) return -1;
		if (a.id > b.id) return 1;

		return 0;
	});

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

			<TaskTrackerContext.Provider
				value={{
					listData: [listTask, setListTask],
					taskProgress: [inProgress, setInProgress],
					msgWarning: [warning, setWarning],
				}}>
				<ListTask listTask={listTask} />
			</TaskTrackerContext.Provider>
		</>
	);
};

export default TaskTracker;
