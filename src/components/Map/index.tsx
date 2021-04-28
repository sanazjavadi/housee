import * as React from "react"
import GoogleMapReact from "google-map-react"

import { IMap } from "./Map"

const AnyReactComponent = ({ text }) => <div>{text}</div>
const Map: React.FunctionComponent<IMap.IProps> = () => {
  const center = {
    lat: 59.95,
    lng: 30.33,
  }

  return (
    <GoogleMapReact defaultCenter={center} defaultZoom={11}>
      <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
    </GoogleMapReact>
  )
}

export default Map
