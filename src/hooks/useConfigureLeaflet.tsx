import { useEffect } from 'react'
import L from 'leaflet'

// eslint-disable-next-line valid-typeof
if (typeof window !== undefined) {
  require('leaflet')
}

export default function useConfigureLeaflet() {
  useEffect(() => {
    // To get around an issue with the default icon not being set up right between using React
    // and importing the leaflet library, we need to reset the image imports
    // See https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-410450387

    delete L.Icon.Default.prototype._getIconUrl
    /* tslint:disable no-var-requires */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
      iconUrl: require('leaflet/dist/images/marker-icon.png').default,
      shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
    })
  }, [])
}
