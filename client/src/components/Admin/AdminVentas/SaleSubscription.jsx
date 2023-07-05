import { useEffect } from 'react';
import { getMetrics } from '../../../redux/actions';
import { useDispatch, useSelector} from 'react-redux';

import {Card, Table, Title, Text, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, DonutChart, BarChart } from "@tremor/react";

const valueFormatter = (number) => `$ ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

const SaleSubscription = () => {
  
  const dispatch = useDispatch();
  // const user = useSelector(state => state.allUsers);

  const data = useSelector(state => state.allMetrics);

  const subsData = data.filter(item => item.type === "subscription");
  
  const dataBlack = subsData.filter ((item) => item.name === "Subscription Black");
  const dataGold = subsData.filter ((item) => item.name === "Subscription Gold");

  //Recorremos los datos y sumamos la cantidad de suscripciones black
  let totalSubsBlack = 0;
  for (let i = 0; i < dataBlack.length; i++) {
    if (dataBlack[i].name === "Subscription Black") {
      totalSubsBlack += dataBlack[i].quantity;
    }
  }


  //Recorremos los datos y sumamos la cantidad de suscripciones gold

  let totalSubsGold = 0;
  for (let i = 0; i < dataGold.length; i++) {
    if (dataGold[i].name === "Subscription Gold") {
      totalSubsGold += dataGold[i].quantity;
    }
  }


  //Recorremos los datos y sumamos la cantidad de suscripciones estandar

//   const dataSubs = subsData.reduce((acc, newData) => {
//     const existingData = acc.find(item => item.name === newData.name);
//     if (existingData) {
//         existingData.price += newData.price;
//     } else {
//         acc.push({ ...newData });
//     }
//     return acc;
// }, []);
  
  useEffect(()=>{
    // dispatch(getUsers())
    dispatch(getMetrics())
  }, [dispatch])
  return (
    <> 
      <div className='flex justify-center overflow-y-auto'>
      <Card className="bg-primary-300 mt-10 mx-5">
          <Title className="text-2xl font-bold text-center mb-2">
            Listado de suscripciones vendidos
          </Title>
          <Table className="w-full border-collapse border border-gray-300 min-w-full max-h-96 dark:border-gray-500">
            <TableHead className="bg-gray-100 sticky top-0 dark:bg-dark-tremor-brand-faint ">
              <TableRow>
                <TableHeaderCell className="py-2 px-6 font-semibold text-center border-b dark:text-gray-400">
                  Fecha
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-6 font-semibold text-center border-b dark:text-gray-400">
                  Numero de compra
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-4 font-semibold text-center border-b dark:text-gray-400">
                  Producto
                </TableHeaderCell>
                <TableHeaderCell className="py-2 px-4 font-semibold text-center border-b dark:text-gray-400">
                  Total
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody key={1}>
              {subsData.map((item) => (
                <TableRow
                  key={item.purchase_date}
                  className="bg-white hover:bg-gray-100 dark:bg-dark-tremor-brand-muted"
                >
                  <TableCell className="py-2 px-6 border-b text-center dark:border-gray-500 dark:text-gray-400">
                    {item.purchase_date.substring(0, 10)}
                  </TableCell>
                  <TableCell className="py-2 px-6 border-b text-center dark:border-gray-500 dark:text-gray-400" >
                    {item.purchase_id}
                  </TableCell>
                  <TableCell className="py-2 px-4 border-b text-center dark:border-gray-500 dark:text-gray-400">
                    {item.name}
                  </TableCell>
                  <TableCell className="py-2 px-4 border-b text-center dark:border-gray-500 dark:text-gray-400">
                    {valueFormatter(item.price * item.quantity)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
      <div className='flex justify-center overflow-y-auto'>
          <Card className='flex flex-col overflow-y-auto max-w-md mt-5 bg-gradient-to-br from-indigo-300 to-blue-200 rounded-lg shadow-lg h-64'>
            <Title className="font-bold text-xl text-center">Suscripción total de Black</Title>
            <Text className="text-5xl font-bold text-center mt-20">{totalSubsBlack}</Text>
          </Card>
          <Card className='flex flex-col overflow-y-auto ml-5 max-w-md mt-5 bg-gradient-to-br from-indigo-300 to-blue-200 rounded-lg shadow-lg h-64'>
            <Title className="font-bold text-xl text-center">suscripción total de Gold</Title>
            <Text  className="text-5xl font-bold text-center mt-20">{totalSubsGold}</Text>
          </Card>
      </div>
      {/* <div className="flex justify-center overflow-y-auto">
        <Card className='overflow-y-auto max-w-2xl mt-5 bg-gradient-to-br from-indigo-500 to-blue-200 rounded-lg shadow-lg'>
          <Title className="font-bold text-4xl">Suscripciones</Title>
          <BarChart
            className="mt-6 max-w-xl"
            data={dataSubs}
            index="name"
            categories={["price"]}
            valueFormatter={valueFormatter}
            colors={colors}
          />
        </Card>
        <Card className='mt-5 ml-5 bg-gradient-to-br max-w-lg from-indigo-300 to-blue-200 rounded-lg shadow-lg'>
          <Title className="font-bold text-4xl">Precio total</Title>
          <DonutChart
            className="mt-6"
            data={dataSubs}
            category="price"
            index="name"
            valueFormatter={valueFormatter}
            colors={["slate", "violet", "indigo"]}
          />
        </Card>
      </div> */}
          
    </>
  )
}

export default SaleSubscription