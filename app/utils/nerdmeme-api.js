import { API_URL as url } from '@env';

export const getMeme= async() => {
  const res = await fetch(url);
  const json = await res.json();

  if(!res.ok) return {error: 'ERROR no meme for you!'};
 
  return json;
}
