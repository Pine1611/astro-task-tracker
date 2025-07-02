import { ArrowTurnDownLeft } from "../Icons";
// import AddTask from "./AddTask";
import ButtonAction from "./Buttons";
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

				<ButtonAction
					handleClick={handleEvent}
					typeBtn="create">
					<ArrowTurnDownLeft className="h-5 w-5 stroke-slate-950/50" />
				</ButtonAction>
				{/* <AddTask handleClick={handleEvent} /> */}
			</CreateTaskWrap>
		</>
	);
};

export default CreateTask;
