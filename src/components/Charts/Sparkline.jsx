import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const Sparkline = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <div>
      {" "}
      lysi
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        dataSource={data}
        xName="X"
        yName="Y"
        type={type}
        // tooltipSettings={{
        //   visible: true,
        //   format: `${x} : data ${y}`,
        //   trackLineSettings: {
        //     visible: true,
        //   },
        // }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </div>
  );
};

export default Sparkline;
