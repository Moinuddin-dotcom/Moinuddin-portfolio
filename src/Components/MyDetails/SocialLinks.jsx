// import React from 'react'

const SocialLinks = () => {
    return (
        <div>
            <div className="flex justify-center space-x-6 mt-8">
                <a
                    href="https://github.com/Moinuddin-dotcom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 hover:w-14 h-12 hover:h-14 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all"
                >
                    <i className="fab fa-github text-xl"></i>
                </a>

                <a
                    href="https://www.linkedin.com/in/md-moinuddin-chowdhury-67098123b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 hover:w-14 hover:h-14 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all"
                >
                    <i className="fab fa-linkedin text-xl"></i>
                </a>

                <a
                    href="http://api.whatsapp.com/send?phone=8801840060700"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 hover:w-14 hover:h-14 bg-green-500 text-white rounded-full hover:bg-green-400 transition-all"
                >
                    <i className="fab fa-whatsapp text-xl"></i>
                </a>

                <a
                    href="https://www.facebook.com/share/18d2JbxqFN/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 hover:w-14 hover:h-14 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition-all"
                >
                    <i className="fab fa-facebook text-xl"></i>
                </a>
            </div>
        </div>
    )
}

export default SocialLinks
