export async function api<T>(
  url: RequestInfo,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();

  return json;
}
