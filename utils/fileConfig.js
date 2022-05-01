const fs = require('fs')
/* const { v4: uuidv4 } = require('uuid') */
/* import { v4 as uuidv4 } from 'uuid'; */

const fileLayout = 'layout.json'

const saveLayout = (data = []) => {
  fs.writeFileSync(fileLayout, JSON.stringify(data))
  return data
}

const readLayout = () => {
  if (!fs.existsSync(fileLayout)) {
    return '[]'
  }

  const info = fs.readFileSync(fileLayout, { encoding: 'utf-8' })
  if (info === '[]' || info === '') return '[]'
  const data = JSON.parse(info)
  console.log({ layout: info })

  return data
}

module.exports = {
  saveLayout,
  readLayout
}
