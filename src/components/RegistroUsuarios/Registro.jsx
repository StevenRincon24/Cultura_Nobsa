import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";

function RegisterPage() {
  const { register, handleSubmit, reset } = useForm();
  const { signUp, errors: ErrorRegistro } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    const success = await signUp(data);
    if (!success) {
      reset();
    }
  });

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
        
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
          <div className="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
          <div className="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
            <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
              Crear cuenta
            </label>
            {ErrorRegistro?.map((error, i) => (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
                key={i}
              >
                <span className="block sm:inline">{error}</span>
              </div>
            ))}
            <form className="mt-10" onSubmit={onSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  {...register("username", { required: true })}
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  placeholder="Contraseña"
                  {...register("password", { required: true })}
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7 flex">
                <label className="inline-flex items-center w-full cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Acepto los términos y condiciones
                  </span>
                </label>
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  Crear cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisterPage;
