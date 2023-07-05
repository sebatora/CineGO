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
} from "@tremor/react";

const valueFormatter = (number) => `$ ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

function SaleGeneral() {

  const allPurchases = useSelector((state) => state.allPurchases);
  const dispatch = useDispatch();

  function calculateTotalPrice(items) {
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
      totalPrice += items[i].quantity * items[i].price;
    }
    return totalPrice;
  }

  useEffect(() => {
    dispatch(getPurchases());
  }, [dispatch]);

  return (
    <>
       <div className=' overflow-y-auto bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 justify-center item-center'>
        <Card className="bg-blue-200 overflow-y-auto max-w-7xl ml-32 mt-3 ">
          <Title className="text-2xl font-bold text-center mb-2">
            Lista de ventas
          </Title>
          <Table className="w-full border-collapse border border-gray-300 min-w-full max-h-96 dark:border-gray-500">
            <TableHead className="bg-gray-100 sticky top-0 dark:bg-dark-tremor-brand-faint ">
              <TableRow>
                <TableHeaderCell className="py-2 px-16 font-semibold text-center border-b dark:text-gray-400">
                  Fecha
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-16 font-semibold text-center border-b dark:text-gray-400">
                  Numero de compra
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-16 font-semibold text-center border-b dark:text-gray-400">
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
                <TableCell className="py-2 px-16 border-b text-center dark:border-gray-500 dark:text-gray-400">
                 {item.purchase_date.substring(0, 10)}
                </TableCell>
                <TableCell className="py-2 px-16 border-b text-center dark:border-gray-500 dark:text-gray-400">
                  {item.id}
                </TableCell>
                <TableCell className="py-2 px-16 border-b text-center dark:border-gray-500 dark:text-gray-400">
                  {valueFormatter(item.items.length > 0 ? calculateTotalPrice(item.items) : '')}
                </TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </Card>
      </div>
      <div className="flex h-screen bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 overflow-y-auto justify-center item-center">
        <Card className="bg-blue-200 max-w-xs mt-6 h-40 ">
          <Title className="text-center">Total recaudado</Title>
          <Table className="h-8 mt-5">
            <TableBody>
              <TableRow>
                <Title className='text-center'>
                {valueFormatter(
                  allPurchases.reduce((total, item) => {
                    const quantity1 = item.items.length > 0 ? item.items[0].quantity : 0;
                    const price1 = item.items.length > 0 ? item.items[0].price : 0;
                    const quantity2 = item.items.length > 1 ? item.items[1].quantity : 0;
                    const price2 = item.items.length > 1 ? item.items[1].price : 0;
                    const totalPrice = quantity1 * price1 + quantity2 * price2;
                    return total + totalPrice;
                  }, 0)
                )}
                </Title>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </>
  )
}

export default SaleGeneral