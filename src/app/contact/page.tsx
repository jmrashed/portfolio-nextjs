"use client"; // This line marks the component as a Client Component

import React, { useState } from 'react';

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
            setFormData({ name: '', email: '', phone: '', location: '', message: '' }); // Reset form
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''
                            }`}
                        placeholder="Your Name"
                    />
                    {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''
                            }`}
                        placeholder="Your Email"
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phone ? 'border-red-500' : ''
                            }`}
                        placeholder="Your Phone Number"
                    />
                    {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="location">
                        Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.location ? 'border-red-500' : ''
                            }`}
                        placeholder="Your Location"
                    />
                    {errors.location && <p className="text-red-500 text-xs italic">{errors.location}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''
                            }`}
                        placeholder="Your Message"
                        rows={4}
                    />
                    {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactPage;
