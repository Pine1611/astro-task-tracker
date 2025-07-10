const ButtonAction = ({ handleClick, children, typeBtn }) => {
	return (
		<>
			<button
				onClick={handleClick}
				className={`cursor-pointer items-center justify-center rounded-sm bg-slate-100/80 p-1 transition hover:bg-slate-50 ${typeBtn === "create" && "absolute top-1/2 right-1 flex h-8 w-8 -translate-y-1/2 border border-slate-200"} ${typeBtn === "play" && "border border-blue-50 hover:border-blue-100 hover:bg-blue-50!"} ${typeBtn === "done" && "border border-green-50 hover:border-green-100 hover:bg-green-50!"} ${typeBtn === "stop" && "border border-yellow-50 hover:border-yellow-100 hover:bg-yellow-50!"} ${typeBtn === "delete" && "border border-red-50 hover:border-red-100 hover:bg-red-50!"}`}>
				{children}
			</button>
		</>
	);
};

export default ButtonAction;
