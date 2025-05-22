"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  donationMetrics,
  mentalHealthCharities,
} from "@/lib/constants/charities";
import { formatNumberToCurrency } from "@/lib/utils/format";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PRESET_AMOUNTS = [1, 5, 10, 25, 100];

export default function Donations() {
  const router = useRouter();
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
      <h1>Supported Mental Health Charities</h1>
      <h5>Make a difference with your donation</h5>
      <p>
        Your contributions help us support various mental health charities.
        Below are the organizations we support, along with their current
        donation metrics. You can choose to donate any amount, and we have
        preset amounts for your convenience. Every donation counts, and together
        we can make a significant impact on mental health awareness and support.
      </p>
      <p>
        Please note that the donation metrics are simulated for demonstration
        purposes. In a real-world application, these values would be fetched
        from a backend service or API.
      </p>

      <section className="gap-5 space-y-6 grid lg:grid-cols-2 mt-8">
        {mentalHealthCharities.map((charity) => {
          const m = metrics[charity.title];
          const yearlyGoal = m?.yearlyGoal || 1;
          // Allow percent to go over 100%
          const percent = ((m?.yearlyDonations || 0) / yearlyGoal) * 100;
          const progress = percent > 100 ? 100 : percent;
          const overGoal = (m?.yearlyDonations || 0) > yearlyGoal;
          return (
            <div
              key={charity.title}
              className="flex md:flex-row flex-col md:justify-between md:items-center p-4 border rounded-2xl h-full"
            >
              <div className="flex flex-col justify-between py-2 h-full">
                <div className="place-self-start">
                  <h2
                    className="underline-offset-2 hover:underline"
                    onClick={() => router.push(charity.url)}
                  >
                    {charity.title}
                  </h2>
                  <p>{charity.description}</p>
                </div>
                <div>
                  {m && (
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span>
                          Year Goal:{" "}
                          {formatNumberToCurrency(m.yearlyGoal, 2, 2)}
                        </span>
                        <span
                          className={
                            overGoal ? "text-tertiary text-xl -mb-2" : undefined
                          }
                        >
                          {Math.round(percent)}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="bg-gray-200 mb-2 rounded w-full h-3">
                        <div
                          className="bg-tertiary rounded h-3"
                          style={{
                            width: `${progress}%`,
                            transition: "width 0.3s",
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <div className="gap-7 grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 mt-9">
                    <div className="gap-x-4 gap-y-1 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-2">
                      <h5>Today:</h5>
                      <span>
                        {formatNumberToCurrency(m.todayDonations, 2, 2)}
                      </span>
                      <h5>This Month:</h5>
                      <span>
                        {formatNumberToCurrency(m.monthlyDonations, 2, 2)}
                      </span>
                      <h5>6 Months:</h5>
                      <span>
                        {formatNumberToCurrency(m.sixMonthDonations, 2, 2)}
                      </span>
                      <h5>This Year:</h5>
                      <span
                        className={
                          overGoal ? "text-tertiary text-xl -mt-1" : undefined
                        }
                      >
                        {formatNumberToCurrency(m.yearlyDonations, 2, 2)}
                      </span>
                    </div>
                    <div className="flex flex-col md:justify-center gap-1 xl:mx-6 w-full xl:w-fit">
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          placeholder="Amount"
                          value={inputs[charity.title] || ""}
                          onChange={(e) =>
                            handleInputChange(charity.title, e.target.value)
                          }
                        />
                        <Button
                          onClick={() => handleDonate(charity.title)}
                          disabled={
                            !inputs[charity.title] ||
                            parseInt(inputs[charity.title], 10) <= 0
                          }
                        >
                          Donate
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {PRESET_AMOUNTS.map((amt) => (
                          <Button
                            key={amt}
                            type="button"
                            size={"sm"}
                            variant="outline"
                            onClick={() => handlePreset(charity.title, amt)}
                          >
                            ${amt}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {/* FAQ Section */}
      <section className="mt-14 mb-10 max-w-3xl">
        <h2 className="mb-4 font-semibold text-2xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h4 className="mb-1 font-bold">How are my donations used?</h4>
            <p>
              100% of your donation goes directly to the mental health charity
              you select. We do not take any fees from your contribution. Each
              organization uses the funds to support their programs, outreach,
              and services for mental health awareness and support.
            </p>
          </div>
          <div>
            <h4 className="mb-1 font-bold">
              Can I choose which charity receives my donation?
            </h4>
            <p>
              Yes! You can select from our list of supported mental health
              charities and donate to the one you care about most. Each donation
              is tracked and sent to the designated organization.
            </p>
          </div>
          <div>
            <h4 className="mb-1 font-bold">Is my donation tax-deductible?</h4>
            <p>
              Donations made through our platform are typically tax-deductible,
              but we recommend consulting with your tax advisor or the charity
              directly for official documentation and eligibility.
            </p>
          </div>
          <div>
            <h4 className="mb-1 font-bold">
              How do I know my donation reached the charity?
            </h4>
            <p>
              We provide confirmation of your donation and work closely with our
              partner charities to ensure all funds are delivered securely. For
              additional assurance, you may contact the charity directly using
              the information provided on their website.
            </p>
          </div>
          <div>
            <h4 className="mb-1 font-bold">
              Can I get a receipt for my donation?
            </h4>
            <p>
              Yes, after completing your donation, you will receive a receipt
              via email. This can be used for your records or for tax purposes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
