import { API_URL as url } from '@env';

export const getMeme= async() => {
  console.log(url, 'url')
  const res = await fetch(url);
  const json = await res.json();

  if(!res.ok) return {error: 'ERROR no meme for you!'};
 
  return json;
}
