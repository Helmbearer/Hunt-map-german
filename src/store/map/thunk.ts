import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMaps = createAsyncThunk('map/fetchMaps', async () => {
  const response = await fetch('../public/maps/maps.json');
  const jsonData = await response.json();
  return jsonData;
});
