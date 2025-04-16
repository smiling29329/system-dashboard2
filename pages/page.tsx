import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import dynamic from "next/dynamic";

const EChartComponent = dynamic(() => import("../components/EChartComponent"), { ssr: false });

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <Header />
        <div className="mt-4">
          <EChartComponent />
        </div>
      </main>
    </div>
  );
}
