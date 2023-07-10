export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=x8JD5CHVydv0VQ4Lld9pUDBc3Ly4t6ZC&q=${category}&limit=20`;
  const resp = await fetch(url);

  const { data } = await resp.json();
  // console.log(data);

  const gifts = data.map((element) => ({
    id: element.id,
    title: element.title,
    url: element.images.downsized_medium.url,
  }));
  console.log(gifts);
  return gifts;
};
