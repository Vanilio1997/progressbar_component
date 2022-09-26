export const searchTokenType = ({data, inputValue}) => {
    console.log(data);
    if(!(inputValue) ||  data.type.includes(inputValue)){
        console.log('hello');
        return data
    } 
}