import type { Metadata } from "next";
import Link from "next/dist/client/link";
import localFont from "next/font/local";
import "./globals.css"
import Image from 'next/image';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      {/* <nav>
      <ul className="flex items-center justify-evenly bg-black text-aliceblue list-none p-5 text-lg cursor-pointer">
        <li className="hover:text-gray-400 text-white hover:underline">
          <Link href="/">
            Home
          </Link>
        </li>
        <li className="hover:text-gray-400  text-white hover:underline">
          <Link href="/services">
            Services
          </Link>
        </li>
        <li className="hover:text-gray-400  text-white hover:underline">
          <Link href="/about">
            About
          </Link>
        </li>
        <li className="hover:text-gray-400 text-white hover:underline">
          <Link href="/contact">
            Contact us
          </Link>
        </li>
      </ul>
    </nav> */}
    <div>

      {/* Navigation */}
      <nav className="bg-purple-500 text-white p-4 flex justify-between items-center">
        <input type="checkbox" id="check" className="hidden" />
        <label htmlFor="check" className="text-xl cursor-pointer md:hidden">
          <i className="fa-solid fa-bars"></i>
        </label>
        <a href="/index.html" target="_blank" className="text-lg font-bold">
          <img src="/images/69.png" alt="Logo" className="h-10" />
        </a>
        <ul className="hidden md:flex gap-6">
          <li><a className="active" href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="/price.html">Package</a></li>
          <li><a href="/contact.html">Contact Us</a></li>
          <li><a href="/about.html">About</a></li>
        </ul>
      </nav>

      {/* Container */}
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold">Enhance <span>Your</span> BUSINESS & Brand Identity With Us..!</h1>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <div className="mt-6">
              <a href="/contact.html">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">CONTACT</button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            {/* Add any image or media */}
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="relative py-16 bg-gray-100">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/IMG_4392.JPG')` }}></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold">Welcome to Dysignoo..!</h1>
          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
            <div className="md:w-1/2">
              <img src="./images/IMG_4392.JPG" alt="Dysignoo Image" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold">Enhance Your Business & Brand Identity With Us...!</h1>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
        <div className="mt-8">
          <img src="D:\nextjs\src\app\images\69.png" alt="Business Image" className="w-full h-auto" />
        </div>
      </div>

      {/* Section 4 */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          <div className="flex justify-center mt-4">
            <img src="./images/5296500_fb_social media_facebook_facebook logo_social network_icon.png" alt="Facebook" className="w-10 h-10 mx-2" />
            <img src="./images/5296765_camera_instagram_instagram logo_icon.png" alt="Instagram" className="w-10 h-10 mx-2" />
            <img src="./images/5296520_bubble_chat_mobile_whatsapp_whatsapp logo_icon.png" alt="WhatsApp" className="w-10 h-10 mx-2" />
            <img src="./images/4202011_email_gmail_mail_logo_social_icon.png" alt="Gmail" className="w-10 h-10 mx-2" />
          </div>
        </div>
        <div className="text-center mt-8">
          <img src="./images/Dysignoo.png" alt="Dysignoo Logo" className="mx-auto w-32 h-32" />
        </div>
      </div>
    </div>
  


    {children}
        <h1>This will remain same throughtout the pages</h1>
      </body>
    </html>
  );
}
