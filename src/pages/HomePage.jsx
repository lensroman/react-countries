import { useEffect, useState } from "react"

import axios from 'axios'

import { useNavigate  } from "react-router-dom"


import { Controls } from '../components/Controls'
import { List } from '../components/List'
import { Card } from '../components/Card'

import { ALL_COUNTRIES } from '../axios-config'

export const HomePage = ({countries, setCountries}) => {
  const [filteredCountries, setFilteredCountries] = useState(countries)

  const navigate = useNavigate()

  const searchHandler = (search, region) => {
    let data = [...countries]

    if (region) {
      data = data.filter(country => country.region.includes(region))
    }

    if (search) {
      data = data.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
    }

    setFilteredCountries(data)
  }

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(
        ({data}) => setCountries(data)
      )
    }
  }, [])

  useEffect(() => {
    searchHandler()
  }, [countries])

  return (
    <>
      <Controls onSearch={searchHandler} />
      <List>
        {
          filteredCountries.map(c => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString()
                },
                {
                  title: 'Region',
                  description: c.region
                },
                {
                  title: 'Capital',
                  description: c.capital
                },
              ]
            }

            return (
              <Card key={c.name} {...countryInfo} onClick={() => navigate(`/country/${c.name}`)} />
            )
          })
        }
      </List>
    </>
  )
}

