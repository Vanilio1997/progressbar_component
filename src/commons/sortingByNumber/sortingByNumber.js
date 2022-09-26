export const sortingByNumber = (data, value) => {
    switch(value){
        case 'descendingNumber':
            return data.sort((a,b) => b.volume-a.volume)
        case 'ascendingNumber':
            return data.sort((a,b) => a.volume-b.volume)
        default:
            return data
    }
}