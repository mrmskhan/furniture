import React from 'react';

const Summary = () => {
  return (
    <div className="w-[320px] p-6 rounded-lg bg-white">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Summary</h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-700">Subtotal</span>
          <span className="text-sm font-semibold text-gray-900">$198.00</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-700">Estimated Delivery & Handling</span>
          <span className="text-sm font-semibold text-gray-900">Free</span>
        </div>

        <div className="flex justify-between border-t border-gray-100 pt-4">
          <span className="text-sm font-medium text-gray-900">Total</span>
          <span className="text-sm font-semibold text-gray-900">$198.00</span>
        </div>
      </div>

      <button className="w-full mt-6 py-3 bg-teal-500 text-white text-lg font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300">
        Member Checkout
      </button>
    </div>
  );
};

export default Summary;
