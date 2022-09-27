import React from 'react'
import {useParams} from 'react-router-dom'   

export const SinglePage = () => {
    const projectId = (useParams());

  return (
    <div>Project id:{projectId.id} </div>
  )
}
