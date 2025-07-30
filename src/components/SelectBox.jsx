import { ChevronDown } from "./Icons";

function ContainerSlb({ children, isSmall }) {
	return (
		<>
			<div
				className={[
					styles.select__box,
					isSmall && styles["select__box--small"],
				].join(" ")}>
				{children}
			</div>
		</>
	);
}
function ContainerListInput({ children, name, isSmall, isError }) {
	return (
		<>
			<div
				id={`${name}Current`}
				className={[
					styles.select__current,
					isSmall ? styles["select__current--small"] : "",
					name == "from" ? styles.select__from : "",
					name == "to" ? styles.select__to : "",
					isError ? styles["select__current--error"] : "",
				].join(" ")}
				tabIndex={1}>
				{children}
			</div>
		</>
	);
}

function ListInputSlb({
	dataItem,
	name,
	handleChange,
	checkedItem,
	setCheckedItem,
}) {
	const { isChecked } = checkedItem;

	const listInput = dataItem.map((item, index) => (
		<div
			key={index}
			className="">
			<input
				className=""
				type="radio"
				id={`${name}-${item}`}
				value={item}
				name={name}
				checked={isChecked == index}
				onClick={() => {
					setCheckedItem({ isChecked: index });
				}}
				onChange={handleChange}
			/>
			<span className="">{item}</span>
		</div>
	));

	return (
		<>
			{listInput}
			<ChevronDown className="" />
		</>
	);
}
function ListLabelSlb({ dataItem, name }) {
	const listLabel = dataItem.map((item) => (
		<li key={item}>
			<label htmlFor={`${name}-${item}`}>{item}</label>
		</li>
	));

	return (
		<>
			<ul className="">{listLabel}</ul>
		</>
	);
}

const SelectBox = ({
	name,
	listData,
	handleChange,
	checkedItem,
	setCheckedItem,
	isSmall,
	isError = false,
}) => {
	return (
		<ContainerSlb isSmall={isSmall}>
			<ContainerListInput
				name={name}
				isSmall={isSmall}
				isError={isError}>
				<ListInputSlb
					dataItem={listData}
					name={name}
					handleChange={handleChange}
					checkedItem={checkedItem}
					setCheckedItem={setCheckedItem}
				/>
			</ContainerListInput>

			<ListLabelSlb
				dataItem={listData}
				name={name}
			/>
		</ContainerSlb>
	);
};

export default SelectBox;
