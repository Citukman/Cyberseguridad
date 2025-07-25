import React from 'react';

export default function PaymentButton() {
  return (
    <div className="mt-6">
      <form action="https://www.paypal.com/donate" method="post" target="_blank">
        <input type="hidden" name="business" value="cauichcituk@gmail.com" />
        <input type="hidden" name="currency_code" value="USD" />
        <button type="submit" className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl shadow-lg transition">
          💳 Donar / Pagar con PayPal
        </button>
      </form>
    </div>
  );
}
