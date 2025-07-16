import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import Section from "@/layout.jsx/section";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export default function PlacementCharts({ data = [] }) {
  const companyCounts = {};
  data.forEach((s) => {
    companyCounts[s.company] = (companyCounts[s.company] || 0) + 1;
  });

  const chartColors = [
    "#f97316", // orange-500
    "#10b981", // emerald-500
    "#ec4899", // pink-500
    "#f59e0b", // amber-500
    "#14b8a6", // teal-500
    "#d946ef", // fuchsia-500
    "#06b6d4", // cyan-500
    "#84cc16", // lime-500
    "#ef4444", // red-500
    "#8b5cf6", // violet-500
  ];

  return (
    <Section className="py-16 background-gradient-yellow-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Placement <span className="text-primary">Analytics</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-center text-gray-600 max-w-2xl">
            Visualizing our placement data to showcase the success of our
            students across various companies and sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[600px]">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Company Distribution
            </h3>
            <div className="p-4 flex-grow relative">
              <Pie
                data={{
                  labels: Object.keys(companyCounts),
                  datasets: [
                    {
                      data: Object.values(companyCounts),
                      backgroundColor: chartColors,
                      borderColor: "white",
                      borderWidth: 2,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "bottom",
                      labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                          size: 12,
                        },
                      },
                    },
                    tooltip: {
                      backgroundColor: "rgba(0,0,0,0.8)",
                      padding: 12,
                      titleFont: {
                        size: 14,
                      },
                      bodyFont: {
                        size: 13,
                      },
                    },
                  },
                  animation: {
                    animateScale: true,
                    animateRotate: true,
                  },
                }}
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[600px]">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Package Comparison
            </h3>
            <div className="p-4 flex-grow relative">
              <Bar
                data={{
                  labels: data.map((s) => s.name),
                  datasets: [
                    {
                      label: "Package (LPA)",
                      data: data.map((s) => s.package),
                      backgroundColor: data.map(
                        (_, index) => chartColors[index % chartColors.length]
                      ),
                      borderRadius: 6,
                    },
                  ],
                }}
                options={{
                  indexAxis: "y",
                  maintainAspectRatio: false,
                  responsive: true,
                  plugins: {
                    legend: {
                      display: true,
                      position: "bottom",
                      labels: {
                        generateLabels: function (chart) {
                          const datasets = chart.data.datasets;
                          return chart.data.labels.map((label, i) => {
                            const backgroundColor =
                              datasets[0].backgroundColor[i];
                            return {
                              text: label,
                              fillStyle: backgroundColor,
                              strokeStyle: backgroundColor,
                              lineWidth: 0,
                              hidden: false,
                              index: i,
                            };
                          });
                        },
                        usePointStyle: true,
                        padding: 20,
                        boxWidth: 8,
                        boxHeight: 8,
                        font: {
                          size: 11,
                        },
                      },
                      onClick: function () {
                        // Disable default legend click behavior
                        return null;
                      },
                    },
                    tooltip: {
                      backgroundColor: "rgba(0,0,0,0.8)",
                      padding: 12,
                      titleFont: {
                        size: 14,
                      },
                      bodyFont: {
                        size: 13,
                      },
                      callbacks: {
                        title: function (context) {
                          return context[0].label;
                        },
                        label: function (context) {
                          return `Package: ${context.raw} LPA`;
                        },
                      },
                    },
                  },
                  scales: {
                    x: {
                      beginAtZero: true,
                      grid: {
                        display: true,
                        color: "rgba(0,0,0,0.05)",
                      },
                      title: {
                        display: true,
                        text: "Package (LPA)",
                        font: {
                          size: 12,
                          weight: "bold",
                        },
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                      },
                      ticks: {
                        font: {
                          size: 11,
                        },
                        // Limit the number of visible ticks if there are many students
                        callback: function (val, index) {
                          // Show every other label if there are many students
                          return data.length > 8 && index % 2 !== 0
                            ? ""
                            : this.getLabelForValue(val);
                        },
                      },
                    },
                  },
                  animation: {
                    delay: (context) => context.dataIndex * 100,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
