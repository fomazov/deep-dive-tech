export const http = async (count = 1): Promise<{}> => {
  const response = await fetch(`/api/creatures?count=${count}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();

  return result;
};
