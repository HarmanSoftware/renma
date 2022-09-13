import React from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "../Assets/DarkMode.css";
import { useFormik } from "formik";
import * as Yup from "yup";

import Email from "../Assets/Images/Emails.png";
import Call from "../Assets/Images/Call.png";
import ContactUs from "../Assets/Images/BookAppointment.png";
import Mail from "../Assets/Images/Send.png";

export default function BookAppointment() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("Full name required")
        .max(30, "Fullname must be 30 characters or less")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required("A phone number is required"),
      message: Yup.string()
        .required("Messege is required")
        .max(10, "Messege must be 150 or less chars"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <div className="flex items-center content-center bg-mauve font-medium text-3xl px-2 w-ful h-12 text-black">
        Book Appointment
      </div>
      <div className="text-center">
        <img src={ContactUs} className="p-3" alt="Contact us img" />
      </div>
      <div className="container mx-auto grid lg:grid-cols-1 sm:w-auto sm:grid-cols-1 p-8">
        <div className="bg-soft-purple my-4 w-full" id="contact-us">
          <form className="p-4">
            <div className="text-center font-medium text-4xl text-white py-3">
              Contact Us
            </div>
            <div className="text-center font-medium text-2xl text-white py-3">
              {" "}
              <span className="text-red-500">*</span> Indicates Required Fields
            </div>
            <div class="relative z-0 mb-6 w-full group py-1">
              <input
                type="text"
                name="name"
                id="name"
                {...formik.getFieldProps("fullName")}
                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-mauve dark:focus:border-lightpurple focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required=""
              />
              <label
                for="name"
                className="peer-focus:font-medium absolute text-xl text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <span className="text-red-500 font-medium text-xl">*</span> Full
                name
              </label>
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-white py-2 text-center">
                  {formik.errors.fullName}
                </div>
              ) : null}
            </div>
            <div class="relative z-0 mb-6 w-full group py-1">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                {...formik.getFieldProps("email")}
                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-mauve dark:focus:border-lightpurple focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required=""
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-lg text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <span className="text-red-500 font-medium text-xl">*</span>{" "}
                Email address
              </label>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-white py-2 text-center">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div class="relative z-0 mb-6 w-full group py-1">
              <input
                type="tel"
                name="phone_number"
                id="phone_number"
                {...formik.getFieldProps("phoneNumber")}
                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-mauve dark:focus:border-lightpurple focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
              />
              <label
                for="phone_number"
                className="peer-focus:font-medium absolute text-lg text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (Optional)
              </label>
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-white py-2 text-center">
                  {formik.errors.phoneNumber}
                </div>
              ) : null}
            </div>
            <div class="relative z-0 mb-6 w-full group py-1">
              <textarea
                type="text"
                name="text-area"
                id="text-area"
                {...formik.getFieldProps("message")}
                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-mauve dark:focus:border-lightpurple focus:outline-none focus:ring-0 focus:border-white peer rows=2 cols=50"
                placeholder=" "
                required=""
              />
              <label
                for="text_area"
                className="peer-focus:font-medium absolute text-lg text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <span className="text-red-500 font-medium text-xl">*</span>{" "}
                Message
              </label>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-white py-2 text-center">
                  {formik.errors.message}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              id="send-btn"
              className="flex items-center content-center mx-auto bg-bmauve hover:bg-lightmauve focus:ring-4 focus:outline-none focus:ring-mauve font-medium rounded-lg text-lg lg:w-26 lg:h-14 md:w-32 md:h-12 sm:w-18 sm:h-12 px-4 py-2 text-center dark:bg-mauve dark:hover:bg-lightpurple dark:focus:ring-mauve"
            >
              <img src={Mail} className="w-8 h-8 mx-1" alt="Heart icon img" />
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
