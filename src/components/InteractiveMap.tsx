'use client';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapConfig } from '@/data/slides';
import VietnameseOverlay from './VietnameseOverlay';

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface Props {
  config: MapConfig;
}

export default function InteractiveMap({ config }: Props) {
  return (
    <MapContainer
      center={config.center}
      zoom={config.zoom}
      className="w-full h-full rounded-lg map-container"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {config.markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>
            <div className="text-singapore-charcoal">
              <h3 className="font-bold text-base mb-1">{marker.title}</h3>
              <p className="text-xs mb-1 opacity-70">{marker.titleVi}</p>
              <p className="text-sm mb-1">{marker.description}</p>
              <p className="text-xs opacity-70">{marker.descriptionVi}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
