import { useContext } from "react";
import { Funnel } from "../Icons";
import { STATUS_TASK, TaskTrackerContext } from "./utils/configs";

function FilterContainer({ children }) {
	return (
		<>
			<div className="absolute top-1/2 right-0 flex -translate-y-1/2 flex-row rounded-lg border border-slate-100 *:transition">
				{children}
			</div>
		</>
	);
}

function FilterActived({ checkedItem, setCheckedItem, handleChange }) {
	const { isChecked } = checkedItem;

	return (
		<>
			<div className="*: flex w-25 items-center justify-center bg-slate-50/50 px-3 py-1">
				{STATUS_TASK.map((item, index) => (
					<div key={index}>
						<input
							className={`slb__input hidden`}
							type="radio"
							id={`status-${item}`}
							value={item}
							name="status-task"
							checked={isChecked == index}
							onClick={() => {
								setCheckedItem({ isChecked: index });
							}}
							onChange={handleChange}
						/>
						<span
							className={`slb__text text-xs text-slate-500 capitalize`}>
							{item}
						</span>
					</div>
				))}
			</div>
		</>
	);
}

function FilterListValue() {
	return (
		<>
			<ul className="absolute top-full right-0 z-99 rounded-lg border border-slate-100 bg-slate-50 p-4">
				{STATUS_TASK.map((item, index) => (
					<li key={index}>
						<label
							htmlFor={`status-${item}`}
							className="cursor-pointer text-sm text-slate-500 capitalize">
							{item}
						</label>
					</li>
				))}
			</ul>
		</>
	);
}

const Filter = () => {
	const { statusFilter } = useContext(TaskTrackerContext);
	const [checkedStatus, setCheckedStatus] = statusFilter;

	function handleFilter() {
		// show/hide filter
		console.log("filter");
	}
	function handleChangeStatus(event) {
		setCheckedStatus({
			isChecked: STATUS_TASK.indexOf(event.target.value),
		});
		// console.log(STATUS_TASK.indexOf(event.target.value));
	}

	return (
		<>
			<FilterContainer>
				<FilterActived
					checkedItem={checkedStatus}
					setCheckedItem={setCheckedStatus}
					handleChange={handleChangeStatus}
				/>

				<button
					onClick={handleFilter}
					className="flex cursor-pointer items-center justify-center border-l border-slate-100 bg-slate-50 p-2 hover:bg-slate-100">
					<Funnel className="h-4 w-4 stroke-slate-500" />
				</button>

				<FilterListValue />
			</FilterContainer>
		</>
	);
};

export default Filter;
