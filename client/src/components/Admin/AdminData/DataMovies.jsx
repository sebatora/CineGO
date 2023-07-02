import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, putMovie } from '../../../redux/actions';
import Spinner from '../../Spinner/Spinner';
import CreateMovie from '../AdminCreate/CreateMovie';
import { Switch } from "@headlessui/react";

const DataMovies = () => {
	const [loading, setLoading] = useState(true);
	const [activeForm, setActiveForm] = useState(false);
  const allMovies = useSelector((state) => state.allMovies);

  const dispatch = useDispatch();

	const handleToggle = (movieId, activeMovie) => {
		setTimeout(() => {
			dispatch(getMovies());
		}, 100);
		dispatch(putMovie(movieId, { activeMovie: `${!activeMovie}` }));
	};	

  useEffect(() => {
    dispatch(getMovies());
    setLoading(false);
  }, []);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div className='w-full'>
					<h3 className='dark:text-black p-4'>Películas</h3>
					<div className='absolute right-0 top-0 m-4'>
						<button className='flex items-center bg-light-200 rounded-md p-2' onClick={() => setActiveForm(true)}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 stroke-black">
								<path strokelinecap="round" strokelinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
							<p className='text-sm dark:text-black'>Añadir</p>
						</button>
					</div>
					<div className='w-full p-2 border'>
						<table className="w-full text-center bg-slate-400 rounded-sm">
							<thead>
								<tr className="h-10 font-bold text-md">
									<th>Título</th>
									<th>Duración</th>
									<th>Estreno</th>
									<th>Clasificación</th>
								</tr>
							</thead>
							<tbody>
								{allMovies.map((movie, index) => (
									<tr className={`h-12 ${index % 2 === 0 ? "bg-slate-100" : "bg-slate-300"}`} key={index}>
										<td>{movie.title}</td>
										<td>{movie.duration}</td>
										<td>{movie.release_date}</td>
										<td>{movie.clasification}</td>
										<td>
											<button>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 stroke-light-900">
													<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
												</svg>
											</button>
										</td>
										<td>
											<Switch
												className={`relative inline-flex h-5 w-10 items-center rounded-full ${movie.activeMovie ? "bg-green-500" : "bg-red-500"}`}
												checked={movie.activeMovie}
												onChange={() => handleToggle(movie.id, movie.activeMovie)}
											>
												<span
													aria-hidden="true"
													className={`${movie.activeMovie ? 'translate-x-5' : 'translate-x-0'}
														pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
												/>
											</Switch>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					{activeForm && <CreateMovie setActiveForm={setActiveForm} />}
				</div>
			)}
		</>
	)
}

export default DataMovies