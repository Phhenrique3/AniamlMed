const urlApi = import.meta.env.VITE_API_URL;
const apiToken = import.meta.env.VITE_API_TOKEN;

export async function findAll() {
  const requestInfo = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + apiToken,
    },
  };

  const responseHttp = await fetch(urlApi, requestInfo);

  if (responseHttp.ok) {
    return await responseHttp.json();
  } else {
    console.log("falha de consulta dados erro 400");
    throw new Error("falha de consulta dados erro 400");
  }
}
