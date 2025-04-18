import { createContext, useContext, useState } from "react";
import {
  createHotelRequest,
  deleteHotelRequest,
  getHotelRequest,
  getHotelsRequest,
  updateHotelRequest,
} from "@/api/hotel";
const HotelTask = createContext();
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const useHotel = () => {
  const context = useContext(HotelTask);

  if (!context) {
    throw new Error("useHotel must be used within a HotelProvider");
  }

  return context;
};

export function HotelProvider({ children }) {
  const [hotels, setHotels] = useState([]);

  const createHotel = async (hotel) => {
    try {
      const res = await createHotelRequest(hotel);
      console.log(res);
      toast.success(res.data.message || "Registro exitoso", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setHotels((prevHotels) => [...prevHotels, res.data]);
    } catch (error) {
      console.log("Error al crear el hotel:", error);
    }
  };

  const getHotels = async () => {
    try {
      const res = await getHotelsRequest();
      setHotels(res.data.data);
    } catch (err) {
      console.log("Error ", err);
    }
  };

  const deleteHotel = async (id) => {
    try {
      const res = await deleteHotelRequest(id);
      toast.success(res.data.message || "Eliminado exitosamente", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      if (res.status === 200)
        setHotels(hotels.filter((hotel) => hotel._id !== id));
    } catch (error) {
      console.log("Error al eliminar el hotel:", error);
    }
  };

  const getHotel = async (id) => {
    try {
      const res = await getHotelRequest(id);
      setHotels(res.data.data);
    } catch (err) {
      console.log("Error ", err);
    }
  };

  const updateHotel = async (hotel) => {
    try {
      const res = await updateHotelRequest(hotel);

      toast.success(res.data.message || "Actualizado exitosamente", {
        position: "top-right",
        autoClose: 3000,
      });

      if (res.status === 200)
        setHotels(hotels.map((h) => (h._id === hotel._id ? hotel : h)));
    } catch (error) {
      console.log("Error al actualizar el hotel:", error);
    }
  };

  return (
    <HotelTask.Provider
      value={{
        hotels,
        createHotel,
        getHotels,
        deleteHotel,
        getHotel,
        updateHotel,
      }}
    >
      {children}
    </HotelTask.Provider>
  );
}
