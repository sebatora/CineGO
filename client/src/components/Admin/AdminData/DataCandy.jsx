import React, { useEffect, useState } from 'react'
import { getCandy } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '@chakra-ui/react';
import CreateCandy from '../AdminCreate/CreateCandy';

const DataCandy = () => {
	const [loading, setLoading] = useState(true);
	const [activeForm, setActiveForm] = useState(false);
  const allCandy = useSelector(state => state.allCandy);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCandy());
    setLoading(false);
  }, []);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div className='w-full'>
					<h2 className='dark:text-black'>Candy</h2>
					<div className='absolute right-0 top-0 m-2 bg-green-500 rounded-md p-2'>
						<button onClick={() => setActiveForm(true)}>
							Crear
						</button>
					</div>
					<table className="w-full text-center mt-4 bg-slate-400">
						<thead>
							<tr className="h-16 font-bold text-xl">
								<th>Nombre</th>
								<th>Descripción</th>
								<th>Categoría</th>
								<th>Precio</th>
							</tr>
						</thead>
						<tbody>
							{allCandy.map((candy, index) => (
								<tr className={`h-12 ${index % 2 === 0 ? "bg-light-200 dark:bg-light-200" : "bg-slate-200 dark:bg-slate-200"}`} key={index}>
									<td>{candy.name}</td>
									<td>{candy.description}</td>
									<td>{candy.category}</td>
									<td>{candy.price}</td>
									<td>
										<button>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 stroke-black dark:stroke-black">
												<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
											</svg>
										</button>
										<button>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 stroke-black dark:stroke-black">
												<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
											</svg>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					{activeForm && <CreateCandy setActiveForm={setActiveForm} />}
				</div>
			)}
		</>
	)
}

export default DataCandy