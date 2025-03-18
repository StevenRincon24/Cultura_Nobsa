import { festivals } from "@/data/festivals";

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export function Timeline({ zoom, year, onSelectFestival }) {
  const baseWidth = 100;
  const zoomedWidth = baseWidth + zoom * 100;

  return (
    <div className="w-full h-auto overflow-x-auto">
      <div
        className="relative"
        style={{ width: `${zoomedWidth}%`, height: "300px" }}
      >
        {MONTHS.map((month, index) => (
          <div
            key={month}
            className="absolute border-l border-gray-200"
            style={{
              left: `${(index / 12) * 100}%`,
              height: "100%",
              width: `${100 / 12}%`,
            }}
          >
            <div className="px-4 py-2 text-sm text-gray-600">{month}</div>
            <div className="relative h-full">
              {festivals
                .filter((festival) => festival.month === index + 1)
                .map((festival, festIndex) => (
                  <button
                    key={festival.id}
                    onClick={() => onSelectFestival(festival.id)}
                    className="absolute left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow"
                    style={{
                      top: `${40 + festIndex * 150}px`,
                      width: `calc(100% - 10px)`,
                    }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <img
                        src={festival.iconImage}
                        alt={festival.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-center">
                        {festival.name}
                      </span>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
