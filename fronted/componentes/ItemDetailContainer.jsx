import  { useEffect, useState } from 'react'
import useMock from '../hooks/useMock'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import Detail from './Detail'

const ItemDetailContainer = () => {
    const{data, loading}= useMock()
    const[card ,setCard] =useState([])
    const{id}=useParams()
   useEffect(()=>{
if(data){
    const filtered = data.filter(item=>item.id === Number(id));
    setCard(filtered);
}
   },[data,id])
    if(!data)return
    if(loading) return <Spinner/>
return (
  <div>
    {card.map(item => (
      <Detail key={item.id} item={item} />
    ))}
  </div>
)


}

export default ItemDetailContainer
