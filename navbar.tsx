import Link from "next/link"

export default function Navbar(){
    return (
        <div>
            <header className="text-grey-600 body-font">

            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                <a className="flex titlefont fontmedium items-center text-grey-900 mb-4 md:mb-0">

                <img src="https://seeklogo.com/images/M/m-design-logo-09A5D82F03-seeklogo.com.png" alt=" Hafiz Wildan Ahmed Siddiqui" title="Hafiz Siddiqui" className="w-10 h-10 rounded-full"/>

                <span className="ml-3 text-xl">Hafiz Siddiqui</span>

                </a>

                <nav className=" md:mr-auto md:ml-4 md:py-1 md:pl-4 md-border-1 md:border-grey-400 flex flex-wrap items-center text-base justify-center">

                <Link className="ml-2 mr-5 hover:text-blue-900" href="http://localhost:3000/">Home</Link>
      <Link className="mr-5 hover:text-blue-900" href="http://localhost:3000/about">About Us</Link>
      <Link className="mr-5 hover:text-blue-900" href="http://localhost:3000/contact">Contact Us</Link>
      <Link className="mr-5 hover:text-blue-900" href="http://localhost:3000/privacypolicy">Privacy Policy</Link>

                </nav>

                {/*Buttons */}
                <div className="flex space-x-4 mt-4 md:mt-0">

                    <button className="inline-flex items-center bg-yellow-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base">Login</button>

                    <button className="inline-flex items-center bg-orange-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base">SignUp</button>

                    </div>
            </div>
            </header>
        </div>
    )
}