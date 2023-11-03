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
}`
