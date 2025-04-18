import axios from "./axios";

export const getHotelsRequest = () => axios.get(`/hotels`);

export const getHotelRequest = (id) => axios.get(`/hotels/${id}`);

export const createHotelRequest = (hotel) => axios.post(`/hotels`, hotel);

export const updateHotelRequest = (hotel) =>
  axios.put(`/hotels/${hotel._id}`, hotel);

export const deleteHotelRequest = (id) => axios.delete(`/hotels/${id}`);
