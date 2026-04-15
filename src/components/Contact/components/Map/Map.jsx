'use client';

import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useMemo, useEffect, useState } from 'react';

const MAP_COORDINATES = {
	lat: 38.544926478518526,
	lng: -0.13556155364269512,
};
const MAP_LIBRARIES = ['marker'];

const ContactMap = () => {
	const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
		libraries: MAP_LIBRARIES,
		mapIds: mapId ? [mapId] : undefined,
	});
	const center = useMemo(() => MAP_COORDINATES, []);
	const mapOptions = useMemo(() => (mapId ? { mapId } : undefined), [mapId]);
	const [map, setMap] = useState();

	useEffect(() => {
		if (!isLoaded || !map || !google.maps.marker) return undefined;

		const pin = new google.maps.marker.PinElement({
			background: '#FBBC04',
			borderColor: '#FBBC04',
			glyphColor: '#000000',
		});

		const marker = new google.maps.marker.AdvancedMarkerElement({
			position: center,
			map,
			title: 'Calle de la Madalena 44, Benidorm',
			content: pin,
		});

		map.panTo(center);

		return () => {
			marker.map = null;
		};
	}, [center, isLoaded, map]);

	if (!isLoaded) return <div>Loading...</div>;

	return (
		<>
			<GoogleMap
				zoom={17}
				center={center}
				mapContainerClassName='contact-map'
				options={mapOptions}
				onLoad={setMap}
			/>
		</>
	);
};
export default ContactMap;
