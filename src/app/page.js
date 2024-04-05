"use client"

import Card from "@/components/Card/Card"

export default function Home() {
  
 
  return (
     <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    { [12,3,4,5,6,7,6,5,4].map((item,index)=>  <Card/>)}
     </div>
  )
}
