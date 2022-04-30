import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const TradingViewWidget = dynamic(() => import("react-tradingview-widget"), {
  ssr: false,
});

const Themes = dynamic(
  () => import("react-tradingview-widget").then((mod) => mod.Themes),
  {
    ssr: false,
  }
);

const TradingChart = ({ name }) => {
  const { activeTicker } = useSelector((state) => state.common);

  return (
    <div className="card">
      <div className="card-header align-items-center d-flex">
        <h4 className="card-title mb-0 flex-grow-1">{name}</h4>
        <div className="flex-shrink-0">
          <h4 className="card-title mb-0 flex-grow-1">
            <span className="text-muted mb-0 font-size-11">Last Price</span>
            ₹36,55,099
          </h4>
        </div>
      </div>
      <div className="card-body">
        <TradingViewWidget
          symbol={activeTicker}
          theme={Themes.LIGHT}
          locale="in"
          width={700}
          height={400}
        />
      </div>
    </div>
  );
};

export default TradingChart;
