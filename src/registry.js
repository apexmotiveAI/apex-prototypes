const metaModules = import.meta.glob("./clients/*/_meta.json", { eager: true });
const protoModules = import.meta.glob("./clients/**/*.jsx");

function slugFromPath(path) {
  return path.split("/").pop().replace(/\.jsx$/, "");
}

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function getClients() {
  const clients = {};

  for (const [path, mod] of Object.entries(metaModules)) {
    const parts = path.split("/");
    const slug = parts[2];
    clients[slug] = { slug, ...mod.default, prototypes: [] };
  }

  for (const path of Object.keys(protoModules)) {
    const parts = path.split("/");
    const clientSlug = parts[2];
    const fileName = parts[parts.length - 1];
    if (fileName.startsWith("_")) continue;
    if (!clients[clientSlug]) continue;

    const protoSlug = slugFromPath(path);
    clients[clientSlug].prototypes.push({
      slug: protoSlug,
      title: titleFromSlug(protoSlug),
      fileName,
      path,
    });
  }

  return clients;
}

export function getProtoLoader(path) {
  return protoModules[path];
}
