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
import { ventasCandy, candySales, apartSales } from "../../../../data";

const valueFormatter = (number) => `$ ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

const SaleCandy = () => {
  return (
    <>
      <div style={{}}>
        <Card className="bg-blue-200 overflow-y-auto max-w-5xl ml-7 mt-3 mb-1 ">
          <Title className="text-2xl font-bold text-center mb-2">
            Listado de productos vendidos
          </Title>
          <Table className="w-full border-collapse border border-gray-300 min-w-full max-h-40 dark:border-gray-500">
            <TableHead className="bg-gray-100 sticky top-0 dark:bg-dark-tremor-brand-faint ">
              <TableRow>
                <TableHeaderCell className="py-2 px-32 font-semibold text-left border-b dark:text-gray-400">
                  Mes
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-32 font-semibold text-left border-b dark:text-gray-400">
                  Cantidad
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-24 font-semibold text-left border-b dark:text-gray-400">
                  Total recaudado
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody key={1}>
              {candySales.map((item) => (
                <TableRow
                  key={item.month}
                  className="bg-white hover:bg-gray-100 dark:bg-dark-tremor-brand-muted"
                >
                  <TableCell className="py-2 px-32 border-b dark:border-gray-500 dark:text-gray-400">
                    {item.month}
                  </TableCell>
                  <TableCell className="py-2 px-36 border-b dark:border-gray-500 dark:text-gray-400" >
                    {item.quantity}
                  </TableCell>
                  <TableCell className="py-2 px-28 border-b dark:border-gray-500 dark:text-gray-400">
                  {valueFormatter(item.total)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      <div style={{ display: "flex" }}>
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
      </div>
    </>
  );
};

export default SaleCandy;
