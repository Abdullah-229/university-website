import React from "react";

export default function ContactPage() {
    return (
        <main className="max-w-xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="mb-8 text-gray-700">
                Have questions or need more information? Reach out to us using the form below.
            </p>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block font-medium mb-1">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        required
                        className="w-full border rounded px-3 py-2"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-medium mb-1">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        className="w-full border rounded px-3 py-2"
                        placeholder="your@email.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        required
                        className="w-full border rounded px-3 py-2"
                        rows={5}
                        placeholder="Type your message here..."
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                    Send Message
                </button>
            </form>
            <div className="mt-10 text-gray-600">
                <p>
                    <strong>Address:</strong> 123 University Ave, City, Country
                </p>
                <p>
                    <strong>Email:</strong> info@university.edu
                </p>
                <p>
                    <strong>Phone:</strong> +1 (234) 567-8900
                </p>
            </div>
        </main>
    );
}