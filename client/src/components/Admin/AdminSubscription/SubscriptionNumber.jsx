import React from 'react';
import {Card, Table, Title, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge, AreaChart} from "@tremor/react";
import subscriptions from "../../../../data";

const chartdataBlack = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "Black": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "Black": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "Black": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "Black": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "Black": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "Black": 1726,
  },
];
const chartdataGold = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "Gold": 23,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "Gold": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "Gold": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "Gold": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "Gold": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "Gold": 1726,
  },
];

function SubscriptionNumber() {
  return (
    <> 
      <div style={{}}>

        <Card className='bg-blue-200 overflow-y-auto max-w-5xl ml-20 mt-5'>
            <Title className="text-2xl font-bold text-center mb-2">Cantidad de suscripciones</Title>
            <Table className="w-full border-collapse border border-gray-300 min-w-full  max-h-64">
                <TableHead className="bg-gray-100 sticky top-0">
                  <TableRow>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b">Cantidad</TableHeaderCell>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b">Usuario</TableHeaderCell>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b">Email</TableHeaderCell>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b">Paquete suscrito</TableHeaderCell>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b">fecha de subscripcion</TableHeaderCell>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b">Estado</TableHeaderCell>
                  </TableRow>
                </TableHead> 
                <TableBody key={1}>
                  {subscriptions.map((item) =>(
                    <TableRow key={item.name} className="bg-white hover:bg-gray-100">
                      <TableCell className="py-2 px-4 border-b">{item.id}</TableCell>
                      <TableCell className="py-2 px-4 border-b">{item.name}</TableCell>
                      <TableCell className="py-2 px-4 border-b">{item.email}</TableCell>
                      <TableCell className="py-2 px-4 border-b">{item.subscriptionType}</TableCell>
                      <TableCell className="py-2 px-4 border-b">{item.subscribedAt}</TableCell>
                      <TableCell className="py-2 px-4 border-b"><Badge color="emerald" >{item.status}</Badge></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
            </Table>
        </Card>
      </div>
      <div style={{display: "flex"}}>
        <Card className='bg-blue-200 max-w-xl m-5'>
          <Title className='font-bold '>Grafico de subscripciones Black</Title>
          <AreaChart
            className="h-72 mt-4"
            data={chartdataBlack}
            index="date"
            categories={["SemiAnalysis", "Black"]}
            colors={["indigo", "cyan"]}
          />
        </Card>
        <Card className='bg-blue-200 max-w-xl m-5'>
          <Title className='font-bold '> Grafico de subscripciones Gold</Title>
          <AreaChart
            className="h-72 mt-4"
            data={chartdataGold}
            index="date"
            categories={["SemiAnalysis", "Gold"]}
            colors={["indigo", "cyan"]}
          />
        </Card>
      </div>
    </>
  )
}

export default SubscriptionNumber