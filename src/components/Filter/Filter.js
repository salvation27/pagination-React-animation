import React, { useEffect } from 'react'

const Filter = ({prod,setFiltered,active,setActive}) => {

    useEffect(()=> {
        if(active==='') {
            setFiltered(prod) 
        }
        const filtered = prod.filter(item=>item.category===active)
        setFiltered(filtered) 
    },[active])

  return (
    <div className='filter_btn'>
        <button 
        className={active==='' ? 'active' : ''}
         onClick={()=>setActive('')}>all</button>
        <button
        className={active==='place' ? 'active' : ''}
         onClick={()=>setActive('place')}>place</button>
        <button
        className={active==='dish' ? 'active' : ''}
         onClick={()=>setActive('dish')}>dish</button>
    </div>
  )
}

export default Filter