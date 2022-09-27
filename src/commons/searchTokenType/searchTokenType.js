export const searchTokenType = ({data, inputValue}) => {
    if(!(inputValue) ||  data.type.includes(inputValue)){
        return data
    } 
}