 import {useState} from "react";
 function Booking() {
    const {pickupAddress, setPickupAddress} = useState("");
    const {deliveryAddress, setDeliveryAddress} = useState("");
    const {senderName,setSenderName} = useState("");
    const {senderPhone, setSenderPhone} = useState("");
    const {receiverName, setReceiverName} = useState("");
    const {trackingNumber, setTrackingNumber} = useState("");
    const {receiverPhone, setReceiverPhone} = useState("");
    const {packageDescription, setPackageDescription} = useState("");

    const handleBooking = async () => {
        try {
            const response= await fetch("http://localhost:5000/api/packages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ${localStorage.getItem("token")}',
                },
                body: JSON.stringify({
                    senderName,
                    senderPhone,
                    pickupAddress,
                    deliveryAddress,
                    receiverName,
                    receiverPhone,
                    packageDescription,
                    trackingNumber,
                }),
            });

            const data = await response.json();

            if(response.ok) {
                alert("Delivery booked successfully!");
                console.log(data);

            }else {
                alert(data.message || "Failed to book delivery")
            }
        }catch (error) {
            console.error(error);
            alert("Unable to connect to the server");
        }
    };
    return(
        <section className="bg-white px-6 py-20 text-black">
            <div className="mx-auto max-w-5xl">

          <div className="mb-10 text-center">
            <p className="font-semibold text-purple-600">
                Book a Delivery
                </p>
            <h2 className="mt-2 text-4xl font-bold">
                Where are you delivering to?
            </h2>
            <p className="mt-3 text-gray-600">
                Enter your pickup and delivery locations to get started.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-100 p-8 shadow-lg">
            <div className="grid gap-6 md:grid-cols-2">

            </div>
            <div>
                <label className="mb-2 block font-semibold">
                    Pickup Location
                </label>
                <input
                    value={pickupAddress}
                    onChange={(e)=> setPickupAddress(e.target.value)}
                    type="text"
                    placeholder="Enter pickup location"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-purple-500"
                />  
            </div>

            <div>
                <label className="mb-2 block font-semibold">
                    Delivery Location
                </label>
                <input
                    value={deliveryAddress}
                    onChange={(e)=> setDeliveryAddress(e.target.value)}
                    type="text"
                    placeholder="Enter delivery location"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-purple-500"
                />  
            </div>  

            <div>
                <label className="mb-2 block font-semibold" >
                    Sender Phone
                </label>
                <input
                value={senderPhone}
                onChange={(e)=> setSenderPhone(e.target.value)}
                placeholder="Enter sender phone number"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-purple-500"
                />
            </div>

            <div>
                <label className="mb-2 block font-semibold">
                    Sender Name
                </label>
                <input
                value={senderName}
                onChange={(e)=> setSenderName(e.target.value)}
                placeholder="Enter sender name"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-purple-500"
                />
            </div>

            <div>
                <label className="mb-2 block font-semibold">
                    Receiver Name
                </label>
                <input
                value={receiverName}
                onChange={(e)=> setReceiverName(e.target.value)}
                placeholder="Enter receiver name"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-purple-500"
                />
            </div>

            <div>
                <label className="mb-2 block font-semibold">
                    Receiver Phone
                </label>
                <input
                value={receiverPhone}
                onChange={(e)=> setReceiverPhone(e.target.value)}
                placeholder="Enter receiver phone"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-purple-500"
                />
            </div>

            <div>
                <label className="mb-2 block font-semibold">
                    Package Description
                </label>
                <input
                value={packageDescription}
                onChange=  {(e)=> setPackageDescription(e.target.value)}
                placeholder="Enter package description"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-purple-500"
                />
            </div>

            <div>
                <label className="mb-2 block font-semibold">
                    Tracking Number
                </label>
                <input
                value={trackingNumber}
                onChange= {(e)=> setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-purple-500"
                />
            </div>

            <button 
            className="mt-8 w-full rounded-lg bg-black px-6 py-3 font-semibold text-purple-400 transition hover:bg-purple-400 hover:bg-bg-purple-400 hover:text-black"
            type="button"
            onClick={handleBooking}
            >
                Get delivery code.
            </button>


          </div>
            </div>
        </section>
    )
 }

 export default Booking;