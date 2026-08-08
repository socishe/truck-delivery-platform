export default function DriverDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Driver Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Status</h3>
          <p className="text-lg font-bold text-gray-900">Offline</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Available Deliveries</h3>
          <p className="text-3xl font-bold text-primary-600">0</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Today's Earnings</h3>
          <p className="text-3xl font-bold text-green-600">R 0</p>
        </div>
      </div>
    </div>
  );
}
