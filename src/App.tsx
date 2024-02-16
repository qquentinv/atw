import { MapContainer, TileLayer, Marker,Popup, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const ComponentResize = () => {
	const map = useMap();

	setTimeout(() => {
		map.invalidateSize();
	}, 0);

	return null;
};


function App() {
const position = [36.0339, 1.6596];
	
  return (
			<MapContainer
			style={{
				height: '98vh'
			}}
			center={position}
			attributionControl={true}
			zoom={8}
			minZoom={3}
			scrollWheelZoom={true}
		>
			<ComponentResize />
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
  )
}

export default App
