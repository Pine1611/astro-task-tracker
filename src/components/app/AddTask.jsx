import { ArrowTurnDownLeft } from "../Icons";

const AddTask = ({ handleClick }) => {
	return (
		<>
			<button
				onClick={handleClick}
				className="absolute top-1/2 right-1 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm border-1 border-slate-200 bg-slate-100 p-1">
				<ArrowTurnDownLeft
					className="stroke-slate-950/50"
					width="20"
					height="20"
				/>
			</button>
		</>
	);
};

export default AddTask;
