import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaHeart, FaUser, FaEnvelope, FaComment, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { colors } from '../colors';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name is too short')
        .max(50, 'Name is too long')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    message: Yup.string()
        .min(10, 'Message is too short')
        .required('Message is required'),
    });

    const ContactUs = () => {
    const [formStatus, setFormStatus] = useState({ message: '', isError: false });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const emailSubject = `New Contact Form Submission from ${values.name}`;
        const emailBody = `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`;
        const mailtoLink = `mailto:harshil.arora205@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;

        setTimeout(() => {
        resetForm();
        setFormStatus({
            message: 'Thank you for your message! Your email client should open shortly.',
            isError: false,
        });
        setSubmitting(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div
            className="p-6 text-center"
            style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.primaryDark})` }}
            >
            <div className="flex justify-center mb-2">
                <FaHeart className="text-white text-4xl" />
            </div>
            <h1 className="text-2xl font-bold text-white">Contact Us</h1>
            <p className="text-white mt-2">We'd love to hear from you!</p>
            </div>

            {/* Form */}
            <div className="p-6">
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={ContactSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-4">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 flex items-center" style={{ color: colors.deepNavy }}>
                        <FaUser className="mr-2" style={{ color: colors.primary }} />
                        Your Name
                    </label>
                    <Field
                        type="text"
                        name="name"
                        className={`w-full p-2 border ${
                        errors.name && touched.name ? 'border-red-500' : ''
                        } rounded-lg focus:ring-2 outline-none transition`}
                        style={{
                        borderColor: errors.name && touched.name ? '#f87171' : colors.primaryLight,
                        focusBorderColor: colors.primary,
                        }}
                        placeholder="Enter your name"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
                    </div>

                    <div>
                    <label htmlFor='email' className="block text-sm font-medium mb-1 flex items-center" style={{ color: colors.deepNavy }}>
                        <FaEnvelope className="text-primary mr-2" style={{ color: colors.primary }} />
                        Email Address
                    </label>
                    <Field
                        type="email"
                        name="email"
                        className={`w-full p-2 border ${
                        errors.email && touched.email ? 'border-red-500' : ''
                        } rounded-lg focus:ring-2 outline-none transition`}
                        style={{
                        borderColor: errors.email && touched.email ? '#f87171' : colors.primaryLight,
                        }}
                        placeholder="Enter your email"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                    </div>

                    <div>
                    <label htmlFor='message' className="block text-sm font-medium mb-1 flex items-center" style={{ color: colors.deepNavy }}>
                        <FaComment className="text-primary mr-2" style={{ color: colors.primary }} />
                        Your Message
                    </label>
                    <Field
                        as="textarea"
                        name="message"
                        rows="4"
                        className={`w-full p-2 border ${
                        errors.message && touched.message ? 'border-red-500' : ''
                        } rounded-lg focus:ring-2 outline-none transition resize-none`}
                        style={{
                        borderColor: errors.message && touched.message ? '#f87171' : colors.primaryLight,
                        }}
                        placeholder="What would you like to tell us?"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 text-xs mt-1" />
                    </div>

                    {formStatus.message && (
                    <div
                        className={`p-3 rounded-lg text-sm ${
                        formStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                        }`}
                    >
                        {formStatus.message}
                    </div>
                    )}

                    <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center transition-all duration-300 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                    }`}
                    style={{
                        background: `linear-gradient(to right, ${colors.primary}, ${colors.primaryDark})`,
                        color: 'white',
                    }}
                    >
                    {isSubmitting ? (
                        <>
                        <FaSpinner className="animate-spin mr-2" />
                        Sending...
                        </>
                    ) : (
                        <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                        </>
                    )}
                    </button>
                </Form>
                )}
            </Formik>

            <div className="mt-6 text-center">
                <p className="text-sm" style={{ color: colors.deepNavy }}>Or reach me directly at:</p>
                <p
                className="text-sm font-medium mt-1 cursor-pointer inline-flex items-center group"
                onClick={() => {
                    window.location.href = 'mailto:harshil.arora205@gmail.com';
                }}
                style={{ color: colors.primary }}
                >
                <span className="relative">
                    harshil.arora205@gmail.com
                    <span
                    className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                    style={{
                        backgroundColor: colors.accent,
                        width: '0',
                    }}
                    ></span>
                </span>
                <FaHeart
                    className="ml-2 text-xs opacity-0 transform translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                    style={{ color: colors.accent }}
                />
                </p>
            </div>

            <div className="flex justify-center mt-6 space-x-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.accent }}></div>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }}></div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ContactUs;
