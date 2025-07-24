import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RequestCall = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      datetime: "2025-07-24T13:30",
      enquiry: "Online Courses (Website)",
    },
  });

  const onSubmit = (data) => {
    alert("Form Submitted:\n" + JSON.stringify(data, null, 2));
    navigate(-1);
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center backdrop-blur-sm font-mono px-4">
      <div className="w-full max-w-md bg-[#1e1e1e] text-white p-6 md:p-8 rounded-lg shadow-xl relative animate-fade-in-up">
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 w-9 h-9 rounded-full bg-gray-700 hover:bg-blue-400 text-white flex items-center justify-center transition"
        >
          ×
        </button>

        <div className="my-6 md:my-8">
          <h2 className="text-2xl font-semibold text-center mb-1">
            Request a callback
          </h2>
          <p className="text-sm text-center mb-4">
            Fill the form below to request a callback from our team.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            className="w-full p-2 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          {errors.name && (
            <p className="text-red-400 text-sm">Name is required</p>
          )}

          <input
            type="tel"
            placeholder="📞 +91 Phone"
            {...register("phone", {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
            className="w-full p-2 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          {errors.phone && (
            <p className="text-red-400 text-sm">
              Valid phone number is required
            </p>
          )}

          <input
            type="datetime-local"
            name="datetime"
            {...register("datetime")}
            className="w-full p-2 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <select
            {...register("enquiry")}
            className="w-full p-2 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option>Online Courses (Website)</option>
            <option>Offline Courses</option>
          </select>

          <button
            type="submit"
            className="w-full py-2 bg-teal-400 text-black font-semibold rounded-md hover:bg-teal-500 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestCall;
