import * as React from 'react'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import useConfigureLeaflet from '@/hooks/useConfigureLeaflet'
import useMapServices from '@/hooks/useMapServices'
import { isDomAvailable } from '@/lib/util'

const DEFAULT_MAP_SERVICE = 'OpenStreetMap'

interface MapProps {
  children: React.ReactNode
  className: string
  defaultBaseMap: string
}

const Map: React.FC<MapProps> = props => {
  const { children, className, defaultBaseMap = DEFAULT_MAP_SERVICE, ...rest } = props

  useConfigureLeaflet()

  const services = useMapServices({
    names: [...new Set([defaultBaseMap, DEFAULT_MAP_SERVICE])],
  })
  const basemap = services.find(service => service.name === defaultBaseMap)

  let mapClassName = `map`

  if (className) {
    mapClassName = `${mapClassName} ${className}`
  }

  if (!isDomAvailable()) {
    return (
      <div className={mapClassName}>
        <p className="map-loading">Loading map...</p>
      </div>
    )
  }

  const mapSettings = {
    className: 'map-base',
    zoomControl: false,
    ...rest,
  }
  if (typeof window !== 'undefined') {
    return (
      <>
        <div className={mapClassName}>
          <MapContainer {...mapSettings}>
            {children}
            {basemap && <TileLayer {...basemap} />}
            <ZoomControl position="bottomright" />
          </MapContainer>
        </div>
      </>
    )
  }
}

export default Map
