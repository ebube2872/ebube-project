import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate =useNavigate();
    return(
        <nav className="flex items-center justify-between bg-black px-8 py-5 text-white">
            <h2 className="text-2xl font-bold text-purple-400">
                SwiftDrop
            </h2>

            <div className="flex items-center gap-8">
                <a href="/" className="hover:text-purple-400">
                Home
                </a>

                <a href="/services" className="hover:text-purple-400">
                    Services
                </a>

                <a href="/track" className="hover:text-purple-400">
                    Track Package
                </a>

                <a href="/contact" className="hover:text-purple-400">
                    Contact
                </a>

                <a href="/signup" className="hover:text-purple-400">
                   Signup  
                </a>

                <button 
                className="rounded-lg bg-purple-400 px-5 py-2 font-semibold text-black hover:bg-purple-300"
                onClick={() => navigate("/login")}
                >
                    Login
                </button>
            </div>
        </nav>
    );
}

export default Navbar;