export const sortingByText = (data, value) => {
    switch (value) {
        case 'descendingText':
            return data.sort((a,b) => b.name.localeCompare(a.name));
        case 'ascendingText':
            return data.sort((a,b) => a.name.localeCompare(b.name));
        default:
            return data
    }
}