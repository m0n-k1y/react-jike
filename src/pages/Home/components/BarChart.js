import * as echarts from "echarts"
import { useEffect, useRef } from "react"

const BarChart = ({ title }) => {
  const chartRef = useRef(null)
  useEffect(() => {
    //保证dom渲染完成之后再渲染echarts
    //1.获取 dom节点
    // const chartDom = document.getElementById("main")
    const chartDom = chartRef.current
    //2.初始化echarts
    const myChart = echarts.init(chartDom)
    //3.配置数据
    const option = {
      title: {
        text: title,
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    }
    //4.渲染数据
    option && myChart.setOption(option)
  }, [])
  return (
    <div
      // id="main"
      ref={chartRef}
      style={{
        width: "500px",
        height: "500px",
      }}
    ></div>
  )
}

export default BarChart