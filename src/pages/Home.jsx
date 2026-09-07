import { Link } from "react-router-dom";
import { getClients } from "../registry";

const clients = getClients();

export default function Home() {
  const list = Object.values(clients);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Prototypes</h1>
          <p className="text-sm text-gray-500 mt-1">
            {list.length} client{list.length !== 1 ? "s" : ""} &middot; {list.reduce((n, c) => n + c.prototypes.length, 0)} prototypes
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        {list.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-sm">
            No clients yet. Add a folder to <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">src/clients/</code> to get started.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {list.map((client) => (
              <Link
                key={client.slug}
                to={`/${client.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: client.color || "#6b7280" }}
                  />
                  <div className="min-w-0">
                    <h2 className="font-semibold text-gray-900 truncate group-hover:text-gray-700">
                      {client.name}
                    </h2>
                    <p className="text-sm text-gray-400 mt-0.5">
                      {client.prototypes.length} prototype{client.prototypes.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
