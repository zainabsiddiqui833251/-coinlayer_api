'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const API_KEY = '3546593bd3788fa2d12e6f6b8f02cdb9';
  const [data, setData] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((convertedData) => {
        console.log('json data =', convertedData);
        setData(convertedData.rates); // Assuming 'rates' contains currency data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="text-center  bg-black text-white min-h-[100vh] overflow-auto">
      <h1 className="text-[2em] mb-4 uppercase ">Coinlayer Assignment</h1>
      <p className="text-[1.4em] mb-4">Welcome to the Coinlayer API</p>

      <table className="w-fit m-auto border ">
        <thead className="border">
          <tr className="text-[1.4em]">
            <th className="border p-3 ">Currency</th>
            <th className="border p-3 ">Rate</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            Object.entries(data).map(([currency, rate], index) => (
              <tr key={index} className="border p-3 ">
                <td className="border p-3 ">{currency}</td>
                <td className="border p-3 ">{rate} USD</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
