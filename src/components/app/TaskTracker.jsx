import { useEffect, useState } from "react";
import CreateTask from "./CreateTask";

const ERROR_MESSAGES = {
	str_empty: "Please enter task title!",
	str_too_short: "Title task too short!",
};

const TaskTracker = () => {
	const [task, setTask] = useState("");
	const [isError, setIsError] = useState({ status: false, message: "" });

	useEffect(() => {
		handleEvent();
	}, [task]);

	function handleEvent(event) {
		if (event && (event.type === "keydown" || event.type === "click")) {
			handleCheckValue();
		}
	}

	function handleTextChange(event) {
		setTask(event.target.value);
	}

	function handleCheckValue() {
		if (task === "") {
			setIsError({ status: true, message: ERROR_MESSAGES.str_empty });
		} else if (task.length <= 3) {
			setIsError({ status: true, message: ERROR_MESSAGES.str_too_short });
		} else {
			setIsError({ status: false, message: "" });
		}
	}

	return (
		<>
			<CreateTask
				handleEvent={handleEvent}
				handleTextChange={handleTextChange}
				isError={isError}
			/>
		</>
	);
};

export default TaskTracker;
