const urlApi =
  "https://api-animal-dot-api-samples-423102.uc.r.appspot.com/api/animais";

export async function fidAll() {
  const requestInfo = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 12119065",
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

