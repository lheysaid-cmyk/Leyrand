// import React from "react";

import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import HerosectionComponent from "@/components/shared/HerosectionComponent";

// Validation Schema
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  // lastName
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message should be at least 10 characters"),
});

function ContactUs() {
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Form Submit Handler
  const onSubmit = async (data: any) => {
    setLoading(true);
    setSuccessMessage("");

    try {
      const response = await axios.post("/contact", data);

      console.log(response);

      if (response.status === 200) {
        setSuccessMessage("Your message has been sent successfully!");
        reset(); // Clear form fields
      } else {
        setSuccessMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSuccessMessage(
        "Error submitting the form. Please check your connection."
      );
    }

    setLoading(false);
  };
  return (
    <>
      <Helmet>
        <title>Contact us | Leyrand</title>
        <meta name="description" content="Leyrand Contact us page" />
        <meta property="og:title" content="Contact us | Leyrand" />
      </Helmet>

      <HerosectionComponent
        title={"Get in Touch"}
        image="/contact.jpg"
        subtitle={
          "Have a question or want to work with us? We'd love to hear from you!"
        }
      />

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white rounded-lg p-8 flex flex-col justify-center border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Contact Details
          </h2>
          <p className="text-gray-600 mt-2">
            Reach out to us through the details below. We’re happy to help!
          </p>

          <div className="mt-6 space-y-6">
            <div className="flex items-center space-x-4 border-b pb-4">
              <Mail className="w-7 h-7 text-primary" />
              <div className="flex flex-col gap-2 items-start">
                <p className="text-gray-500 text-sm">Email</p>
                <p className="text-gray-800 font-medium">info@leyrand.org</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 border-b pb-4">
              <Phone className="w-7 h-7 text-primary" />
              <div className="flex flex-col gap-2 items-start">
                <p className="text-gray-500 text-sm">Phone</p>
                <p className="text-gray-800 font-medium">+255786701586</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-7 h-7 text-primary" />
              <div className="flex flex-col gap-2 items-start">
                <p className="text-gray-500 text-sm">Physical Address</p>
                <p className="text-gray-800 font-medium">
                  Posta ya zamani, Dar es salaam
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-50 p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Send us a message
          </h2>
          <p className="text-gray-600 mt-2">
            Fill in the form below and we will get back to you shortly.
          </p>

          {/* Success Message */}
          {successMessage && (
            <div className="mt-4 p-3 text-white bg-green-500 rounded-md">
              {successMessage}
            </div>
          )}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 items-start">
              <label className="block text-gray-700 font-medium">
                First Name
              </label>
              <Input type="text" {...register("firstName")} className="" />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label className="block text-gray-700 font-medium">
                Last Name
              </label>
              <Input type="text" {...register("lastName")} className="" />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label className="block text-gray-700 font-medium">
                Email Address
              </label>
              <Input type="email" {...register("email")} className="" />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label className="block text-gray-700 font-medium">Message</label>
              <Textarea
                {...register("message")}
                placeholder="Write your message..."
                rows={80}
              ></Textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>

      <div className="relative w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=dar+es+salaam&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default ContactUs;
