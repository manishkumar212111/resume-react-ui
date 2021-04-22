import React from 'react'
import { Shimmer } from 'react-shimmer'
 
export default function Index({ height = 700, width = 1800}) {
  return (
    <Shimmer width={width} height={height} />  
  )
}