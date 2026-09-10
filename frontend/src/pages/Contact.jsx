function Contact() {
    return(
        <div className="relative min-h-screen overflow-hidden text-white">
            <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/picture5.jpg.mp4"
            autoPlay
            loop
            muted
            playsInline
            />

            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10">
            <section className="px-6 py-24 text-center md:py-32">
                <p className="text-sm font-bold uppercase tracking-[o.3em] text-purple-400">
                    CONTACT SWIFTDROP.
                </p>
                <h1 className="mt-5 text-4xl font-bold md:text-6xl">
                    We're Here To
                    <span className="text-purple-400"> Help.</span>
                </h1>
                <p>
                    Have a question about your delivery? Need help with a package?
                    Reach out to our team and we will be happy to assist you.
                </p>
            </section>

            <section className="px-6 pb-24">
                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">

                    <div className="rounded-3xl border border-white/10 bd-white/5 p-8">
                        <h2 className="text-2xl font-bold">
                            Get in Touch
                        </h2>
                        <p className="mt-4 leading-7 text-gray-300">
                            Our team is ready to help with bookings, tracking, deliveries, 
                            and any other questions you may have.
                        </p>
                        <div className="mt-8 space-y-6">
                            <div>
                                <p className="text-sm font-semibold text-purple-400">
                                    Email
                                </p>
                                <p className="mt-1 text-gray-300">
                                    support@swiftdrop.com
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-purple-400">
                                  Phone
                                </p>
                                <p className="mt-1 text-gray-300">
                                   +234 800 000 0000
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-purple-400">
                                    Location
                                </p>
                                <p className="mt-1 text-gray-300">
                                    Nigeria
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                    <h2 className="text-2xl font-bold">
                        Send us a message
                    </h2>

                    <form className="mt-6 space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-semibold ">
                                Name
                            </label>
                            <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full rounded-xl border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-gray focus:border-purple-400"
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Email
                            </label>
                            <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-xl border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-gray focus:border-purple-400"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Message
                            </label>

                            <textarea
                            rows="5"
                            placeholder="Write your message...."
                            className="w-full rounded-xl border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-gray focus:border-purple-400"
                            ></textarea>
                        </div>

                        <button
                        type="button"
                        className="w-full rounded-xl border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-gray focus:border-purple-400"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
          
        </div>
        </div>
    )
}

export default Contact;