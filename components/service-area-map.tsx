"use client";

import { useEffect, useRef } from "react";
import { Map, MapMarker, MarkerContent, MarkerLabel, useMap } from "@/components/ui/mapcn-marker-label";

type Hub = {
  id: string;
  name: string;
  longitude: number;
  latitude: number;
  hq?: boolean;
  label?: boolean;
};

const hubs: Hub[] = [
  { id: "port-charlotte", name: "Port Charlotte", longitude: -82.0906, latitude: 26.9765, label: true },
  { id: "punta-gorda", name: "Punta Gorda", longitude: -82.0454, latitude: 26.9298 },
  { id: "cape-coral", name: "Cape Coral", longitude: -81.9495, latitude: 26.5629 },
  { id: "fort-myers", name: "Fort Myers", longitude: -81.8723, latitude: 26.6406 },
  { id: "lehigh-acres", name: "Lehigh Acres", longitude: -81.6259, latitude: 26.6256 },
  { id: "estero", name: "Estero", longitude: -81.8092, latitude: 26.4351 },
  { id: "bonita-springs", name: "Bonita Springs", longitude: -81.7787, latitude: 26.3398 },
  { id: "naples", name: "Naples · HQ", longitude: -81.7948, latitude: 26.142, hq: true, label: true },
  { id: "marco-island", name: "Marco Island", longitude: -81.7448, latitude: 25.9412, label: true },
];

const hubBounds: [[number, number], [number, number]] = [
  [Math.min(...hubs.map((h) => h.longitude)), Math.min(...hubs.map((h) => h.latitude))],
  [Math.max(...hubs.map((h) => h.longitude)), Math.max(...hubs.map((h) => h.latitude))],
];

function FitAndClean() {
  const { map, isLoaded } = useMap();
  const hasFit = useRef(false);

  useEffect(() => {
    if (!isLoaded || hasFit.current) return;
    hasFit.current = true;
    map?.fitBounds(hubBounds, { padding: 44, duration: 0 });
    for (const layer of map?.getStyle()?.layers ?? []) {
      if (layer.type === "symbol") map?.setLayoutProperty(layer.id, "visibility", "none");
    }
  }, [map, isLoaded]);

  return null;
}

export function ServiceAreaMap() {
  return (
    <div className="florida-map-frame">
      <div className="florida-map">
        <Map theme="dark" interactive={false} center={[-81.86, 26.46]} zoom={8.6}>
          <FitAndClean />
          {hubs.map((hub) => (
            <MapMarker key={hub.id} longitude={hub.longitude} latitude={hub.latitude}>
              <MarkerContent>
                {hub.hq && (
                  <>
                    <span className="reach-wave" />
                    <span className="reach-wave" />
                    <span className="reach-wave" />
                  </>
                )}
                <span className={hub.hq ? "map-pin map-pin-hq" : "map-pin"} />
                {hub.label && (
                  <MarkerLabel position={hub.hq ? "bottom" : "top"} className="map-pin-label">
                    {hub.name}
                  </MarkerLabel>
                )}
              </MarkerContent>
            </MapMarker>
          ))}
        </Map>
      </div>
      <strong className="florida-map-watermark" aria-hidden="true">SWFL</strong>
    </div>
  );
}
