import { API_URL as url } from '@env';

export const getMeme= async() => {
  const res = await fetch('http://10.0.2.2:7890/api/v1/meme');
  const json = await res.json();

  if(!res.ok) throw 'ERROR no meme for you!';
  console.log(json)
  return json;
}
