import Navbar from '../components/Navbar';
import Booking from '../components/booking';

function Home() {
    return(
        <div className="min-h-screen bg-black text-white">
            <Navbar/>

            <section className="relative flex min-h-[90vh] items-center overflow-hidden">
                <video
                className="absolute inset-0 z-0 w-full object-cover"
                src="/picture1.jpg.mp4"
                autoPlay
                loop
                muted
                playsInline
                />
            <div className="absolute inset-0 bg-black/65 "></div>
            <div className="max-w-3xl">
                <p className="mb-5 text-sm font-bold tracking-[0.3cm] text-purple-400 relative z-10">
                    FAST. RELIABLE. SAFE
                </p>
                <h1 className=" text-5xl font-bold leading-tight sm:text-6xl md:text=7xl relative z-10">
                    Your delivery.
                    <span className="block text-purple-400 relative z-10">
                        Our priority
                    </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
                    Send packages across town with SwiftDrop.
                    Fast deliveries, real-time tracking, and reliable service
                    all in one place.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                    <button className="rounded-xl bg-purple-400 px-7 py-3.5 z-0 font-bold text-black transition hover:bg-purple-300">
                        Book a delivery
                    </button>
                    <button className="rounded-xl border border-purple-400 px-7 py-3.5 z-0 font-bold text-purple-300 transition hover:bg-purple-400 hover:text-black">
                        Track package
                    </button>
                </div>
            </div>

            

            <div className="mt-12 w-full max-w-md rounded-2xl border border-white/20 bg-black/60 p-5 backdrop-blur-md">
                <p className="text-sm text-gray-400">SWIFTDROP</p>
                <h2 className="mt-2 text-xl font-semibold">
                    Moving what matters.
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                    From pickup to delivery, we keep your package moving
                    and your journey simple.
                </p>
            </div>
            </section>

             <Booking/>

            <section className="bg-black px-6 py-20">
               <div className="mx-auto max-w-7xl">
                <div className="max-w-2xl">
                    <p className="font-semibold uppercase tracking-widest text-purple-400">
                        Why SwiftDrop
                    </p>
                    <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                       Delivery made simple 
                    </h2>
                    <p className="mt-5 text-gray-400">
                        Everything you need to send, track, and manage your deliveries
                        in one place.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                        <h3 className="text-xl font-bold text-purple-400">
                            Fast Delivery.
                        </h3>
                        <p className="mt-3 leading-7 text-gray-400">
                                Get your packages quickly with a delivery
                                experience built around speed.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                        <h3 className="text-xl font-bold text-purple-400">
                            Real-time Tracking
                        </h3>
                        <p className="mt-3 leading-7 text-gray-400">
                            Keep an eye on your package and know where it is
                            throughout it's journey.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                        <h3 className="text-xl font-bold text-purple-400">
                            Reliable services.
                        </h3>
                        <p className="mt-3 leading-7 text-gray-400">
                            A simple and dependable way to send packages whenever
                            you need them delivered.
                        </p>
                    </div>
                </div>
               </div>
            </section>
        </div>
    )
}

export default Home;