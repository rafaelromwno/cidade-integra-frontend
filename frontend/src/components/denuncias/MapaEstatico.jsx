import React from 'react'
import { AspectRatio } from "@/components/ui/aspect-ratio"

const MapaEstatico = ({ local }) => {

 const mapUrl = `https://via.placeholder.com/300x200/e5e7eb/6b7280?text=${encodeURIComponent(local)}`;

  return (
    <div className={`rounded-lg overflow-hidden border mb-4`}>
      <AspectRatio ratio={3/2}>
        <div className="relative w-full h-full">
          <img
            src={mapUrl}
            alt={`Mapa da localização: ${local}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-2 left-2 right-2">
            <p className="text-xs text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
              📍 {local}
            </p>
          </div>
        </div>
      </AspectRatio>
    </div>
  )
}

export default MapaEstatico