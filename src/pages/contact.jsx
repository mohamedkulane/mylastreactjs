 export default function Contact(){
    return <>
    <div className="mt-12">
     <div className="flex justify-center items-center min-h-screen bg-white relative -z-10 px-4 py-10">

      <div className="max-w-3xl w-full px-6 py-8 sm:py-10 bg-white shadow-lg rounded-2xl border border-purple-200 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-800 text-center">
          Contact <span className="text-[#D9C1A4]">Us</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-purple-800/80 text-center px-2">
          Have questions or need help? Fill out the form below and our team will get back to you shortly.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-purple-800 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-2 w-full border border-purple-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
            />
          </div>

          <div>
            <label className="block text-purple-800 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="mt-2 w-full border border-purple-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
            />
          </div>

          <div>
            <label className="block text-purple-800 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="mt-2 w-full border border-purple-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#D9C1A4] text-gray-800 font-medium rounded-md py-3 hover:bg-[#cbb293] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
   

    
    </>
}
