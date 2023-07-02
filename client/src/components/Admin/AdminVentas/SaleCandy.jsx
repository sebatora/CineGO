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

const SaleCandy = () => {
  return (
    <>
      <div style={{}}>
        <Card className="bg-blue-200 overflow-y-auto max-w-5xl ml-7 mt-5">
          <Title className="text-2xl font-bold text-center mb-2">
            Cantidad de productos vendidos
          </Title>
          <Table className="w-full border-collapse border border-gray-300 min-w-full  max-h-64">
            <TableHead className="bg-gray-100 sticky top-0">
              <TableRow>
                <TableHeaderCell className="py-2 px-32 font-semibold text-left border-b">
                  Mes
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-32 font-semibold text-left border-b">
                  quantity
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-24 font-semibold text-left border-b">
                  Total recaudado
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody key={1}>
              {candySales.map((item) => (
                <TableRow
                  key={item.mes}
                  className="bg-white hover:bg-gray-100"
                >
                  <TableCell className="py-2 px-32 border-b">
                    {item.mes}
                  </TableCell>
                  <TableCell className="py-2 px-32 border-b">
                    {item.quantity}
                  </TableCell>
                  <TableCell className="py-2 px-32 border-b">
                    {item.total}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      <div style={{ display: "flex" }}>
        <Card className="bg-blue-200 max-w-xl m-5">
          <Title className="font-bold ">Grafico de ventas de Candy</Title>
          <AreaChart
            className="h-72 mt-4"
            data={ventasCandy}
            index="date"
            categories={["Candy"]}
            colors={["indigo", "cyan"]}
          />
        </Card>
        <Card className="bg-blue-200 max-w-xl m-5">
          <Title className="font-bold mb-14">Grafico de ventas por producto</Title>
          <DonutChart 
            data={apartSales}
            category="quantity"
            dataKey='category'
            marginTop='mt-6'
          />
        </Card>
      </div>
    </>
  );
};

export default SaleCandy;
