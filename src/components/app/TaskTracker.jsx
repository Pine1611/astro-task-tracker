import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import InputTask from "./InputTask";

const ERROR_MESSAGES = {
	str_empty: "Please enter task title!",
	str_too_short: "Title task too short!",
};

const TaskTracker = () => {
	const [task, setTask] = useState("");
	const [isError, setIsError] = useState({ status: false, message: "" });

	// useEffect(() => {
	// 	handleCheckValue();
	// }, [task]);

	function handleEvent(event) {
		if (event.type === "keydown" || event.type === "click") {
			handleCheckValue();
		}
	}

	function handleTextChange(event) {
		setTask(event.target.value);
		setIsError({ status: false, message: "" });
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
			<div className="relative mb-6 w-full">
				<InputTask
					handleKeyDown={handleEvent}
					handleTextChange={handleTextChange}
					isError={isError}
				/>

				<AddTask handleClick={handleEvent} />
			</div>
		</>
	);
};

export default TaskTracker;
