import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

import { IoArrowBack } from "react-icons/io5"
import { searchByCountry } from '../axios-config'

import { Button } from "../components/Button"


export const Details = () => {
  const [country, setCountry] = useState(null)

  const { name } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({data}) => setCountry(data[0]))
  }, [name])

  console.log(country)

  return (
    <>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {name}
    </>
  )
}

