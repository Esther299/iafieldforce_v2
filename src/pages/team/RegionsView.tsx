import { useState, useEffect } from "react";
import { Badge, Card } from "../../components/ui";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { regions } from "../../data";

const mapCenter: LatLngExpression = [20, 0];

export function RegionsView() {
  const [selectedRegion, setSelectedRegion] = useState("América del Norte");
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson",
    )
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("Error cargando mapa GeoJSON:", err));
  }, []);

  const getRegionForCountry = (countryName: string) => {
    for (const [regName, config] of Object.entries(regions)) {
      if (config.countries.includes(countryName)) {
        return regName;
      }
    }
    return null;
  };

  const activeRegionData = regions[selectedRegion];

  const countryStyle = (feature: any) => {
    const countryName = feature.properties.ADMIN || feature.properties.name;
    const regionName = getRegionForCountry(countryName);

    const isSelected = regionName === selectedRegion;
    const isHovered = regionName === hoveredRegion;

    if (!regionName) {
      return {
        fillColor: "#e2e8f0",
        weight: 0.5,
        color: "#cbd5e1",
        fillOpacity: 0.3,
      };
    }

    const regColor = regions[regionName].color;

    return {
      fillColor: regColor,
      weight: isSelected ? 2 : 1,
      color: "#ffffff",
      fillOpacity: isSelected ? 0.8 : isHovered ? 0.65 : 0.35,
    };
  };

  const onEachCountry = (feature: any, layer: any) => {
    const countryName = feature.properties.ADMIN || feature.properties.name;
    const regionName = getRegionForCountry(countryName);

    if (regionName) {
      layer.on({
        mouseover: () => setHoveredRegion(regionName),
        mouseout: () => setHoveredRegion(null),
        click: () => setSelectedRegion(regionName),
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-slate-200/80 bg-gradient-to-br from-white via-brand-50/20 to-slate-50 p-6 rounded-2xl shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Estructura Regional Global
            </p>
            <h2 className="mt-1 text-xl font-black text-slate-900">
              Continentes y Subcontinentes
            </h2>
          </div>
          <Badge tone="brand">
            {Object.keys(regions).length} subregiones mundiales
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 items-start">
          <div className="grid gap-3 lg:col-span-5 sm:grid-cols-1 max-h-[420px] overflow-y-auto pr-1">
            {Object.values(regions).map((region) => (
              <button
                key={region.name}
                type="button"
                onClick={() => setSelectedRegion(region.name)}
                onMouseEnter={() => setHoveredRegion(region.name)}
                onMouseLeave={() => setHoveredRegion(null)}
                className={`rounded-2xl border p-4 text-left transition shadow-sm ${
                  selectedRegion === region.name
                    ? "border-brand-300 bg-brand-50 shadow-md ring-2 ring-brand-600/25"
                    : "border-slate-200 bg-white hover:border-brand-200 hover:bg-brand-50/30"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-base font-black text-slate-900">
                    {region.name}
                  </p>
                  <Badge
                    tone={
                      selectedRegion === region.name ? "success" : "neutral"
                    }
                  >
                    {region.reps} reps
                  </Badge>
                </div>
                <p className="mt-1 text-xs text-slate-600">{region.coverage}</p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="w-full flex justify-between items-center mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Vista Geográfica Real por Zonas
              </span>
              <Badge tone="brand">
                {hoveredRegion
                  ? `Vista: ${hoveredRegion}`
                  : `Activo: ${selectedRegion}`}
              </Badge>
            </div>

            <div className="w-full h-[420px] flex items-center justify-center overflow-hidden rounded-xl border border-slate-200 shadow-inner bg-slate-50">
              <MapContainer
                center={mapCenter}
                zoom={2}
                minZoom={1}
                maxZoom={6}
                scrollWheelZoom={true}
                style={{ width: "100%", height: "100%", background: "#f8fafc" }}
                attributionControl={false}
                zoomControl={true}
              >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />

                {geoData && (
                  <GeoJSON
                    key={selectedRegion + (hoveredRegion || "")}
                    data={geoData}
                    style={countryStyle}
                    onEachFeature={onEachCountry}
                  />
                )}
              </MapContainer>
            </div>

            <p className="mt-3 text-center text-xs text-slate-600 font-medium">
              Subregión seleccionada:{" "}
              <span className="text-brand-600 font-bold">{selectedRegion}</span>{" "}
              ({activeRegionData?.coverage})
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
