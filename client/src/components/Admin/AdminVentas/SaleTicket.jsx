import React, { useEffect } from "react";
import {
  Card,
  Table,
  Title,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  AreaChart,
} from "@tremor/react";
import { useDispatch, useSelector } from "react-redux";
import { getMetrics } from "../../../redux/actions";

const valueFormatter = (number) =>
  `$ ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

const SaleCandy = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allMetrics);

  const ticketData = data.filter((item) => item.type === "show");

  useEffect(() => {
    dispatch(getMetrics());
  }, [dispatch]);

  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 overflow-y-auto max-w-7xl">
        <Card className="overflow-y-auto max-w-5xl ml-7 mt-6 mb-2 ">
          <Title className="text-2xl font-bold text-center mb-2">
            Listado de entradas vendidas
          </Title>
          <Table className="w-full border-collapse border border-gray-300 min-w-full max-h-40 dark:border-gray-500">
            <TableHead className="bg-gray-100 sticky top-0 dark:bg-dark-tremor-brand-faint ">
              <TableRow>
                <TableHeaderCell className="py-2 px-24 font-semibold text-center border-b dark:text-gray-400">
                  Fecha
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-24 font-semibold text-center border-b dark:text-gray-400">
                  Numero de compra
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-20 font-semibold text-center border-b dark:text-gray-400">
                  Pelicula
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-20 font-semibold text-center border-b dark:text-gray-400">
                  Cantidad
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-20 font-semibold text-center border-b dark:text-gray-400">
                  Total
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody key={1}>
              {ticketData.map((item) => (
                <TableRow
                  key={item.purchase_date}
                  className="bg-white hover:bg-gray-100 dark:bg-dark-tremor-brand-muted"
                >
                  <TableCell className="py-2 px-24 border-b dark:border-gray-500 dark:text-gray-400">
                    {item.purchase_date.substring(0, 10)}
                  </TableCell>
                  <TableCell className="py-2 px-24 border-b dark:border-gray-500 dark:text-gray-400">
                    {item.purchase_id}
                  </TableCell>
                  <TableCell className="py-2 px-20 border-b dark:border-gray-500 dark:text-gray-400">
                    {item.name}
                  </TableCell>
                  <TableCell className="py-2 px-20 border-b dark:border-gray-500 dark:text-gray-400">
                    {item.quantity}
                  </TableCell>
                  <TableCell className="py-2 px-20 border-b dark:border-gray-500 dark:text-gray-400">
                    {valueFormatter(item.price * item.quantity)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      <div className="flex h-screen bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 overflow-y-auto">
        <div>
          <Card className="bg-blue-200 max-w-4xl mx-1 ml-7 my-10 max-h-96">
            <Title className="font-bold">Grafico de ventas de entradas</Title>
            <AreaChart
              className="h-56 mt-5"
              data={ticketData.map((item) => ({
                quantity: item.quantity,
                price: item.price,
                totalPrice: item.price * item.quantity,
              }))}
              categories={["quantity", "totalPrice"]}
              colors={["indigo", "cyan"]}
            />
          </Card>
        </div>
        <div>
          <Card className="bg-blue-200 max-w-xs mx-1 my-10 max-h-96">
            <Title>Total recaudado en entradas</Title>
            <Table className="h-8 mt-5">
              <TableBody>
                <TableRow>
                  <Title className="text-center">
                    {valueFormatter(
                      ticketData.reduce((total, item) => {
                        const totalPrice = item.price * item.quantity;
                        return total + totalPrice;
                      }, 0)
                    )}
                  </Title>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SaleCandy;
