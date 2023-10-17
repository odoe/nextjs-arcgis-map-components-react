'use client';

import { ArcgisLegend, ArcgisMap } from '@arcgis/map-components-react';

export default function Mapping() {
  return (
    <ArcgisMap
      className="h-[500px] w-[800px]"
      itemId="f0a65cdcf362483fa268a30d62eed4a2"
      onViewReady={() => console.log('View Ready')}
    >
      <ArcgisLegend position="bottom-left" legendStyle="card" />
    </ArcgisMap>
  );
}
