import { useState } from "react";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormHire = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const apiUrl = import.meta.env.VITE_GOOGLE_SHEET_API;

  const onSubmit = async (data) => {
    setIsLoading(true);
    const formdata = new FormData();
    formdata.append("firstname", data.firstname);
    formdata.append("lastname", data.lastname);
    formdata.append("email", data.email);
    formdata.append("phone", data.phone);
    formdata.append("subject", data.subject);
    formdata.append("message", data.message);
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formdata,
      });
      if (response.redirected) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <div className=" flex justify-center items-center p-10 bg-primary">
      <div className="w-full max-w-lg">
        <h2 className="text-center text-white text-2xl mb-8">Apply Now</h2>
        <ToastContainer />
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
            <InputField
              text={"Name"}
              name={"firstname"}
              register={register}
              className="w-full p-4 bg-primary text-white rounded-lg focus:outline-none"
            />
            {errors.firstname && (
              <span className="text-white">This field is required</span>
            )}

            <InputField
              text={"Phone"}
              name={"phone"}
              register={register}
              className="w-full p-4 bg-primary text-white rounded-lg focus:outline-none"
            />
            {errors.phone && (
              <span className="text-white">This field is required</span>
            )}

            <InputField
              text={"Email*"}
              name={"email"}
              register={register}
              className="w-full p-4 bg-primary text-white rounded-lg focus:outline-none"
            />
            {errors.email && (
              <span className="text-white">This field is required</span>
            )}
            <InputField
              text={"Phone"}
              name={"phone"}
              register={register}
              className="w-full p-4 bg-primary text-white rounded-lg focus:outline-none"
            />
            {errors.phone && (
              <span className="text-white">This field is required</span>
            )}

            

            <textarea
              className="w-full h-48 bg-[#448168] border-2 text-white p-4 rounded-lg focus:outline-none"
              placeholder="Message"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-white">This field is required</span>
            )}

            <button
              type="submit"
              className={`w-full bg-[#448168] border-2 text-white p-4 rounded-lg focus:outline-none ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-800"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
