export const http = async (): Promise<{}> => {
  const response = await fetch("/api/creatures", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();

  return result;
};
