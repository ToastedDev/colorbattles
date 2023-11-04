"use client";

import { Color } from "@prisma/client";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useRef, useState } from "react";
import Odometer from "react-odometerjs";
import { graphOptions } from "~/utils/graph-options";

export default function Counts({ color }: { color: Color }) {
  const chartRef = useRef<HighchartsReact.RefObject>(null);
  const [clicks, setClicks] = useState<number>(color.clicks);

  useEffect(() => {
    async function getClicks() {
      await fetch(`/api/color/${color.name}`)
        .then((res) => res.json())
        .then((data) => {
          setClicks(data.clicks);

          if (chartRef.current?.chart.series[0].points.length === 3600)
            chartRef.current?.chart.series[0].data[0].remove();
          chartRef.current?.chart.series[0].addPoint([
            Date.now(),
            Number(data.clicks || 0),
          ]);
        });
    }

    const interval = setInterval(getClicks, 2000);
    return () => clearInterval(interval);
  }, [color]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="bg-neutral-800 rounded-lg p-4 flex flex-col items-center justify-center">
        <h1 className="text-xl" style={{ color: color.hex }}>
          {color.displayName}
        </h1>
        <Odometer
          value={clicks}
          className="mt-2 w-full text-center text-5xl leading-[1em] sm:text-6xl md:text-7xl font-roboto"
        />
        <div className="mt-2 flex gap-2">
          <button
            onClick={() =>
              fetch(`/api/color/${color.name}`, {
                method: "POST",
              })
            }
            className="px-2 py-1 rounded-lg bg-green-500 hover:bg-green-700 transition-all"
          >
            +1
          </button>
          <button
            onClick={() =>
              fetch(`/api/color/${color.name}`, {
                method: "DELETE",
              })
            }
            className="px-2 py-1 rounded-lg bg-red-500 hover:bg-red-700 transition-all"
          >
            -1
          </button>
        </div>
      </div>
      <div className="mt-4 bg-neutral-800 rounded-lg p-4 py-8">
        <HighchartsReact
          highcharts={Highcharts}
          options={graphOptions(color.displayName, color.hex)}
          ref={chartRef}
        />
      </div>
    </div>
  );
}
