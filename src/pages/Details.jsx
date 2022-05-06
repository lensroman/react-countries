import { useParams } from "react-router-dom"


export const Details = () => {
  const params = useParams()

  return (
    <>
      {params.name}
    </>
  )
}

