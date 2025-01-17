import React from 'react';
import { IoCart } from 'react-icons/io5';

export default function TotalOrders() {
  // Ajouter ici l'appel API si nécessaire pour TotalOrders

  return (
    <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
        <IoCart className="text-2xl text-white" />
      </div>
      <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">Total Orders</span>
        <div className="flex items-center">
          <strong className="text-xl text-gray-700 font-semibold">16432</strong>
          <span className="text-sm text-red-500 pl-2">-43</span>
        </div>
      </div>
    </BoxWrapper>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
