import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHotel } from "@/context/HotelContext";

export default function AgregarHotel({ onClose, hotelData }) {
  const isEditing = !!hotelData;

  const { createHotel, updateHotel, getHotels } = useHotel();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (hotelData) {
      Object.keys(hotelData).forEach((key) => {
        setValue(key, hotelData[key]);
      });
    }
  }, [hotelData, setValue]);

  const onSubmit = async (data) => {
    try {
      if (isEditing) {
        await updateHotel({ ...hotelData, ...data });
      } else {
        await createHotel(data);
      }
      getHotels();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg text-black w-96 max-w-full">
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Editar Hotel" : "Agregar Nuevo Hotel"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: "El nombre es obligatorio" })}
            placeholder="Nombre"
            className="w-full mb-2 p-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <textarea
            {...register("description", {
              required: "La descripción es obligatoria",
            })}
            placeholder="Descripción"
            className="w-full mb-2 p-2 border rounded resize-none h-24"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}

          <input
            {...register("location", {
              required: "La ubicación es obligatoria",
            })}
            placeholder="Ubicación"
            className="w-full mb-2 p-2 border rounded"
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}

          <input
            {...register("website", {
              required: "El sitio web es obligatorio",
            })}
            placeholder="Sitio Web"
            className="w-full mb-2 p-2 border rounded"
          />
          {errors.website && (
            <p className="text-red-500 text-sm">{errors.website.message}</p>
          )}

          <input
            {...register("contact", {
              required: "El contacto es obligatorio",
              pattern: {
                value: /^[0-9]+$/,
                message: "El contacto debe contener solo números",
              },
            })}
            placeholder="Contacto"
            type="number"
            min={0}
            className="w-full mb-2 p-2 border rounded"
          />
          {errors.contact && (
            <p className="text-red-500 text-sm">{errors.contact.message}</p>
          )}
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Guardar
              </button>
            </div>
          
        </form>
      </div>
    </div>
  );
}
