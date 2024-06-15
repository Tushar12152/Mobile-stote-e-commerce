import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import useAxiosSecure from "../Hooks/useAxiosSecure";
import ProductCart from "./ProductCart";


const Shop = () => {
  const axiosSecure = useAxiosSecure()
  const [ram, setRam] = useState(null);
  const handleSelectChange = e => {
    setRam(e.target.value)
  }
  // console.log(ram)

  const { data: products = [], } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axiosSecure.get('/products');
      return res.data;
    },
  });

  // console.log(products)




  return (
    <div className="pt-28 w-[80%] mx-auto">
      <Tabs>



        <div className="flex justify-between items-center">
          <TabList className="flex gap-6 mb-10 cursor-pointer">
            <Tab className='cursor-pointer p-3'>All</Tab>
            <Tab className='cursor-pointer p-3'>Apple</Tab>
            <Tab className='cursor-pointer p-3'>Samsung</Tab>
            <Tab className='cursor-pointer p-3'>VIVO</Tab>
            <Tab className='cursor-pointer p-3'>Infinix</Tab>
            <Tab className='cursor-pointer p-3'>Realme</Tab>
            <Tab className='cursor-pointer p-3'>Redme</Tab>
            <Tab className='cursor-pointer p-3'>Howaway</Tab>
            <Tab className='cursor-pointer p-3'>OPPO</Tab>
          </TabList>


          <div className="flex gap-6 items-center">
            <h2 >Filter By Ram :</h2>
            <div className="form-control">
              <select className="input input-bordered" id="ram" name="ram" value={ram} onChange={handleSelectChange}>
                <option value="4">4 Gb</option>
                <option value="8">8 Gb</option>
                <option value="16">16 Gb</option>
                <option value="32">32 Gb</option>
              </select>
            </div>
          </div>
        </div>



        <TabPanel>
          <h2>All</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md: grid-cols-2 lg:grid-cols-3">

            {
              products.map(product => <ProductCart key={product._id} product={product} />)
            }
          </div>
        </TabPanel>

        <TabPanel>
          <h2>Apple</h2>
        </TabPanel>

        <TabPanel>
          <h2>Samsung</h2>
        </TabPanel>

        <TabPanel>
          <h2>VIVO</h2>
        </TabPanel>

        <TabPanel>
          <h2>Infinix</h2>
        </TabPanel>

        <TabPanel>
          <h2>Realme</h2>
        </TabPanel>

        <TabPanel>
          <h2>Redme</h2>
        </TabPanel>

        <TabPanel>
          <h2>Howaway</h2>
        </TabPanel>

        <TabPanel>
          <h2>OPPO</h2>
        </TabPanel>

      </Tabs>
    </div>
  )
}

export default Shop