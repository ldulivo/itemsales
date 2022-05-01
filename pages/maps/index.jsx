import dynamic from 'next/dynamic'

const MyMaps = dynamic(() => import('./maps'), { ssr: false })

export default function Index () {
  return (
    <div>
        <h1>Map Index</h1>
        <MyMaps />
    </div>
  )
}
