import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserById } from "../../redux/actions";

function ProfileRecord() {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [countPage, setCountPage] = useState(1);

  const purchases =
    userData?.purchases &&
    userData?.purchases.sort(
      (a, b) => new Date(b.purchase_date) - new Date(a.purchase_date)
    );

  const pagination = () => {
    return purchases.slice(currentPage, currentPage + 8);
  };

  const nextPage = () => {
    if (purchases.length > currentPage + 8) {
      setCurrentPage(currentPage + 8);
      setCountPage(countPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 8);
      setCountPage(countPage - 1);
    }
  };

  useEffect(() => {
    dispatch(getUserById(userData.id));
  }, []);

  return (
    <div className="min-h-screen pb-10">
      <h2 className="w-full flex items-center justify-center h-16 bg-light-200 dark:bg-slate-800">
        Historial de Compras
      </h2>
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
            {purchases.map((purchase) =>
              purchase.items.map((item, index) => {
                return (
                  <tr
                    className="h-12 bg-light-200 dark:bg-slate-700 text"
                    key={index}
                  >
                    <td>{purchase.purchase_date.slice(0, 10)}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>
                      {item.price
                        ? item.price / item.quantity
                        : purchase.totalPrice}
                    </td>
                    <td>{item.price ? item.price : purchase.totalPrice}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      )}
      {purchases.length ? (
        <div className="w-full flex justify-center items-center pt-4">
          <button
            onClick={prevPage}
            className="bg-light-200 rounded-md p-1 mx-2"
            type="text"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-5 h-5 stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <span className="dark:text-black">{countPage}</span>
          <button
            onClick={nextPage}
            className="bg-light-200 rounded-md p-1 mx-2"
            type="text"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-5 h-5 stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default ProfileRecord;
