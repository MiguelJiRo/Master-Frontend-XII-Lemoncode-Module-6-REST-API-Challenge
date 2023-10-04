export const mapToCollection = <A, B>(collection: A[], mapFn: (A) => B): B[] => {
  return Array.isArray(collection) ? collection.map(mapFn) : [];
}
