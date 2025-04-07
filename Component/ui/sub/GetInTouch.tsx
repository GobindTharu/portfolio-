"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";
import { MdEmail, MdPerson, MdPhone } from "react-icons/md";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  contact: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contact: yup
    .string()
    .matches(/^[0-9]+$/, "Only numbers allowed")
    .min(10, "Must be at least 10 digits")
    .required("Contact number is required"),
});

const GetInTouch: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data: ", data);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 bg-opacity-0 z-20 text-white">
      <h1 className="text-3xl font-semibold text-center mb-6">Get in Touch</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-10 p-3 bg-gray-700 rounded-lg shadow-lg">
        {/* Google Map */}
        <div className="w-full lg:w-1/2 h-96 lg:h-[500px] rounded-lg overflow-hidden p-0">
          <Image
            className="w-full h-full p-0 object-cover"
            src={"/GetInTouch.avif"}
            alt={"Collaborate"}
            width={400}
            height={400}
          />
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-1/2 flex flex-col gap-4 p-6"
        >
          <div className="flex items-center gap-2">
            <MdPerson className="text-xl text-gray-400" />
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </div>

          <div className="flex items-center gap-2">
            <MdEmail className="text-xl text-gray-400" />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </div>

          <div className="flex items-center gap-2">
            <MdPhone className="text-xl text-gray-400" />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              {...register("contact")}
              error={!!errors.contact}
              helperText={errors.contact?.message}
            />
          </div>

          <Button type="submit" variant="contained" color="primary" className="mt-4">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
