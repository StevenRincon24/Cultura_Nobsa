import React, { useEffect, useState } from "react";
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

  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (hotelData) {
      Object.keys(hotelData).forEach((key) => {
        setValue(key, hotelData[key]);
      });

      if (hotelData.image?.url) {
        setPreviewImage(hotelData.image.url);
      }
    }
  }, [hotelData, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      if (key === "image" && data[key][0]) {
        formData.append(key, data[key][0]); // archivo
      } else {
        formData.append(key, data[key]);
      }
    }

    if (isEditing) {
      await updateHotel(hotelData._id, formData);
    } else {
      await createHotel(formData);
    }

    getHotels();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg text-black w-96 max-w-full max-h-[90vh] overflow-y-auto">
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

          <input
            type="file"
            accept="image/*"
            {...register("image")}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setPreviewImage(URL.createObjectURL(file));
              }
            }}
            className="w-full mb-2 p-2 border rounded"
          />

          {previewImage && (
            <img
              src={previewImage}
              alt="Vista previa"
              className="w-full h-48 object-cover rounded mb-2"
            />
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
