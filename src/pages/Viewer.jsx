import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getClients, getProtoLoader } from "../registry";
import ErrorBoundary from "../components/ErrorBoundary";
import IframeRenderer from "../components/IframeRenderer";

const clients = getClients();

export default function Viewer() {
  const { clientSlug, protoSlug } = useParams();
  const client = clients[clientSlug];
  const proto = client?.prototypes.find((p) => p.slug === protoSlug);

  const [Component, setComponent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!proto) return;
    setLoading(true);
    const loader = getProtoLoader(proto.path);
    if (loader) {
      loader().then((mod) => {
        setComponent(() => mod.default);
        setLoading(false);
      });
    }
  }, [proto?.path]);

  if (!client || !proto) return <Navigate to={client ? `/${clientSlug}` : "/"} replace />;

  return (
    <div className="fixed inset-0 bg-white overflow-hidden">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="w-5 h-5 border-2 border-gray-200 border-t-gray-500 rounded-full animate-spin" />
        </div>
      ) : (
        <IframeRenderer>
          <ErrorBoundary>
            {Component && <Component />}
          </ErrorBoundary>
        </IframeRenderer>
      )}
    </div>
  );
}
