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

export async function insert(nome, dataNascimento, sexo, especie) {

  console.log(insert)
  const requestInfo = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json", // Adiciona isso aqui!
      Authorization: "Bearer " + apiToken,
    },
    body:JSON.stringify({ nome, dataNascimento, sexo, especie }),
  };

  const responseHttp = await fetch(urlApi, requestInfo);

  if (responseHttp.ok) {
    return await responseHttp.json();
  } else {
    console.log("falha de consulta dados erro 400");
    throw new Error("falha de consulta dados erro 400");
  }
}
