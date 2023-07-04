import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchases } from '../../../redux/actions';
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
  DonutChart,
} from "@tremor/react";

const valueFormatter = (number) => `$ ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

function SaleGeneral() {

  const allPurchases = useSelector((state) => state.allPurchases);
  const dispatch = useDispatch();

  console.log(allPurchases);

  useEffect(() => {
    dispatch(getPurchases());
  }, [])

  return (
    <>
      <div style={{}}>
        <Card className="bg-blue-200 overflow-y-auto max-w-5xl ml-7 mt-3 mb-1 ">
          <Title className="text-2xl font-bold text-center mb-2">
            Lista de ventas
          </Title>
          <Table className="w-full border-collapse border border-gray-300 min-w-full max-h-96 dark:border-gray-500">
            <TableHead className="bg-gray-100 sticky top-0 dark:bg-dark-tremor-brand-faint ">
              <TableRow>
                <TableHeaderCell className="py-2 px-8 font-semibold text-left border-b dark:text-gray-400">
                  Fecha
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-24 font-semibold text-left border-b dark:text-gray-400">
                  Numero de compra
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-14 font-semibold text-left border-b dark:text-gray-400">
                  Nombre de la pelicula
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b dark:text-gray-400">
                  Cantidad
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-2 font-semibold text-left border-b dark:text-gray-400">
                  Total en entradas
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-8 font-semibold text-left border-b dark:text-gray-400">
                  Nombre del producto
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b dark:text-gray-400">
                  Cantidad
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-2 font-semibold text-left border-b dark:text-gray-400">
                  Total en producto
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-6 font-semibold text-left border-b dark:text-gray-400">
                  Total final
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody key={1}>
            {allPurchases.map((item) => (
              <TableRow
                key={item.id}
                className="bg-white hover:bg-gray-100 dark:bg-dark-tremor-brand-muted"
              >
                <TableCell className="py-2 px-2 border-b text-center dark:border-gray-500 dark:text-gray-400">
                 {item.purchase_date.substring(0, 10)}
                </TableCell>
                <TableCell className="py-2 px-4 border-b text-center dark:border-gray-500 dark:text-gray-400">
                  {item.id}
                </TableCell>
                <TableCell className="py-2 px-2 border-b text-center dark:border-gray-500 dark:text-gray-400">
                  {item.items.length > 0 ? item.items[0].name : ''}
                </TableCell>
                <TableCell className="py-2 px-10 border-b text-center dark:border-gray-500 dark:text-gray-400">
                  {item.items.length > 0 ? item.items[0].quantity : ''}
                </TableCell>
                <TableCell className="py-2 px-12 border-b text-center dark:border-gray-500 dark:text-gray-400">
                  {valueFormatter(item.items.length > 0 ? item.items[0].quantity * item.items[0].price : '')}                </TableCell>
                <TableCell className="py-2 px-4 border-b text-center dark:border-gray-500 dark:text-gray-400">
                  {item.items.length > 1 ? item.items[1].name : ''}
                </TableCell>
                <TableCell className="py-2 px-10 border-b text-center dark:border-gray-500 dark:text-gray-400">
                  {item.items.length > 1 ? item.items[1].quantity : ''}
                </TableCell>
                <TableCell className="py-2 px-12 border-b text-center dark:border-gray-500 dark:text-gray-400">
                  {valueFormatter(item.items.length > 0 ? item.items[1].quantity * item.items[1].price : '')}
                </TableCell>
                <TableCell className="py-2 px-10 border-b text-center dark:border-gray-500 dark:text-gray-400">
                  {valueFormatter(item.items.length > 0 ? item.items[0].quantity * item.items[0].price + item.items[1].quantity * item.items[1].price : '')}
                </TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </>
  )
}

export default SaleGeneral