import { Character} from "./character.api-model";

const url = `/api/character`;

export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const fetchUrl = url + '/' + id;
    return await fetch(fetchUrl).then(
      response => response.json()
    ).catch((error) => {
      console.error("Error fetching members: ", error);
    });
  } catch (error) {
    console.error("Error fetching character/s: ", error);
  }
}

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if(character.id) {
    return  await fetch(`${url}/${character.id}`, {
      method: 'PUT', 
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(character),
    }).then((response) => {
      return response.ok;
    }).catch((error) => {
      return false;
    });
  }
  else {
    return await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(character),
    }).then((response) => {
      return response.ok;
    }).catch((error) => {
      console.error("Error doing POST fetch: ", error);
      return false;
    });
  }
}

export const deleteCharacter = async (id: number): Promise<boolean> => {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  })

  return response.ok ? true : false;
}