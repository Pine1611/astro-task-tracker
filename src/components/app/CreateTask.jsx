import AddTask from "./AddTask";
import InputTask from "./InputTask";

const CreateTaskWrap = ({ children }) => {
	return (
		<>
			<div className="relative mb-3 w-full">{children}</div>
		</>
	);
};

const CreateTask = ({ handleEvent, handleTextChange, isError }) => {
	return (
		<>
			<CreateTaskWrap>
				<InputTask
					handleKeyDown={handleEvent}
					handleTextChange={handleTextChange}
					isError={isError}
				/>
				<AddTask handleClick={handleEvent} />
			</CreateTaskWrap>
		</>
	);
};

export default CreateTask;
