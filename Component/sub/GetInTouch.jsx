"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, IconButton } from "@mui/material";
import {
  MdEmail,
  MdPerson,
  MdPhone,
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contact: yup
    .string()
    .matches(/^[0-9]+$/, "Only numbers allowed")
    .min(10, "Must be at least 10 digits")
    .required("Contact number is required"),
});

const GetInTouch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center w-full min-h-screen p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="w-full max-w-6xl flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-center">Get in Touch</h1>
        <IconButton onClick={toggleDarkMode} color="inherit">
          {darkMode ? (
            <MdLightMode className="text-yellow-400" />
          ) : (
            <MdDarkMode className="text-gray-700" />
          )}
        </IconButton>
      </div>
      <div
        className={`flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-10 p-6 rounded-lg shadow-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Google Map */}
        <div className="w-full lg:w-1/2 h-96 lg:h-[500px] rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.264728034817!2d83.46616727554962!3d27.68180597614348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996f92a0e3fd3cd%3A0x8f22e96f7a73947b!2sImilya%2C%20Lumbini%2032800%2C%20Nepal!5e0!3m2!1sen!2snp!4v1710262877654!5m2!1sen!2snp&zoom=15&scrollwheel=true"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-1/2 flex flex-col gap-4"
        >
          <div className="flex items-center gap-2">
            <MdPerson className="text-xl text-gray-400" />
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              className={
                darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
              }
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
              className={
                darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
              }
            />
          </div>

          <div className="flex items-center gap-2">
            <MdPhone className="text-xl text-gray-400" />
            <TextField
              label="Contact Number"
              variant="outlined"
              fullWidth
              {...register("contact")}
              error={!!errors.contact}
              helperText={errors.contact?.message}
              className={
                darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
              }
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mt-4"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
