"use client"; // This line marks the component as a Client Component

import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'; // Import icons from react-icons

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear error on input change
    };

    const validate = () => {
        let formIsValid = true;
        let newErrors = { name: '', email: '', phone: '', location: '', message: '' };

        if (!formData.name) {
            formIsValid = false;
            newErrors.name = 'Name is required.';
        }
        if (!formData.email) {
            formIsValid = false;
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formIsValid = false;
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.phone) {
            formIsValid = false;
            newErrors.phone = 'Phone number is required.';
        }
        if (!formData.location) {
            formIsValid = false;
            newErrors.location = 'Location is required.';
        }
        if (!formData.message) {
            formIsValid = false;
            newErrors.message = 'Message is required.';
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // Handle form submission (e.g., API call)
            console.log('Form submitted:', formData);
            setSuccessMessage('Thank you for contacting us! We will get back to you soon.');
            setFormData({ name: '', email: '', phone: '', location: '', message: '' }); // Reset form
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">Contact Us</h1>
            <p className="text-center text-gray-600 mb-4">We'd love to hear from you! Please fill out the form below.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 flex items-center border border-gray-300 rounded-md p-2">
                    <FaUser className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`flex-1 p-2 outline-none ${errors.name ? 'border-red-500' : 'border-transparent'} rounded-md`}
                        placeholder="Your Name"
                    />
                </div>
                {errors.name && <p className="text-red-500 text-xs italic mb-2">{errors.name}</p>}

                <div className="mb-4 flex items-center border border-gray-300 rounded-md p-2">
                    <FaEnvelope className="text-gray-400 mr-2" />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`flex-1 p-2 outline-none ${errors.email ? 'border-red-500' : 'border-transparent'} rounded-md`}
                        placeholder="Your Email"
                    />
                </div>
                {errors.email && <p className="text-red-500 text-xs italic mb-2">{errors.email}</p>}

                <div className="mb-4 flex items-center border border-gray-300 rounded-md p-2">
                    <FaPhone className="text-gray-400 mr-2" />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`flex-1 p-2 outline-none ${errors.phone ? 'border-red-500' : 'border-transparent'} rounded-md`}
                        placeholder="Your Phone Number"
                    />
                </div>
                {errors.phone && <p className="text-red-500 text-xs italic mb-2">{errors.phone}</p>}

                <div className="mb-4 flex items-center border border-gray-300 rounded-md p-2">
                    <FaMapMarkerAlt className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`flex-1 p-2 outline-none ${errors.location ? 'border-red-500' : 'border-transparent'} rounded-md`}
                        placeholder="Your Location"
                    />
                </div>
                {errors.location && <p className="text-red-500 text-xs italic mb-2">{errors.location}</p>}

                <div className="mb-4 flex items-center border border-gray-300 rounded-md p-2">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`flex-1 p-2 outline-none ${errors.message ? 'border-red-500' : 'border-transparent'} rounded-md`}
                        placeholder="Your Message"
                        rows={4}
                    />
                </div>
                {errors.message && <p className="text-red-500 text-xs italic mb-2">{errors.message}</p>}

                <button
                    type="submit"
                    className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300 transition duration-300 ease-in-out"
                >
                    <FaPaperPlane className="mr-2" />
                    Send Message
                </button>
            </form>
            {successMessage && <p className="text-green-600 text-center mt-4">{successMessage}</p>}
        </div>
    );
};

export default ContactPage;
