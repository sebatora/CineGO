import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, putUser } from '../../../redux/actions';
import Spinner from '../../Spinner/Spinner';
import { Switch } from '@headlessui/react';

const DataUsers = () => {
	const [loading, setLoading] = useState(true);
  const allUsers = useSelector((state) => state.allUsers);
	const [currentPage, setCurrentPage] = useState(0);
	const [countPage, setCountPage] = useState(1);
  const dispatch = useDispatch();

	const handleToggle = (userId, activeUser) => {
		setTimeout(() => {
			dispatch(getUsers());
		}, 100);
		dispatch(putUser(userId, { activeUser: `${!activeUser}` }));
	};

	const pagination = () => {
		return allUsers.slice(currentPage, currentPage + 8);
	}

	const nextPage = () => {
		if(allUsers.length > currentPage + 8){
      setCurrentPage(currentPage + 8);
      setCountPage(countPage + 1);
    }
	}

	const prevPage = () => {
		if(currentPage > 0){
			setCurrentPage(currentPage - 8);
      setCountPage(countPage - 1)
		}
	}

  useEffect(() => {
    dispatch(getUsers());
    setLoading(false);
  }, []);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div className='w-full'>
					<h3 className='dark:text-black p-4'>Usuarios</h3>
					{/* <div className='absolute right-0 top-0 m-2 bg-green-500 rounded-md p-2'>
						<button className='flex items-center bg-light-200 rounded-md p-2'>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 stroke-black">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
							<p className='text-sm dark:text-black'>Añadir</p>
						</button>
					</div> */}
					<div className='w-full p-2 border'>
						<table className="w-full text-center bg-slate-400 rounded-sm">
							<thead>
								<tr className="h-10 font-bold text-md">
									<th>Imagen</th>
									<th>Nombre</th>
									<th>Apellido</th>
									<th>Email</th>
									<th>Suscripcion</th>
									<th></th>
									<th className='w-24'>Habilitado</th>
								</tr>
							</thead>
							<tbody>
								{pagination().map((user, index) => (
									<tr className={`h-12 ${index % 2 === 0 ? "bg-slate-100" : "bg-slate-300"}`} key={index}>
										<td className='flex justify-center'><img className="w-16 h-16" src={user.image} alt={user.firstName} /></td>
										<td>{user.firstName}</td>
										<td>{user.lastName}</td>
										<td>{user.email}</td>
										<td>{user.cinePlus}</td>
										<td>
											<button>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 stroke-light-900">
													<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
												</svg>
											</button>
										</td>
										<td>
											<Switch
												className={`relative inline-flex h-5 w-10 items-center rounded-full ${user.activeUser ? "bg-green-500" : "bg-red-500"}`}
												checked={user.activeUser}
												onChange={() => handleToggle(user.id, user.activeUser)}
											>
												<span
													aria-hidden="true"
													className={`${user.activeUser ? 'translate-x-5' : 'translate-x-0'}
														pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
												/>
											</Switch>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className="w-full flex justify-center items-center pt-4">
							<button onClick={prevPage} className="bg-light-200 rounded-md p-1 mx-2" type="text">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-5 h-5 stroke-black">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
								</svg>
							</button>
							<span className="dark:text-black">{countPage}</span>
							<button onClick={nextPage} className="bg-light-200 rounded-md p-1 mx-2" type="text">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-5 h-5 stroke-black">
									<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default DataUsers;