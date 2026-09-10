function TrackPackage() {
    return (
        <div className="relative min-h-screen overflow-hidden text-white">
            <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/picture2.jpg.mp4"
            autoPlay
            loop
            muted
            playsInline
            />

            <div className="absolute  inset-0 bg-black/65"></div>

                <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
                    <div className="w-full max-w-2xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-400">
                            SWIFTDROP TRACKING
                        </p>

                        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
                            Track your Package
                        </h1>

                        <p className="mx-auto mt-10 max-w-xl text-lg leading-7 text-gray-300">
                            Enter your tracking number below to see where your package
                            is and follow it's delivery journey.
                        </p>

                        <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-white.10 bg-black.60p-6 shadow-2xl backdrop-blur--md md:p-8">
                            <label className="mb-3 block text-left text-sm font-semibold text-gray-300">
                                Tracking Number
                            </label>

                            <div className="flex w-full flex-col gap-3 sm:flex-row">
                                <input
                                type="text"
                                placeholder="Enter tracking number"
                                className="min-w-0 flex-1 rounded-xl border border-white /10 bg-white/10 px-4 py-3.5 text-white outline-none placeholder:text-gray-500 focus:border-purple-400"
                                />

                                <button
                                type="button"
                                className="shrink-0 rounded-xl bg-purple-400 px-7 py-3.5 font-bold text-black transition hover: bg-purple-300"
                                >
                                  Track Package  
                                </button>

                            </div>
                        </div>

                        <div className="mt-8 flex-wrap justify-center gap-3 text-sm text-gray-300">

                            <span className="rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-sm">
                                 Real Time Tracking
                            </span>

                            <span className="rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-sm">
                                Fast & Reliable
                            </span>
                        </div>
                    </div>
                </div>
            

        </div>
    );
}

export default TrackPackage;