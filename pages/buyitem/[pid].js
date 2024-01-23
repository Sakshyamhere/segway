import { useRouter } from 'next/router'
import React from 'react'

function Buyproduct() {
    const router = useRouter()
  return (
    <div>Post:{router.query.pid}</div>
  )
}

export default Buyproduct