import { useEffect, useState } from "react";
import Papa from "papaparse";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/src/data/creators.csv")
      .then((response) => response.text())
      .then((text) => {
        const parsed = Papa.parse(text, { header: true });
        setData(parsed.data);
      });
  }, []);

  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-4">Creator Launchpad Insights</h1>
      <p className="mb-8 text-gray-600">
        Comparing engagement trends among community college educators on YouTube.
      </p>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="Creator Name" hide />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Subscribers" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;
