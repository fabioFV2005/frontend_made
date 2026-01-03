const API_URL = "http://localhost:3000/cotizaciones";

export async function crearCotizacion(data) {
  const formData = new FormData();

  for (const key in data) {
    formData.append(key, data[key]);
  }

  const response = await fetch(API_URL, {
    method: "POST",
    body: formData
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Error al enviar cotización");
  }

  return result;
}
