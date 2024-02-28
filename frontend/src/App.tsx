import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ComponentResize = () => {
  const map = useMap();

  setTimeout(() => {
    map.invalidateSize();
  }, 0);

  return null;
};

function App() {
  return (
    <MapContainer
      style={{ height: '100vh' }}
      center={[46.9908, 3.1628]}
      attributionControl={true}
      zoom={6}
      scrollWheelZoom={true}
    >
      <ComponentResize />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.4412,1.0499]}>
        <Popup>
					Rouen
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
