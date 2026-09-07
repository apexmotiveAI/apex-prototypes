import { Link, useParams, Navigate } from "react-router-dom";
import { getClients } from "../registry";

const clients = getClients();

export default function Client() {
  const { clientSlug } = useParams();
  const client = clients[clientSlug];

  if (!client) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Link to="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
            &larr; All clients
          </Link>
          <div className="flex items-center gap-3.5 mt-3">
            <div
              className="w-9 h-9 rounded-lg flex-shrink-0"
              style={{ backgroundColor: client.color || "#6b7280" }}
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{client.name}</h1>
              <p className="text-sm text-gray-500">
                {client.prototypes.length} prototype{client.prototypes.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-6">
        {client.prototypes.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-sm">
            No prototypes yet. Drop a <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.jsx</code> file into{" "}
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">src/clients/{clientSlug}/</code>
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100 overflow-hidden">
            {client.prototypes.map((proto) => (
              <Link
                key={proto.slug}
                to={`/${clientSlug}/${proto.slug}`}
                className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors group"
              >
                <div className="min-w-0">
                  <div className="font-medium text-gray-900 truncate">{proto.title}</div>
                  <div className="text-xs text-gray-400 mt-0.5 font-mono">{proto.fileName}</div>
                </div>
                <svg
                  className="w-4 h-4 text-gray-300 group-hover:text-gray-500 flex-shrink-0 ml-4 transition-colors"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
