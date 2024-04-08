import * as React from "react"
import { Button } from "@/components/ui/button"

export default function PriceTable() {
  
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Dungeons & Dragons Game Registration</h1>
        <p className="text-xl text-center">Choose the adventure to matches your character.</p>
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white" scope="col">
                Player Level
              </th>
              <th className="py-3 px-6" scope="col">
                Single Game
              </th>
              <th className="py-3 px-6" scope="col">
                Five Game Arc
              </th>
              <th className="py-3 px-6" scope="col">
                New Player Discount
              </th>
              <th className="py-3 px-6" scope="col">
                Group Discount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md">
                Young Adventurers
              </td>
              <td className="py-4 px-6">$15.00</td>
              <td className="py-4 px-6">$75.00</td>
              <td className="py-4 px-6">$70.00</td>
              <td className="py-4 px-6">$70.00</td>
            </tr>
            <tr className="bg-gray-50 border-b">
              <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md">
                Adventurers
              </td>
              <td className="py-4 px-6">$25.00</td>
              <td className="py-4 px-6">$100.00</td>
              <td className="py-4 px-6">$90.00</td>
              <td className="py-4 px-6">$90.00</td>
            </tr>
            <tr className="bg-white border-b">
              <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md">
                Heroes
              </td>
              <td className="py-4 px-6">$35.00</td>
              <td className="py-4 px-6">$150.00</td>
              <td className="py-4 px-6">$150.00</td>
              <td className="py-4 px-6">$125.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8 text-center">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          <a href="/signup">Sign Up</a>
        </button>
      </div>
    </div>
  )
}

