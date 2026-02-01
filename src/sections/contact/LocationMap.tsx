"use client"

import { Map, MapMarker, MarkerContent, MarkerTooltip, MapControls } from "@/components/ui/map"
import { MapPin } from "lucide-react"
import { NAIROBI_COORDS } from "@/constants/contactData"

export const LocationMap = () => {
  return (
    <div className="relative h-[280px] rounded-lg overflow-hidden border border-white/10 shadow-lg shadow-green-500/10 hover:shadow-green-500/20 transition-shadow duration-500">
      <Map
        center={[NAIROBI_COORDS.longitude, NAIROBI_COORDS.latitude]}
        zoom={11}
        minZoom={8}
        maxZoom={16}
      >
        <MapMarker
          longitude={NAIROBI_COORDS.longitude}
          latitude={NAIROBI_COORDS.latitude}
        >
          <MarkerContent>
            <div className="relative">
              {/* Pulsing ring animation */}
              <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
              <div className="relative size-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white shadow-lg flex items-center justify-center">
                <MapPin className="size-3 text-white" />
              </div>
            </div>
          </MarkerContent>
          <MarkerTooltip className="bg-gray-800 text-white border border-green-500/50 shadow-lg shadow-green-500/20">
            <div className="flex flex-col gap-0.5 min-w-[120px]">
              <span className="font-semibold text-green-400">Nairobi, Kenya</span>
              <span className="text-xs text-white/70">Based here</span>
            </div>
          </MarkerTooltip>
        </MapMarker>

        <MapControls
          position="bottom-right"
          showZoom={true}
          showCompass={true}
        />
      </Map>
    </div>
  )
}
