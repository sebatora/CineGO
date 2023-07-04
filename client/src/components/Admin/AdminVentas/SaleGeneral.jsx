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
          <Table className="w-full border-collapse border border-gray-300 min-w-full max-h-40 dark:border-gray-500">
            <TableHead className="bg-gray-100 sticky top-0 dark:bg-dark-tremor-brand-faint ">
              <TableRow>
                <TableHeaderCell className="py-2 px-10 font-semibold text-left border-b dark:text-gray-400">
                  Fecha
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-32 font-semibold text-left border-b dark:text-gray-400">
                  Numero de compra
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-24 font-semibold text-left border-b dark:text-gray-400">
                  Monto final de la compra
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody key={1}>
              {allPurchases.map((item) => (
                <TableRow
                  key={item.id}
                  className="bg-white hover:bg-gray-100 dark:bg-dark-tremor-brand-muted"
                >
                  <TableCell className="py-2 px-10 border-b dark:border-gray-500 dark:text-gray-400">
                    {item.purchase_date}
                  </TableCell>
                  <TableCell className="py-2 px-36 border-b dark:border-gray-500 dark:text-gray-400" >
                    {item.id}
                  </TableCell>
                  <TableCell className="py-2 px-28 border-b dark:border-gray-500 dark:text-gray-400">
                  {valueFormatter(item.totalPrice)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      {/* <div style={{ display: "flex" }}>
        <Card className="bg-blue-200 max-w-2xl m-5">
          <Title className="font-bold ">Grafico de ventas de Candy</Title>
          <AreaChart
            className="h-56 mt-5"
            data={ventasCandy}
            index="date"
            categories={["quantity","total"]}
            colors={["indigo","cyan"]}
          />
        </Card>
        <Card className="bg-blue-200 max-w-sm m-5">
          <Title className="font-bold mb-14">Grafico de ventas por producto</Title>
          <DonutChart 
            data={apartSales}
            category="quantity"
            index="category"
            valueFormatter={valueFormatter}
          />
        </Card>
      </div> */}
    </>
  )
}

export default SaleGeneral