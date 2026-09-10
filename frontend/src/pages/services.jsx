import { useNavigate } from "react-router-dom";
function Services() {
    const navigate = useNavigate();
    
    const services = [
        {
            icon: "01",
            title: "Express Delivery",
            description:
             "Fast and reliable delivery for packages that need to arrive quickly.",
        },
        {

            icon: "02",
            title:"Standard Delivery",
            description: 
            "Affordable and depandable delivery for your everyday packages.",
        },
        {

          icon: "03",
          title:"Same-day Delivery",
          description:        
          "Get your pacakages delivered within the same day, quickly and safely.",
        },

        {
            icon:"04",
            title:"Nationwide Delivery",
            description:
            "Reliable logistics solutions designed to help businesses move packages efficiently.",
        },
        {
            icon: "05",
            title:"Package Tracking",
            description:
            "Track your package and stay updated throughout it's delivery journey.",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white">

            <section className="relative overflow-hidden px-6 py-24 md:py-32">

                <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl"></div>

                <div className=" relative z-10 mx-auto max-w-4xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-400">
                        SWIFTDROP SERVICES
                    </p>

                    <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                        Delivery Made
                        <span className="text-purple-400"> Simple.</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                        From urgent packages to everyday deliveries, SwiftDrop provides
                        fast,reliable, and convinient logistics solutions designed around
                        you.
                    </p>
                    
                </div>
            </section>

            <section className="px-6 pb-24">

                <div className="mx-auto max-w-6xl">

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        
                          {services.map((service)=>(
                         <div
                         key={services.title}
                         className="group rounded-3xl border border-white/10 bg-white/5 p-7 text-white transition duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:bg-purple-400/10"
                         >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-400/15 text-lg font-bold text-purple-400">
                                {service.icon}
                            </div>
                            <h2 className="mt-6 text-xl font-bold text-white">
                                {service.title}
                            </h2>
                            <p className="mt-3 leading-7 text-gray-300">
                                {service.description}
                            </p>

                         </div>
                         ))}
                    </div>
                </div>
            </section>

            <section className="px-6 pb-24">
                <div className="mx-auto max-w-5xl rounded-3xl border border-purple-400/20 bg-purple-400/10 py-14 px-6 text-center md:px-12">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-400">
                        READY TO SEND?
                    </p>
                    <h2>
                        Let SwiftDrop handle the journey.
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-gray-300">
                        Book a delivery today and experience a faster,simpler way to
                        move your packages.
                    </p>

                    <button
                    type="button"
                    className="mt-8 rounded-xl bg-purple-400 px-8 py-3.5 font-bold text-black transition hover:bg-purple-300"
                    onClick={() => navigate("/book-delivery")}
                    >
                      Book a Delivery
                    </button>
                </div>
            </section>

        </div>
    );
}

export default Services;