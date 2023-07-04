import React from 'react';
import {Card, Table, Title, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge, AreaChart} from "@tremor/react";
import {subscriptions, chartdataBlack, chartdataGold} from "../../../../data";

const SaleSubscription = () => {
  return (
    <> 
       <div className="bg-gradient-to-r from-blue-400 via-pink-400 to-red-300 overflow-y-auto max-w-7xl ">

        <Card className='bg-blue-200 overflow-y-auto max-w-5xl ml-7 mt-5'>
            <Title className="text-2xl font-bold text-center mb-2">Cantidad de suscripciones</Title>
            <Table className="w-full border-collapse border border-gray-300 min-w-full  max-h-40 dark:border-gray-500">
                <TableHead className="bg-gray-100 sticky top-0 dark:bg-dark-tremor-brand-faint">
                  <TableRow>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b dark:text-gray-400">Cantidad</TableHeaderCell>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b dark:text-gray-400">Usuario</TableHeaderCell>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b dark:text-gray-400">Email</TableHeaderCell>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b dark:text-gray-400">Paquete suscrito</TableHeaderCell>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b dark:text-gray-400">fecha de subscripcion</TableHeaderCell>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b dark:text-gray-400">Estado</TableHeaderCell>
                  </TableRow>
                </TableHead> 
                <TableBody key={1}>
                  {subscriptions.map((item) =>(
                    <TableRow key={item.name} className="bg-white hover:bg-gray-100 dark:bg-dark-tremor-brand-muted">
                      <TableCell className="py-2 px-4 border-b dark:border-gray-500 dark:text-gray-400">{item.id}</TableCell>
                      <TableCell className="py-2 px-4 border-b dark:border-gray-500 dark:text-gray-400">{item.name}</TableCell>
                      <TableCell className="py-2 px-4 border-b dark:border-gray-500 dark:text-gray-400">{item.email}</TableCell>
                      <TableCell className="py-2 px-4 border-b dark:border-gray-500 dark:text-gray-400">{item.subscriptionType}</TableCell>
                      <TableCell className="py-2 px-4 border-b dark:border-gray-500 dark:text-gray-400">{item.subscribedAt}</TableCell>
                      <TableCell className="py-2 px-4 border-b dark:border-gray-500 dark:text-gray-900"><Badge className='bg-green-300 dark:bg-green-500' color="green" >{item.status}</Badge></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
            </Table>
        </Card>
      </div>
      <div className="flex h-screen bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 overflow-y-auto">
        <Card className='bg-blue-200 max-w-4xl mx-1 ml-7 my-10 max-h-96'>
          <Title className='font-bold '>Grafico de subscripciones Black</Title>
          <AreaChart
            className="h-56 mt-4"
            data={chartdataBlack}
            index="date"
            categories={["SemiAnalysis", "Black"]}
            colors={["indigo", "cyan"]}
          />
        </Card>
        <Card className='bg-blue-200 max-w-xs mx-1 my-10 max-h-96'>
          <Title className='font-bold '> Grafico de subscripciones Gold</Title>
          <AreaChart
            className="h-56 mt-4"
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

export default SaleSubscription