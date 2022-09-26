export const tableData = [
    {id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20},
    {id: 2, name: 'NFT-Flowershop', status: 'yellow', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0},
    {id: 3, name: 'Tokenhunt.club', status: 'green', type: 'THC', conditions: 'x2,1 years', volume: 120000, roi: 23, free: 2, hedge: 20},
    {id: 4, name: 'Web3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0},
]


const tokenTypeObj = {}
const projectsTypeObj = {}
export const tokenTypeArr = []
export const projectsTypeArr = []

tableData.forEach((item) => {
    if(!(projectsTypeObj.hasOwnProperty(item.name))){
        projectsTypeObj[item.name] =  { filterType: item.name }
        projectsTypeArr.push({ filterType: item.name , isChecked: true, id:item.id})
    }
    if(!(tokenTypeObj.hasOwnProperty(item.type))){
        tokenTypeObj[item.type] =  { filterType: item.type }
        tokenTypeArr.push({ filterType: item.type , isChecked: true, id:item.id})
    }
})
