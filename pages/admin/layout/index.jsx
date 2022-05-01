import React, { useState } from 'react'

export default function index ({ URL }) {
  console.log('URL', URL)
  const [myLayout, setMyLayout] = useState([])
  const leer = async () => {
    // const res = await fetch('http://192.168.1.34:3000/api/layout/load')
    const res = await fetch(`${URL}/api/layout/load`)
    const myRes = await res.json()
    setMyLayout(myRes.layout)
    console.log('myLayout', myLayout)
  }

  const crear = async () => {
    // const PostURL = 'http://192.168.1.34:3000/api/layout/save'
    const PostURL = `${URL}/api/layout/save`
    const createLayout = {
      layout:
      [
        {
          id: 1,
          title: 'title1'
        },
        {
          id: 2,
          title: 'title2'
        },
        {
          id: 3,
          title: 'title3'
        },
        {
          id: 4,
          title: 'title4'
        }
      ]
    }

    try {
      await fetch(PostURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(createLayout)
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <input type="number" name="numero" />
      <button onClick={() => crear()}>crear archivo</button>
      <br />
      <button onClick={() => leer()}>leer</button>

      <div>
        {
          (myLayout.length > 0)
            ? myLayout.map(layout => <p key={layout.id}>{ layout.title }</p>)
            : 'menor que cero'
        }
      </div>

    </div>
  )
}

export async function getServerSideProps () {
  const URL = process.env.SERVER

  return {
    props: {
      URL
    }
  }
}
