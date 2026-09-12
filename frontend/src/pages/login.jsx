import {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
function Login () {
const[email,setEmail] = useState("");
const[password, setPassword] = useState("");
const navigate = useNavigate();

  const handleLogin = async (e) =>{
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if(!savedUser) {
      alert ("No account found. Please sign up first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password){
      localStorage.setItem("token", "logged-in");

      alert("Login successful!");

      navigate("/");
    }else{
      alert ("Invalid email or password.")
    }
  };
    return (
        <div className="relative min-h-screen overflow-hidden text-white">
          <img
          src= "/picture9.jpg.jpg"
          alt= "SwiftDrop delivery"
          className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/65"></div>
           
          <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-black/60 p-8 shadow-2xl backdrop-blur-md md:p-10">
              <div className="mb-8 text-center">
                <p className="text-sm font-bold tracking-[0.3cm] text-purple-400">
                    SWIFTDROP
                </p>
                <h1 className="mt-4 text-4xl font-bold">
                    Welcome Back!
                </h1>

                <p className="mt-3 text-gray-300">
                    Login to continue with SwiftDrop.
                </p>
              </div>

              <form
              onSubmit={handleLogin}
              type="submit"
              className="space-y-5">

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                        Email
                    </label>
                    <input
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none placeholder:text-gray-400 focus:border-purple-400"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                        Password
                    </label>
                    <input
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none placeholder:text-gray-400 focus:border-purple-400"
                    />
                </div>

                <button
                type="submit"
                className="w-full rounded-xl bg-purple-400 px-6 py-3.5 font-bold text-black transition hover: bg-purple-300"
                >
                  Login
                </button>
              </form>

              <p className="mt-8 text-center text-gray-400">
                Dont't have an account? {" "}
                <span className="cursor-pointer font-semibold text-purple-400 hover:text-purple-300">
                    <Link to="/signup">
                    Sign up
                    </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
    );
}

export default Login;