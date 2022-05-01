/* import Image from 'next/image' */
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import mapsStyle from '../../styles/maps.module.css'
import leafletStyle from 'leaflet/dist/leaflet.css'
import { LocationIcon } from './locationIcon'
// import SvgMaps from '../../components/svg/SvgMaps'

export default function Maps () {
  const myPosition = { lat: '-32.870785', lng: '-68.821165' }

  return (
      <div className={mapsStyle.leaflet_container}>
        <h1>Mapa</h1>

        <MapContainer
            center={myPosition}
            zoom={13}
            style={{ height: '100%', width: '100%', zIndex: '1' }}
        >
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                className={leafletStyle}
            />

            <Marker
                position={myPosition}
                icon={LocationIcon}
            />
        </MapContainer>
      </div>
  )
}
