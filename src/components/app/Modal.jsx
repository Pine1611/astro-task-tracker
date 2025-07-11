import { useEffect, useRef } from "react";

const ModalConfirm = ({ isOpen, handleClose, children }) => {
	const modalContentRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				modalContentRef.current &&
				!modalContentRef.current.contains(event.target)
			) {
				handleClose(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen, handleClose]);

	if (!isOpen) return null;

	return (
		<>
			<div
				className={`fixed top-0 left-0 ${isOpen ? "flex" : ""} z-100 h-screen w-screen items-center justify-center bg-slate-900/80 p-4 transition`}
				onClick={() => {
					handleClose(false);
				}}>
				<div
					className="w-screen overflow-hidden rounded-lg bg-white sm:w-100"
					ref={modalContentRef}>
					{children}
				</div>
			</div>
		</>
	);
};

export default ModalConfirm;
