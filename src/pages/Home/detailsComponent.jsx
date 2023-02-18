import React from 'react'
import style from './style.module.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import config from '../../config'

const ListItem = ({ projectId }) => {
  const [startDay, setStartDay] = useState(null)
  const [countIterations, setCountIterations] = useState(0)
  const [countScrums, setCountScrums] = useState(0)
  const [countSites, setCountSite] = useState(0)
  const [countEmployees, setCountEmployees] = useState(0)

  const fetchProjectDetails = async () => {
    try {
      const startDayResult = await axios.get(
        `${config.apiRequest}/home/projectStartDay/2`
      )
      setStartDay(startDayResult?.data?.data[0]?.start_date)
      const countIterationsResult = await axios.get(
        `${config.apiRequest}/home/projectCountIterations/2`
      )
      setCountIterations(countIterationsResult?.data?.data[0]?.count)
      const countScrumsResult = await axios.get(
        `${config.apiRequest}/home/projectCountScrums/2`
      )
      console.log(countScrumsResult, '4545454')
      setCountScrums(countScrumsResult?.data?.data[0]?.count)
      const CountSiteResult = await axios.get(
        `${config.apiRequest}/home/projectCountSites/2`
      )
      setCountSite(CountSiteResult?.data?.data[0].count)
      const countEmployeesResult = await axios.get(
        `${config.apiRequest}/home/projectCountEmployees/2`
      )
      setCountEmployees(countEmployeesResult.data?.data[0]?.count)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProjectDetails()
  }, [])

  return (
    <div className={style.listItem}>
      <div className={style.item}>
        {countSites} sites are working on this project
      </div>
      <div className={style.item}>
        {countScrums} Scrums are working on this project
      </div>
      <div className={style.item}>
        {countEmployees} Employees are working on this project
      </div>
      <div className={style.item}>Project started in {startDay}</div>
      <div className={style.item}>
        {countIterations} PI made on this project
      </div>
    </div>
  )
}

export default ListItem
