import { createContext } from "react";

export const TaskTrackerContext = createContext(null);

const ERROR_MESSAGES = {
	str_empty: "Please enter task title!",
	str_too_short: "Title task too short!",
	too_much_inprogress: "Too much tasks in-progress in this day, pls STOP!",
	task_inprogress: "Can't delete task in-progress, pls stop this task!",
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

export { ERROR_MESSAGES, DEFAULT_TASKS };
