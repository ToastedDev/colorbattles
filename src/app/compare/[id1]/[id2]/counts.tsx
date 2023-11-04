"use client";

import { Color } from "@prisma/client";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useRef, useState } from "react";
import Odometer from "react-odometerjs";
import { graphOptions } from "~/utils/graph-options";

export default function Counts({
  color1,
  color2,
}: {
  color1: Color;
  color2: Color;
}) {
  const chartRef = useRef<HighchartsReact.RefObject>(null);
  const [clicks, setClicks] = useState<[number, number]>([
    color1.clicks,
    color2.clicks,
  ]);
  const [difference, setDifference] = useState<number>(
    color1.clicks - color2.clicks
  );

  useEffect(() => {
    async function getClicks() {
      const data1 = await fetch(`/api/color/${color1.name}`).then((res) =>
        res.json()
      );
      const data2 = await fetch(`/api/color/${color2.name}`).then((res) =>
        res.json()
      );

      setClicks([data1.clicks, data2.clicks]);

      const difference = data1.clicks - data2.clicks;
      setDifference(difference);

      if (chartRef.current?.chart.series[0].points.length === 3600)
        chartRef.current?.chart.series[0].data[0].remove();
      chartRef.current?.chart.series[0].addPoint([
        Date.now(),
        Number(difference || 0),
      ]);
    }

    const interval = setInterval(getClicks, 2000);
    return () => clearInterval(interval);
  }, [color1, color2]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-neutral-800 rounded-lg p-4 flex flex-col items-center justify-center">
          <h1 className="text-xl" style={{ color: color1.hex }}>
            {color1.displayName}
          </h1>
          <Odometer
            value={clicks[0]}
            className="mt-2 w-full text-center text-5xl leading-[1em] sm:text-6xl md:text-7xl font-roboto"
          />
          <div className="mt-2 flex gap-2">
            <button
              onClick={() =>
                fetch(`/api/color/${color1.name}`, {
                  method: "POST",
                })
              }
              className="px-2 py-1 rounded-lg bg-green-500 hover:bg-green-700 transition-all"
            >
              +1
            </button>
            <button
              onClick={() =>
                fetch(`/api/color/${color1.name}`, {
                  method: "DELETE",
                })
              }
              className="px-2 py-1 rounded-lg bg-red-500 hover:bg-red-700 transition-all"
            >
              -1
            </button>
          </div>
        </div>
        <div className="bg-neutral-800 rounded-lg p-4 flex flex-col items-center justify-center">
          <h1 className="text-xl" style={{ color: color2.hex }}>
            {color2.displayName}
          </h1>
          <Odometer
            value={clicks[1]}
            className="mt-2 w-full text-center text-5xl leading-[1em] sm:text-6xl md:text-7xl font-roboto"
          />
          <div className="mt-2 flex gap-2">
            <button
              onClick={() =>
                fetch(`/api/color/${color2.name}`, {
                  method: "POST",
                })
              }
              className="px-2 py-1 rounded-lg bg-green-500 hover:bg-green-700 transition-all"
            >
              +1
            </button>
            <button
              onClick={() =>
                fetch(`/api/color/${color2.name}`, {
                  method: "DELETE",
                })
              }
              className="px-2 py-1 rounded-lg bg-red-500 hover:bg-red-700 transition-all"
            >
              -1
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-neutral-800 p-4">
        <Odometer
          value={difference}
          className="w-full text-center text-4xl leading-[1em] font-roboto"
        />
        <p className="mt-1 text-center text-xs">Difference</p>
      </div>
      <div className="mt-4 bg-neutral-800 rounded-lg p-4 py-8">
        <HighchartsReact
          highcharts={Highcharts}
          options={graphOptions("Difference", "#fff")}
          ref={chartRef}
        />
      </div>
    </>
  );
}
