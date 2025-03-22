"use client";

import { useState } from "react";
import ReactMapboxGl, { ZoomControl } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import maplibregl from "maplibre-gl";
import { title } from "@/components/primitives";
import Loading from "@/components/loading";

const MapComponent = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "",
});

interface PopUpInfo {
  // Add your popup info type here
  id: string;
  // Add other fields as needed
}

export default function MapPage() {
  const [isLoading, setIsLoading] = useState(true);

  return <Loading />;
}
