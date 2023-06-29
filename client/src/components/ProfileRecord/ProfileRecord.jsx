import { useEffect } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../redux/actions";

function ProfileRecord() {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();
  console.log(userData);

  useEffect(() => {
    dispatch(getUserById(userData.id));
  }, []);

  return (
    <div className="h-screen mt-20">
      {userData?.purchases && userData?.purchases.map((purchase, index) => (
        <div key={index}>
          {purchase.items.map(item => (
            <div className="">
              <h3>{item.name}</h3>
              <h3>{item.quantity}</h3>
            </div>
          ))}
        </div>
      ))}
    </div>
    // <div className="h-screen">
    //   <h2 className="w-full flex items-center justify-center h-16 bg-light-200 dark:bg-slate-800">
    //     Historial de Compras
    //   </h2>
    //   <main>
    //     <div>
    //       <h1>Hola "Nombre del usuario".</h1>
    //       <h2>Mirá tus ultimos movimientos</h2>
    //       <div>
    //         <FaExclamationCircle />
    //         <p>
    //           Tu membresía y puntos vencen el "Fecha de cuando se suscribio + 30
    //           dias".
    //         </p>
    //       </div>
    //     </div>
    //     <div>
    //       <h3>Detalle de movimientos</h3>
    //       <table className="tabla">
    //         <thead>
    //           <tr>
    //             <th>Fecha</th>
    //             <th>Detalle(Pelicula)</th>
    //             <th>Entradas</th>
    //             <th>Pesos ($)</th>
    //             <th>Puntos utilizados</th>
    //             <th>Puntos ganados</th>
    //             <th>Entradas disponibles</th>
    //             <th>Puntos disponibles</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr>
    //             <td>Datos</td>
    //             <td>Datos</td>
    //             <td>Datos</td>
    //             <td>Datos</td>
    //             <td>Datos</td>
    //             <td>Datos</td>
    //             <td>Datos</td>
    //             <td>Datos</td>
    //           </tr>
    //         </tbody>

    //                     <tbody>
    //           {datos.map((fila, index) => (
    //             <tr key={index}>
    //               <td>{fila.fecha}</td>
    //               <td>{fila.cine}</td>
    //               <td>{fila.detalle}</td>
    //               <td>{fila.transaccion}</td>
    //               <td>{fila.entradas}</td>
    //               <td>{fila.cineFanPesos}</td>
    //               <td>{fila.puntosUtilizados}</td>
    //               <td>{fila.puntosGanados}</td>
    //               <td>{fila.entradasDisponibles}</td>
    //               <td>{fila.puntosDisponibles}</td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </main>
    // </div>
  );
}

export default ProfileRecord;
