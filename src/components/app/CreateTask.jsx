import { ArrowTurnDownLeft } from "../Icons";
import ButtonAction from "./Buttons";
import InputTask from "./InputTask";

const CreateTaskWrap = ({ children }) => {
	return (
		<>
			<div className="relative mb-3 w-full">{children}</div>
		</>
	);
};

const CreateTask = ({ inputValue, handleEvent, handleTextChange, isError }) => {
	return (
		<>
			<CreateTaskWrap>
				<InputTask
					inputValue={inputValue}
					handleKeyDown={handleEvent}
					handleTextChange={handleTextChange}
					isError={isError}
				/>

				<ButtonAction
					handleClick={handleEvent}
					typeBtn="create">
					<ArrowTurnDownLeft className="h-5 w-5 stroke-slate-950/50" />
				</ButtonAction>
			</CreateTaskWrap>
		</>
	);
};

export default CreateTask;
