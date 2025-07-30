import ActionBlock from "./ActionBlock";
import { STATUS_TASK } from "./utils/configs";

const ItemTask = ({ id, title, status }) => {
	const classStatus = STATUS_TASK.find((item) => item === status);

	return (
		<tr className="border-b border-slate-100 *:px-1 *:py-2 last:border-b-0">
			<td className="text-xs text-slate-600 italic">{`#${id}`}</td>

			<td className="flex items-center gap-2">
				<span className="text-sm text-slate-600">{title}</span>
				<span className={classStatus}>{status}</span>
			</td>

			<td>
				<ActionBlock
					status={status}
					id={id}
				/>
			</td>
		</tr>
	);
};

export default ItemTask;
