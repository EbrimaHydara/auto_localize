import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export const ProductUpdateSoftware = () => {
  const [dateState, updateDateState] = useState('')
  const router = useRouter()
  const pathname = router.pathname.split('/')[3]
  useEffect(() => {
    const getProductData = async () => {
      const api = axios.create()
      const res = await api.get(`/api/software/${pathname}/`)
      return res
    }
    getProductData()
      .then(res => {
        console.log(res.data.published_date)
        updateDateState(res.data.published_date)
      })
      .catch(error => {
        // TODO: error handling.
        console.log(error)
        //this.isProductData = false;
      })
  }, [pathname])

  return <span>{dateState}</span>
}
