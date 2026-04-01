import '@/styles/global.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Betty Award",
  description: "A story writing contest for children ages 8-12.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
            <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <meta httpEquiv="Keywords" name="Keywords" content="Betty Award, writing contest, children writing contest, writing contest kids, writing contest prize"/>
    <meta name="description" content="The Betty Award is a writing contest for children ages 8-12. Kids can enter their stories for a chance to win cash prizes."/>
    <meta name="classification" content="Writing Contest"/>
    <meta name="robots" content="ALL"></meta>

    
    <title>The Betty Award</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Serif&display=swap" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?version=3.52.1&features=fetch"></script>
    <script src="https://kit.fontawesome.com/a6313af583.js" crossOrigin="anonymous"></script>
      </head>

      <body className="bg-white flex flex-col h-screen justify-between">
    <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
                <div className="flex space-x-7">
                    <div>
                        {/* <!-- Website Logo --> */}
                        <a href="/" className="flex items-center py-4 px-2">
                            <img src="https://d30tirrb1lsi4u.cloudfront.net/public/logo.gif" alt="Logo" className="h-16  mr-2"/>
                        </a>
                    </div>
                </div>
                    {/* <!-- Primary Navbar items --> */}
                <div className="hidden md:flex items-center space-x-5">
                    <a className="text-lg text-blue-600 transition duration-500 border-b-2 border-transparent hover:border-blue-600 hover:border-b-2" href="/">Home</a>

                    <a className="text-lg text-blue-600 transition duration-500 border-b-2 border-transparent hover:border-blue-600 hover:border-b-2" href="/submission">Submit Story</a>

                    <a className="text-lg text-blue-600 transition duration-500 border-b-2 border-transparent hover:border-blue-600 hover:border-b-2" href="/past-winners">Past Winners</a>

                    <a className="text-lg text-blue-600 transition duration-500 border-b-2 border-transparent hover:border-blue-600 hover:border-b-2" href="/contact-us">Contact Us</a>

                    <a className="text-lg text-blue-600 transition duration-500 border-b-2 border-transparent hover:border-blue-600 hover:border-b-2" href="/about-us">About Us</a>
                    <div>
                        <a href="https://www.facebook.com/The-Betty-Award-108114242034321" target="_blank" className="text-blue-600 hover:border-blue-600 text-xl mr-2"><i aria-hidden="true" className="fa fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com/p/CiAMCugOtry/?igshid=YmMyMTA2M2Y=" target="_blank" className="text-blue-600 hover:border-blue-600 text-lg"><i aria-hidden="true" className="fa fa-instagram"></i></a>

                    </div>
                </div>


                {/* <!-- Mobile menu button --> */}
                <div className="md:hidden flex items-center">
                    <button className="outline-none mobile-menu-button">
                        <svg className=" w-6 h-6 text-gray-500"
                             x-show="!showMenu"
                             fill="none"
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             strokeWidth="2"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        {/* <!-- mobile menu --> */}
        <div className="hidden mobile-menu">
            <ul className="">
                <li><a href="/" className="block text-sm px-2 py-4">Home</a></li>
                <li><a href="/submission" className="block text-sm px-2 py-4 hover:bg-blue-600 transition duration-100">Submit a Story</a></li>
                <li><a href="/past-winners" className="block text-sm px-2 py-4 hover:bg-blue-600 transition duration-100">Past Winners</a></li>
                <li><a href="/contact-us" className="block text-sm px-2 py-4 hover:bg-blue-600 transition duration-100">Contact Us</a></li>
                <li><a href="/about-us" className="block text-sm px-2 py-4 hover:bg-blue-600 transition duration-100">About Us</a></li>
            </ul>
        </div>
        {/* <script>
            const btn = document.querySelector("button.mobile-menu-button");
            const menu = document.querySelector(".mobile-menu");

            btn.addEventListener("click", () => {
                menu.classList.toggle("hidden");
            });
        </script> */}
    </nav>

    <div className="flex-grow">
      {children}
    </div>

    <footer className="w-full text-center bg-gray-200">
        <div className="pt-4 text-sm">
            © 2026 The Betty Award
        </div>
        <div className="pb-4">
            <span className="text-sm">
                Follow us on social media: 
            </span>

             <a href="https://www.facebook.com/The-Betty-Award-108114242034321" target="_blank" className="text-blue-600 hover:border-blue-600 text-xl mr-2"><i aria-hidden="true" className="fa fa-facebook-square"></i></a> 
             <a href="https://www.instagram.com/p/CiAMCugOtry/?igshid=YmMyMTA2M2Y=" target="_blank" className="text-blue-600 hover:border-blue-600 text-lg"><i aria-hidden="true" className="fa fa-instagram"></i></a>
        </div>
    </footer>

    {/* <script src="https://js.stripe.com/v3/"></script> */}
    {/* <script src="~/lib/jquery/dist/jquery.min.js"></script> */}

    {/* <script src="~/js/data.min.js" asp-append-version="true"></script> */}
    {/* <script src="~/js/site220630.min.js" asp-append-version="true"></script> */}

    {/* @await RenderSectionAsync("Scripts", required: false) */}
  </body>
     </html>
  );
}
