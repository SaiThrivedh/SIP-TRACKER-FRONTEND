import Cards from "../components/dashboard/Cards";
import Payments from "../components/dashboard/Payments";
import Transactions from "../components/dashboard/Transactions";

export default function DashboardHome() {
  return (
    <div className="h-screen overflow-hidden bg-gray-50">
      
      <div className="h-full p-6 flex flex-col gap-6 box-border">
        
        <div className="flex-shrink-0">
          <Cards />
        </div>

        <div className="flex-shrink-0">
          <Payments />
        </div>

        <div className="flex-1 min-h-0">
          <Transactions />
        </div>

      </div>
    </div>
  );
}