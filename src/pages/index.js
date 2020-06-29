import React, {useEffect, useState} from 'react'
import {Global} from '@emotion/core'
import useDarkMode from 'use-dark-mode'
import {Helmet} from 'react-helmet'
import '../styles/index.css'

function Index() {
  const darkMode = useDarkMode('light', {
    classNameDark: 'chakra-ui-dark',
    classNameLight: 'chakra-ui-light',
    storageKey: 'chakra-ui-color-mode',
  })
  const [date, setDate] = useState(null)
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date')
      const newDate = await res.text()
      setDate(newDate)
    }
    getDate()
  }, [])

  console.log('darkMode', darkMode.value)

  return (
    <>
      <Global
        styles={{
          body: {
            backgroundColor: darkMode.value ? 'black' : 'white',
          },
        }}
      />
      <main>
        <button onClick={darkMode.toggle}>Toggle color mode</button>
      </main>
    </>
  )
}

export default Index
