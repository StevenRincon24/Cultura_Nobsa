import axios from "./axios";

export const getHotelsRequest = () => axios.get(`/hotels`);

export const getHotelRequest = (id) => axios.get(`/hotels/${id}`);

export const createHotelRequest = (hotel) => axios.post(`/hotels`, hotel);

export const updateHotelRequest = (id, formData) =>
  axios.put(`/hotels/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteHotelRequest = (id) => axios.delete(`/hotels/${id}`);
