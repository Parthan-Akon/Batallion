export class DataService {

    getEvents(){
        return DATA;
    }
}
const DATA = [
    {
        id:1,
        name:'wild-bohr',
        price:1200,
        instock: 'yes',
        image:'image',
        category:'silencer'
    },
    {
        id:2,
        name: 'shark',
        price:1500,
        instock: 'yes',
        image: 'image',
        category:'silencer'
    },
    {
        id:3,
        name: 'mini punjab',
        price: 3200,
        instock: 'no',
        image: 'nil',
        category:'silencer'
    },
    {
        id:4,
        name: 'short bottle',
        price: 2000,
        instock: 'yes',
        image: 'nil',
        category:'silencer'
    },
    {
        id:5,
        name: 'Jacket',
        price: 7000,
        instock: 'yes',
        image:'nil',
        category:'ridingGears'
    },
    {
        id:6,
        name: 'windshield',
        price: 750,
        instock:'yes',
        image:'nil',
        category: 'accessories'
    }
]