export const NodeCollapse = (props) => {
	return (
		<>
			<svg
				{...props}
				width={20}
				height={20}
				viewBox="0 0 12 12"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M11.8929 7.33925C11.9518 7.33925 12 7.29103 12 7.23211V6.48211C12 6.42318 11.9518 6.37496 11.8929 6.37496H3.13393C3.038 6.13745 2.87326 5.93403 2.66087 5.79084C2.44847 5.64766 2.19812 5.57123 1.94196 5.57139C1.23214 5.57139 0.65625 6.14728 0.65625 6.85711C0.65625 7.56693 1.23214 8.14282 1.94196 8.14282C2.4817 8.14282 2.94375 7.81068 3.13393 7.33925H5.14687V9.37496C5.14687 10.1142 5.74687 10.7142 6.48616 10.7142H11.8929C11.9518 10.7142 12 10.666 12 10.6071V9.85711C12 9.79818 11.9518 9.74996 11.8929 9.74996H6.48616C6.27857 9.74996 6.11116 9.58255 6.11116 9.37496V7.33925H11.8929ZM5.19241 3.34416L7.50268 5.16827C7.58705 5.23657 7.71429 5.17496 7.71429 5.06514V3.74996H11.25C11.3089 3.74996 11.3571 3.70175 11.3571 3.64282V2.83925C11.3571 2.78032 11.3089 2.73211 11.25 2.73211H7.71429V1.41693C7.71429 1.30845 7.58839 1.2455 7.50268 1.3138L5.19241 3.13791C5.17703 3.15034 5.16463 3.16605 5.1561 3.18389C5.14758 3.20174 5.14316 3.22126 5.14316 3.24104C5.14316 3.26081 5.14758 3.28033 5.1561 3.29818C5.16463 3.31602 5.17703 3.33173 5.19241 3.34416Z" />
			</svg>
		</>
	);
};

export const NodeExpand = (props) => {
	return (
		<>
			<svg
				{...props}
				width={20}
				height={20}
				viewBox="0 0 12 12"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M11.8929 7.33924C11.9518 7.33924 12 7.29103 12 7.2321V6.4821C12 6.42317 11.9518 6.37496 11.8929 6.37496H3.13393C3.038 6.13744 2.87326 5.93403 2.66087 5.79084C2.44847 5.64765 2.19812 5.57123 1.94196 5.57139C1.23214 5.57139 0.65625 6.14728 0.65625 6.8571C0.65625 7.56692 1.23214 8.14281 1.94196 8.14281C2.4817 8.14281 2.94375 7.81067 3.13393 7.33924H5.14687V9.37496C5.14687 10.1142 5.74687 10.7142 6.48616 10.7142H11.8929C11.9518 10.7142 12 10.666 12 10.6071V9.8571C12 9.79817 11.9518 9.74996 11.8929 9.74996H6.48616C6.27857 9.74996 6.11116 9.58255 6.11116 9.37496V7.33924H11.8929ZM5.25 3.74996H8.78571V5.06514C8.78571 5.17362 8.91295 5.23656 8.99732 5.16826L11.3076 3.34415C11.3746 3.29192 11.3746 3.19147 11.3076 3.13924L8.99732 1.3138C8.91161 1.24549 8.78571 1.3071 8.78571 1.41692V2.7321H5.25C5.19107 2.7321 5.14286 2.78031 5.14286 2.83924V3.64281C5.14286 3.70174 5.19107 3.74996 5.25 3.74996Z" />
			</svg>
		</>
	);
};

export const ArrowTurnDownLeft = (props) => {
	return (
		<>
			<svg
				{...props}
				viewBox="0 0 24 24"
				fill="none"
				strokeWidth={1.5}
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"
				/>
			</svg>
		</>
	);
};

export const Play = (props) => {
	return (
		<>
			<svg
				{...props}
				viewBox="0 0 24 24"
				fill="none"
				strokeWidth={1.5}
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
				/>
			</svg>
		</>
	);
};

export const Pause = (props) => {
	return (
		<>
			<svg
				{...props}
				viewBox="0 0 24 24"
				fill="none"
				strokeWidth={1.5}
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 5.25v13.5m-7.5-13.5v13.5"
				/>
			</svg>
		</>
	);
};

export const Check = (props) => {
	return (
		<>
			<svg
				{...props}
				viewBox="0 0 24 24"
				fill="none"
				strokeWidth={1.5}
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m4.5 12.75 6 6 9-13.5"
				/>
			</svg>
		</>
	);
};

export const ShieldCheck = (props) => {
	return (
		<>
			<svg
				{...props}
				viewBox="0 0 24 24"
				fill="none"
				strokeWidth={1.5}
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
				/>
			</svg>
		</>
	);
};

export const Trash = (props) => {
	return (
		<>
			<svg
				{...props}
				fill="none"
				strokeWidth={1.5}
				viewBox="0 0 24 24"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
				/>
			</svg>
		</>
	);
};

export const Close = (props) => {
	return (
		<>
			<svg
				{...props}
				fill="none"
				strokeWidth={1.5}
				viewBox="0 0 24 24"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M6 18 18 6M6 6l12 12"
				/>
			</svg>
		</>
	);
};

export const ExclamationTriangle = (props) => {
	return (
		<>
			<svg
				{...props}
				fill="none"
				strokeWidth={1.5}
				viewBox="0 0 24 24"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
				/>
			</svg>
		</>
	);
};

export const Funnel = (props) => {
	return (
		<>
			<svg
				{...props}
				fill="none"
				strokeWidth={1.5}
				viewBox="0 0 24 24"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
				/>
			</svg>
		</>
	);
};

export const ChevronDown = (props) => {
	return (
		<>
			<svg
				{...props}
				fill="none"
				strokeWidth={1.5}
				viewBox="0 0 24 24"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m19.5 8.25-7.5 7.5-7.5-7.5"
				/>
			</svg>
		</>
	);
};

export const BarsArrowDown = (props) => {
	return (
		<>
			<svg
				{...props}
				fill="none"
				strokeWidth={1.5}
				viewBox="0 0 24 24"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3 4.5H17.25M3 9H12.75M3 13.5H8M17.25 9V21M17.25 21L13.5 17.25M17.25 21L21 17.25"
				/>
			</svg>
		</>
	);
};

export const BarsArrowUp = (props) => {
	return (
		<>
			<svg
				{...props}
				fill="none"
				strokeWidth={1.5}
				viewBox="0 0 24 24"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3 4.5H17.25M3 9H12.75M3 13.5H8.25M13.5 12.75L17.25 9M17.25 9L21 12.75M17.25 9V21"
				/>
			</svg>
		</>
	);
};
