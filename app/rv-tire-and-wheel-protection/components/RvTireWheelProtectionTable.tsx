"use client";

export default function RvTireWheelProtectionTable() {
  const rows = [
    { feature: "Road hazard tire damage", tire: "Yes", rv: "No" },
    { feature: "Rim repair/replacement", tire: "Yes", rv: "No" },
    { feature: "Mounting and balancing", tire: "Yes", rv: "No" },
    { feature: "Engine and drivetrain repairs", tire: "No", rv: "Yes" },
    { feature: "HVAC, plumbing, and appliances", tire: "No", rv: "Yes" },
    { feature: "Towing due to tire failure", tire: "Yes", rv: "Sometimes (limited use)" },
  ];

  return (
    <div className="my-8 overflow-x-auto border rounded-lg border-gray-400">
      <table className="w-full overflow-hidden">

        {/* HEAD */}
        <thead className="text-gray-800">
          <tr>
            <th className="py-3 px-4 border border-gray-300 text-[#064517]">Feature</th>
            <th className="py-3 px-4 border border-gray-300 text-[#064517]">Tire & Wheel Protection</th>
            <th className="py-3 px-4 border border-gray-300 text-[#064517]">RV Extended Warranty</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="text-[#064517]">
          {rows.map((row, index) => (
            <TableRow
              key={index}
              index={index}
              feature={row.feature}
              tire={row.tire}
              rv={row.rv}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------
      TABLE ROW
------------------------- */

function TableRow({
  index,
  feature,
  tire,
  rv,
}: {
  index: number;
  feature: string;
  tire: string;
  rv: string;
}) {

  // Row 1,3,5 = index 0,2,4 → odd rows visually
  const isColoredRow = index % 2 === 0; // even index = row 1,3,5

  return (
    <tr className={`${isColoredRow ? "bg-gray-100" : ""} hover:bg-gray-100 transition`}>
      <td className="py-3 px-4 border border-gray-300">{feature}</td>
      <td className="py-3 px-4 border border-gray-300">{tire}</td>
      <td className="py-3 px-4 border border-gray-300">{rv}</td>
    </tr>
  );
}