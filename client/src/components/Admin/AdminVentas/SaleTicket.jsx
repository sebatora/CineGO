import React from "react";
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
import { ventasTicket, ticketSales, apartSalesTickets } from "../../../../data";

const valueFormatter = (number) => `$ ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
const valueFormatter2 = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const SaleCandy = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 via-pink-400 to-red-300 overflow-y-auto max-w-7xl">
        <Card className="overflow-y-auto max-w-5xl ml-7 mt-6 mb-2 ">
          <Title className="text-2xl font-bold text-center mb-2">
            Cantidad de entradas vendidas
          </Title>
          <Table className="w-full border-collapse border border-gray-300 min-w-full max-h-40 dark:border-gray-500">
            <TableHead className="bg-gray-100 sticky top-0 dark:bg-dark-tremor-brand-faint ">
              <TableRow >
                <TableHeaderCell className="py-2 px-24 font-semibold text-left border-b dark:text-gray-400">
                  Mes
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-24 font-semibold text-left border-b dark:text-gray-400">
                  Cantidad
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-20 mr-20 font-semibold text-left border-b dark:text-gray-400">
                  Total recaudado
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody key={1}>
              {ticketSales.map((item) => (
                <TableRow
                  key={item.month}
                  className="bg-white hover:bg-gray-100 dark:bg-dark-tremor-brand-muted"
                >
                  <TableCell className="py-2 px-24 border-b dark:border-gray-500 dark:text-gray-400">
                    {item.month}
                  </TableCell>
                  <TableCell className="py-2 px-24 border-b dark:border-gray-500 dark:text-gray-400" >
                    {valueFormatter2(item.quantity)}
                  </TableCell>
                  <TableCell className="py-2 px-20 border-b dark:border-gray-500 dark:text-gray-400">
                  {valueFormatter(item.total)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      <div className="flex h-screen bg-gradient-to-r from-blue-400 via-pink-400 to-red-300 overflow-y-auto">
        <Card className="bg-blue-200 max-w-4xl mx-1 ml-7 my-10 max-h-96">
          <Title className="font-bold ">Grafico de ventas de entradas</Title>
          <AreaChart
            className="h-56 mt-4"
            data={ventasTicket}
            index="date"
            categories={["quantity","total"]}
            colors={["indigo","cyan"]}
          />
        </Card>
        <Card className="bg-blue-200 max-w-xs mx-1 my-10 max-h-96">
          <Title className="font-bold mb-14">Grafico por tipo de entrada</Title>
          <DonutChart 
            data={apartSalesTickets}
            category="quantity"
            index="category"
            valueFormatter={valueFormatter}
          />
        </Card>
      </div>
   
    </>
  );
};

export default SaleCandy;
