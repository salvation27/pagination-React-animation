import { useEffect,useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import ItemProduct from './components/ItemProduct/ItemProduct';
import axios from 'axios'
import Filter from './components/Filter/Filter';
import {motion ,AnimatePresence} from 'framer-motion'

function App() {

  const [prod,setProd] = useState([])
  const [filtered,setFiltered] = useState([])
  const [active,setActive] = useState('')

  const fetchsome = async () => {
      // const data = await fetch('https://622f13593ff58f023c150843.mockapi.io/test/shop-filter1')
      // const  products = await data.json()
      // setProd(products)

      axios.get('https://622f13593ff58f023c150843.mockapi.io/test/shop-filter1').then((response) => {
        setProd(response.data);
        setFiltered(response.data);
      });
      toast.success('данные получены', {
        position: "top-right",
      });
  }
  useEffect(() => {
    fetchsome()
  }, []);



  return (
    <div className="App">
        <ToastContainer />
        <Filter prod={prod} setFiltered={setFiltered}  active={active} setActive={setActive} />
        <motion.div  className="prod_wrap">
        <AnimatePresence>
        {
          filtered.map(item=><ItemProduct key={item.id} item={item} />)
          }
        </AnimatePresence>
        </motion.div>
    </div>
  );
}

export default App;
