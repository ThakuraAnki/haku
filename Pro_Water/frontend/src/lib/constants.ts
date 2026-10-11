export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000')
).replace(/\/$/, '');

export const MAP_DEFAULTS = {
  center: { longitude: 77.1025, latitude: 28.7041 }, // Centered around Delhi NCR
  zoom: 8.8,
};

export const COLOR_SCALES = {
  Low: '#22c55e',       // green-500
  Moderate: '#eab308',  // yellow-500
  High: '#f97316',      // orange-500
  'Very High': '#ef4444', // red-500
};
