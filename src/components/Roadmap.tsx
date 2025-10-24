import React from "react";

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      label: "Pre-sales",
      items: [
        "Landing website launch",
        "Marketing kickoff with pre-sale token on PumpFun",
        "Livestreams hunt events",
      ],
    },
    {
      phase: "Phase 2",
      label: "Dapps Launching",
      items: [
        "Registrations open",
        "BTC pool grows",
      ],
    },
    {
      phase: "Phase 3",
      label: "BSLR Listing",
      items: [
        "Hunt Registration closing",
        "LP Build + DEX Launch",
        "BSLR/USDT listing on Raydium & CoinGecko",
      ],
    },
    {
      phase: "Phase 4",
      label: "Compete!",
      items: [
        "Event begins",
        "4 steps, 20 days",
        "5 questions per step",
      ],
    },
    {
      phase: "Phase 5",
      label: "BTC Distribution",
      items: [
        "Bitcoin rewards to winners",
        "1 BTC to 1st place (7 steps)",
        "Bonus distribution if top 3 exceed 1 BTC",
      ],
    },
  ];

  return (
    <section
      id="global"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-start p-8"
    >
      <div className="w-full flex justify-between text-left divide-x divide-gray-700 overflow-x-auto">
        {phases.map((phaseData, idx) => (
          <div key={idx} className="px-8 flex-1 min-w-[280px] flex flex-col">
            {/* Phase Title */}
            <h2 className="text-4xl font-black mb-2 leading-tight">
              {phaseData.phase}
            </h2>

            {/* Phase Label */}
            <p className="text-xs text-orange-500 font-bold mb-8 uppercase tracking-widest">
              ● {phaseData.label}
            </p>

            {/* Items List */}
            <ul className="space-y-6 text-sm">
              {phaseData.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-orange-500 flex-shrink-0 mt-1">○</span>
                  <div className="flex-1">
                    <span className="text-gray-300">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Gradient Divider */}
      <div className="mt-16 h-1 w-full bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 rounded-full opacity-70" />
    </section>
  );
};

export default Roadmap;