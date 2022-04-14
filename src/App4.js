// import { useEffect,useState } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import ReactPaginate from 'react-paginate';
import axios from 'axios'
import BASE_URL from './api'

const PER_PAGE = 5

function App() {
  const [post,setPost] = useState([])
  const [currentPage,setCurrentPage] = useState(0)

useEffect(()=>{
  axios.get(BASE_URL)
  .then(({data})=>{
    setPost(data)
  })
},[]) 

// общее колличество страниц
const pageCount = Math.ceil(post.length/PER_PAGE)

// переключение пагинации
const handelPageClick = ({selected:selectedPage}) => {
  setCurrentPage(selectedPage)
}


// число которое нужно для разрезания массива(первая цифра )

// 0 5 10 15
const offset = currentPage * PER_PAGE


const currentPageData = post.slice(offset,offset+PER_PAGE).map((item,i)=><div key={i}>{item.title}</div>)


  return (
    <div className="App">
      {
        currentPageData
      }
      <ReactPaginate
      containerClassName='pagi_custom'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handelPageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        activeClassName='active_num'
      />
    </div>
  );
}

export default App;
