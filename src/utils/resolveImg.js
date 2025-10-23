// Safe resolver for images stored in public/ — works with PUBLIC_URL and absolute/relative paths
export default function resolveImg(path) {
  if (!path) return path;
  if (path.startsWith('http')) return path;
  const prefix = process.env.PUBLIC_URL || '';
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${prefix}${p}`;
}
