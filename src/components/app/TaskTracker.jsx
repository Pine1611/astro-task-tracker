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
	const [checkedStatus, setCheckedStatus] = useState({ isChecked: 0 });
	// const [filterStatus, setFilterStatus] = useState("view-all");

	const [inProgress, setInProgress] = useState(
		listTask.filter((task) => task.status === "in-progress").length,
	);
	const [warning, setWarning] = useState("");

	useEffect(() => {
		handleCheckValue();
	}, [inputValue]);

	function handleEvent(event) {
		if (event && (event.key === "Enter" || event.type === "click")) {
			if (!isError.status && inputValue.length > 3) {
				let lastTask = listTask.at(-1);

				// set default id if list empty
				let newID = lastTask ? lastTask.id + 1 : 1;
				const newTask = {
					id: newID,
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
					statusFilter: [checkedStatus, setCheckedStatus],
					// sortID: [sortByID, setSortByID],
				}}>
				<ListTask />
			</TaskTrackerContext.Provider>
		</>
	);
};

export default TaskTracker;
