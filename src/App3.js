import { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios'
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
const BASE_URL = 'https://622f13593ff58f023c150843.mockapi.io/test/shop-filter1'

function App() {

  const [post,setPost] = useState([])
  const [postAll,setPostAll] = useState(0)
  const [query,setQuery] = useState('')
  const [page,setPage] = useState(1)
  const [pageQty,setPageQty] = useState(8)

  useEffect(()=>{
    axios.get(BASE_URL)
    .then(({data})=>{
      setPostAll(data.length)
    })
    axios.get(BASE_URL+ `?search=${query}&page=${page}&limit=${pageQty}`)
    .then(({data})=>{
      console.log('запрос',data)
     setPost(data)
    }) 
    if(query.length > 0) {
      axios.get(BASE_URL+ `?search=${query}&page=${page}&limit=${pageQty}`)
      .then(({data})=>{
       setPost(data)
      })
    }
  },[query,page])

console.log('всего постов',postAll)

  return (
    <div className="App">
    <Container>
       <TextField
       value={query}
       onChange={(e)=>setQuery(e.target.value)}
        id="outlined-basic" label="Outlined" variant="outlined" />
        <Stack spacing={2}>
{
  pageQty && 
  
  <Pagination 
  showFirstButton showLastButton
  page={page}
  count={Math.ceil(postAll/pageQty)}
  onChange={(_,num)=>setPage(num)}
   color="secondary" />
}
{
  post.map(item=><div key={item.id}>{item.title}</div>)
}
        </Stack>
    </Container>
    </div>
  );
}

export default App;
