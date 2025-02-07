



const Contact = () => {
    return (
        <div className="h-screen">
            <div className="flex justify-center">
                <span className=" mt-10 text-2xl font-semibold border-purple-950/85 border-t-2 border-b-2 p-1.5 px-20 rounded-lg shadow-2xl shadow-amber-200">
                    Connect <span className="text-blue-500">With Me</span><span className="text-3xl">😊</span></span>
            </div>
            <div>
                <div className="my-20">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto my-10">
                        {/* Email Section */}
                        <div className="card bg-white shadow-lg rounded-xl p-6 hover:shadow-xl">
                            <h3 className="text-lg font-semibold text-gray-800">📧 Email Address</h3>
                            <p className="text-gray-600">moinchy7@gmail.com</p>
                            <button
                                onClick={() => window.location.href = 'http://mail.google.com/mail/?view=cm&to=moinchy7@gmail.com'}
                                className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                                Send Email
                            </button>
                        </div>

                        {/* Phone Section */}
                        <div className="card bg-white shadow-lg rounded-xl p-6 hover:shadow-xl">
                            <h3 className="text-lg font-semibold text-gray-800">📱 Phone Number</h3>
                            <p className="text-gray-600">+8801840060700</p>
                        </div>

                        {/* WhatsApp Section */}
                        <div className="card bg-white shadow-lg rounded-xl p-6 hover:shadow-xl">
                            <h3 className="text-lg font-semibold text-gray-800">📲 WhatsApp Number</h3>
                            <p className="text-gray-600 mb-5">+8801840060700</p>
                            {/* WhatsApp Button */}
                            <span className="my-20"><a
                                href="http://api.whatsapp.com/send?phone=8801840060700"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300"
                            >
                                Connect with whatsapp
                            </a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
