
export default async function Api(url, data = {}) {
  try {
    if (!data.headers) data.headers = {};

    const response = await fetch(url, data);
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  } catch (err) {
    return Promise.reject(err);
  }
}