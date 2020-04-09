//Interfaces

interface IAnimal {
    name: string;
    color: string;
}

const dog: IAnimal = {
    name: 'doko',
    color: 'red'
}

interface OnInit {
    ngOnInit(): void;
}

class MyComponent implements OnInit {
    ngOnInit(): void {
        console.log('interface method')
    }
}