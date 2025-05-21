"use client";
import {
  donationMetrics,
  mentalHealthCharities,
} from "@/lib/constants/charities";
import { useState } from "react";

const PRESET_AMOUNTS = [1, 5, 10, 25, 100];

export default function Donations() {
  // Map metrics by organization for quick lookup
  const metricsMap = Object.fromEntries(
    donationMetrics.map((m) => [m.organization, { ...m }])
  );
  // State to simulate donation increments
  const [metrics, setMetrics] = useState(metricsMap);
  // Track donation input per charity
  const [inputs, setInputs] = useState<{ [org: string]: string }>({});

  const handleInputChange = (org: string, value: string) => {
    // Only allow numbers
    if (/^\d*$/.test(value)) {
      setInputs((prev) => ({ ...prev, [org]: value }));
    }
  };

  const handlePreset = (org: string, amount: number) => {
    setInputs((prev) => ({ ...prev, [org]: amount.toString() }));
  };

  const handleDonate = (org: string) => {
    const amount = parseInt(inputs[org] || "0", 10);
    if (!amount || amount <= 0) return;
    setMetrics((prev) => {
      const m = prev[org];
      if (!m) return prev;
      return {
        ...prev,
        [org]: {
          ...m,
          todayDonations: m.todayDonations + amount,
          monthlyDonations: m.monthlyDonations + amount,
          sixMonthDonations: m.sixMonthDonations + amount,
          yearlyDonations: m.yearlyDonations + amount,
        },
      };
    });
    setInputs((prev) => ({ ...prev, [org]: "" }));
  };

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1 className="mb-4 font-bold text-2xl">
        Supported Mental Health Charities
      </h1>
      <ul className="space-y-6">
        {mentalHealthCharities.map((charity) => {
          const m = metrics[charity.title];
          const yearlyGoal = m?.yearlyGoal || 1;
          const progress = Math.min((m?.yearlyDonations || 0) / yearlyGoal, 1);
          return (
            <li
              key={charity.title}
              className="flex md:flex-row flex-col md:justify-between md:items-center gap-4 p-4 border rounded-lg"
            >
              <div className="flex-1">
                <h2 className="font-semibold text-lg">{charity.title}</h2>
                <p className="mb-2 text-gray-700 text-sm">
                  {charity.description}
                </p>
                <a
                  href={charity.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm underline"
                >
                  Visit Website
                </a>
                {m && (
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 text-xs">
                        Yearly Goal: ${m.yearlyGoal.toLocaleString()}
                      </span>
                      <span className="font-medium text-gray-700 text-xs">
                        {Math.round(progress * 100)}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="bg-gray-200 mb-2 rounded w-full h-3">
                      <div
                        className="bg-green-500 rounded h-3"
                        style={{
                          width: `${progress * 100}%`,
                          transition: "width 0.3s",
                        }}
                      />
                    </div>
                    <div className="mb-2 text-gray-600 text-xs">
                      <span className="font-semibold">Yearly Donations:</span> $
                      {m.yearlyDonations.toLocaleString()}
                    </div>
                  </div>
                )}
              </div>
              {m && (
                <div className="flex flex-col items-start md:items-end gap-2 min-w-[220px]">
                  <div className="gap-x-4 gap-y-1 grid grid-cols-2 text-xs">
                    <span className="font-medium">Today:</span>
                    <span>${m.todayDonations.toLocaleString()}</span>
                    <span className="font-medium">This Month:</span>
                    <span>${m.monthlyDonations.toLocaleString()}</span>
                    <span className="font-medium">6 Months:</span>
                    <span>${m.sixMonthDonations.toLocaleString()}</span>
                  </div>
                  {/* Donation input and preset buttons */}
                  <div className="flex flex-col gap-1 mt-2 w-full">
                    <div className="flex flex-wrap gap-1">
                      {PRESET_AMOUNTS.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          className="px-2 py-1 border rounded text-xs"
                          onClick={() => handlePreset(charity.title, amt)}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-1">
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        className="px-2 py-1 border rounded w-20 text-sm"
                        placeholder="Amount"
                        value={inputs[charity.title] || ""}
                        onChange={(e) =>
                          handleInputChange(charity.title, e.target.value)
                        }
                      />
                      <button
                        className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded text-sm text-white transition"
                        onClick={() => handleDonate(charity.title)}
                        disabled={
                          !inputs[charity.title] ||
                          parseInt(inputs[charity.title], 10) <= 0
                        }
                      >
                        Donate
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
