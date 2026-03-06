import React, { useEffect, useState } from 'react'
import { getEmpanadas } from '../mock/AsyncMock'

const useMock = () => {
const[data,setData]=useState([])
const[loading,setLoading]=useState(true)
const[error,setError]=useState(null)


useEffect(()=>{
    getEmpanadas()
    .then((res)=>setData(res))
    .catch((error)=>setError(error))
    .finally(()=>setLoading(false))

},[])
console.log(data)
  return {loading,error,data}
}

export default useMock
