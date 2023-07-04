import { useEffect } from 'react';
import { getPurchases, getUsers } from '../../../redux/actions';
import { useDispatch, useSelector} from 'react-redux';

import {Card, Table, Title, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge, TabList, Tab, TabGroup, TabPanels, TabPanel, AreaChart} from "@tremor/react";

const SaleSubscription = () => {
  
  const dispatch = useDispatch()
  const user = useSelector(state => state.allUsers)
  const dataSubs = useSelector(state => state.allPurchases)

  const allItems = [];

  dataSubs.forEach(obj => {
    obj.items.forEach(item => {
      allItems.push(item);
    });
  });

  let black = allItems.filter((item) => item.name === 'Subscription Black');
  
  let gold = allItems.filter((item) => item.name === 'Subscription Gold');
  
  useEffect(()=>{
    dispatch(getUsers())
    dispatch(getPurchases())
  }, [dispatch])

  return (
    <> 
      <div className=' flex justify-center bg-gradient-to-r from-blue-400 via-pink-400 to-red-300 overflow-y-auto max-w-7xl'>
        <Card className='bg-blue-200 overflow-y-auto max-w-5xl mt-5'>
            <Title className="text-2xl font-bold text-center mb-2">Cantidad de suscripciones</Title>
            <Table className="w-full border-collapse border border-gray-300 min-w-full  max-h-40 dark:border-gray-500">
                <TableHead className="bg-gray-100 sticky top-0 dark:bg-dark-tremor-brand-faint">
                  <TableRow>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b dark:text-gray-400">Nombre</TableHeaderCell>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b dark:text-gray-400">Email</TableHeaderCell>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b dark:text-gray-400">Subscripción</TableHeaderCell>
                    <TableHeaderCell className="py-2 px-4 font-semibold text-left border-b dark:text-gray-400">Estado</TableHeaderCell>
                  </TableRow>
                </TableHead> 
                <TableBody key={1}>
                  {user.map((item) =>(
                    <TableRow key={item.id} className="bg-white hover:bg-gray-100 dark:bg-dark-tremor-brand-muted">
                      <TableCell className="py-2 px-4 border-b dark:border-gray-500 dark:text-gray-400">{item.firstName}</TableCell>
                      <TableCell className="py-2 px-4 border-b dark:border-gray-500 dark:text-gray-400">{item.email}</TableCell>
                      <TableCell className="py-2 px-4 border-b dark:border-gray-500 dark:text-gray-400">{item.cinePlus}</TableCell>
                      <TableCell className="py-2 px-4 border-b dark:border-gray-500 dark:text-gray-900"><Badge className='bg-green-300 dark:bg-green-500' color="green" >{item.activePlus}</Badge></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
            </Table>
        </Card>
      </div>
      <div className="flex justify-center bg-gradient-to-r from-blue-400 via-pink-400 to-red-300 overflow-y-auto max-w-7xl">
        <Card className='overflow-y-auto max-w-5xl mt-4 bg-gradient-to-br from-indigo-300 to-blue-200 mb-6 rounded-lg shadow-lg'>
        <Title className="font-bold text-4xl">Subscripciones </Title>
          <TabGroup>
            <TabList className="mt-4 space-x-4">
              <Tab className="px-4 py-2 text-white rounded-lg">Black</Tab>
              <Tab className="px-4 py-2 text-white rounded-lg">Gold</Tab>
            </TabList> 
            <TabPanels>
              <TabPanel>
                <div className="flex justify-center">
                  <Card className="bg-blue-200 max-w-4xl mx-1 ml-5 my-6 max-h-80">
                    <Title className="font-bold text-2xl mb-4">Gráfico de suscripciones Black</Title>
                    <AreaChart
                      key={1}
                      className="h-56"
                      data={black}
                      // index="date"
                      categories={["quantity", "price"]}
                      colors={["indigo", "green"]}
                    />
                  </Card>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="flex justify-center" >
                  <Card className="bg-blue-200 max-w-4xl mx-1 ml-5 my-6 max-h-80 rounded-lg shadow-lg">
                    <Title className="font-bold text-2xl mb-4">Gráfico de subscripciones Gold</Title>
                    <AreaChart
                      className="h-56"
                      data={gold}
                      // index="date"
                      categories={["quantity", "price"]}
                      colors={["indigo", "green"]}
                    />
                  </Card>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Card>
      </div>
          
    </>
  )
}

export default SaleSubscription