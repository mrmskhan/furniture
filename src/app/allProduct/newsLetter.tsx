const Newsletter = () => {
  return (
    <div className="w-full bg-[#F7F7F7] py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-roboto font-medium text-[32px] leading-[40px] mb-6 text-[#000000]">
          Subscribe to the Newsletter
        </h2>
        <form
          action="#"
          method="POST"
          className="flex justify-center items-center gap-4"
        >
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-lg flex-1"
          />
          <button
            type="submit"
            className="px-6 py-2 text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
