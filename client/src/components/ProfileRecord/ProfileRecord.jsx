import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserById } from "../../redux/actions";

function ProfileRecord() {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(userData.id));
  }, []);

  return (
    <div className="min-h-screen pb-10">
      <h2 className="w-full flex items-center justify-center h-16 bg-light-200 dark:bg-slate-800">Historial de Compras</h2>
      {!userData?.purchases?.length ? (
        <div className="w-full mt-60 flex justify-center items-center">
          <h1>Aún no has realizado compras</h1>
        </div>
      ) : (
        <table className="text-center w-10/12 mx-auto mt-10">
          <thead>
            <tr className="h-16 font-bold text-xl dark:text-white bg-light-400 dark:bg-slate-900">
              <th>Fecha</th>
              <th>Detalle</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total (ARS)</th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-slate-400">
            {userData?.purchases && userData?.purchases.map((purchase) => (
              purchase.items.map((item, index) => {
                return (
                  <tr className="h-12 bg-light-200 dark:bg-slate-700" key={index}>
                    <td>{purchase.purchase_date.slice(0, 10)}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price ? item.price / item.quantity : purchase.totalPrice}</td>
                    <td>{item.price ? item.price : purchase.totalPrice}</td>
                  </tr>
                )
              })
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProfileRecord;
