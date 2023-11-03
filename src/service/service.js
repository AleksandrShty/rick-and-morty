const url = "https://rickandmortyapi.com/graphql";

export const makeRequest = async (query) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ query })
    }).then((res) => res.json());
};

export const reqAllCharacters = `query {
    characters(page: 1) {
        results {
            id
            name
            image
            gender
            status
        }
    }
}`;
