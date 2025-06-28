const InputTask = ({
	inputValue,
	handleTextChange,
	handleKeyDown,
	isError,
}) => {
	return (
		<>
			<div className="relative w-full">
				<input
					className="h-10 w-full rounded-md border-1 border-solid border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
					id="inputTitle-js"
					name="tasktitle"
					type="text"
					placeholder="What do you need too-doo today?"
					required
					value={inputValue}
					onChange={handleTextChange}
					onKeyDown={handleKeyDown}
				/>

				<span
					className={`absolute -bottom-6 text-xs text-red-400 italic ${isError.status && `block`}`}>
					{isError.message}
				</span>
			</div>
		</>
	);
};

export default InputTask;
