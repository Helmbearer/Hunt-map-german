import * as L from 'leaflet';
import { Marker } from 'react-leaflet';
import { useTranslation } from 'react-i18next';

import type { LatLngTuple } from 'leaflet';
import type { TypeFeature } from '../markerBase/types';

import './style.css';

type Props = { feature: TypeFeature };

export const MarkerLabel = ({ feature }: Props) => {
  const { language } = useTranslation().i18n;
  const { geometry, properties } = feature;
  const { coordinates } = geometry;
  const { title, marker } = properties;
  const name: Record<string, string> = properties.name as Record<string, string>;
  const formatLabel = name[language];

  const icon = L.divIcon({
    className: `marker-${title} `,
    html: `<div class="marker-label_text marker-${marker}">${formatLabel}</div>`,
  });

  return <Marker position={coordinates as LatLngTuple} icon={icon}></Marker>;
};
