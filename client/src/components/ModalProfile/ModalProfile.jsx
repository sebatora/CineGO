import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ModalProfile = ({ activeModal, setActiveModal }) => {
	const userData = useSelector(state => state.userData);
	return (
		<div className="w-96 h-40 flex flex-col top-20 right-0 bg-white dark:bg-black absolute uppercase border border-t-0 border-black dark:border-white dark:border-opacity-70 border-opacity-10 rounded-bl-md">
			<h3 className="my-4 flex justify-center select-none">!Bienvenido {userData.firstName} {userData.lastName}!</h3>
			<Link to="/profile" className="flex mb-4 justify-center items-center gap-1">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-7 h-7 stroke-black dark:stroke-white">
					<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
				</svg>
				<span>Mi Cuenta</span>
			</Link>
			<button onClick={() => setActiveModal(!activeModal)} className="flex justify-center items-center gap-1">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-7 h-7 stroke-red-600">
					<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
				</svg>
				<span className="text-red-600 dark:text-red-600">Cerrar Sesión</span>
			</button>
		</div>
	)
}

export default ModalProfile