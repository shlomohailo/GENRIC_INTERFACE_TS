
function Genericsfunc<T>(MYTEXT: T, num: Number,): T {
    for (let i = 0; i < num; i++) {
        console.log(MYTEXT);

    }
    return MYTEXT;
}
Genericsfunc<string>("shlomo", 3);


function GrnricBoolean<T>(mytext: T, bool: boolean): any {
    if (bool == true) {
        return mytext;
    }

    return "bey";

}
GrnricBoolean<string>("hello", true);




interface IGame<T> {
    category: string;
    severalSteps: number;
    severalAttempts: number;
    version: T;
    namecompony?: string;
}


let game: IGame<string> = { category: "shlpomo", severalSteps: 9, severalAttempts: 23, version: "cgh", namecompony: "vnv" };
let game1: IGame<string> = { category: "shlpomo", severalSteps: 9, severalAttempts: 23, version: "cgh", namecompony: "vnv" };
let game2: IGame<string> = { category: "shlpomo", severalSteps: 9, severalAttempts: 23, version: "cgh", namecompony: "vnv" };
let game3: IGame<string> = { category: "shlpomo", severalSteps: 9, severalAttempts: 23, version: "cgh", namecompony: "vnv" };

console.log(game)



class SuperMario {
    nameACharacter: string;
    timeGamy: number;
    games: IGame<string>;
    constructor(_nameAcharacter: string, _timegamy: number, _games: IGame<string>) {
        this.nameACharacter = _nameAcharacter;
        this.timeGamy = _timegamy;
        this.games = _games;

    }
}


let superGame: SuperMario[] =
    [new SuperMario("VVV", 22, { category: "sport", severalSteps: 2, severalAttempts: 4, version: "2", namecompony: "shlp" }),
    new SuperMario("VVV", 22, { category: "sport", severalSteps: 2, severalAttempts: 4, version: "2", namecompony: "shlp" }),
    new SuperMario("VVV", 22, { category: "sport", severalSteps: 2, severalAttempts: 4, version: "2", namecompony: "shlp" })]

console.log(superGame)


class Fifa {
    firstteam: string;
    secondteam: string;
    win: boolean = true;
    fifa: IGame<string>;
    constructor(_firstteam: string, _secondteam: string, _win: boolean, _fifa: IGame<string>) {
        this.firstteam = _firstteam;
        this.secondteam = _secondteam;
        this.win = _win;
        this.fifa = _fifa;
    }

}

let fifagame: Fifa = new Fifa("barcelona", "real", false, { category: "sport", severalSteps: 4, severalAttempts: 3, version: "3", namecompony: "bbb" });
console.log(fifagame);


interface IPerson<T> {
    fullname: string;
    birtday: Date;
    id: T;
    gender?: string;
}

class School {
    namescool: string;
    nameteacher: string;
    person: IPerson<string>;
    constructor(_namescool: string, _nameteacher: string, _person: IPerson<string>) {
        this.namescool = _namescool;
        this.nameteacher = _nameteacher;
        this.person = _person;


    }
}

let school: School = new School("AMIT", "dalia", { fullname: "shlmo hailo", birtday: new Date(2 / 2 / 1999), id: "23", gender: "man" });
console.log(school)


class Workers {
    email: string;
    phone: number;
    charter: number;
    details: IPerson<string>;
    constructor(_email: string, _phone: number, _charter: number, _details: IPerson<string>) {
        this.email = _email;
        this.phone = _phone;
        this.charter = _charter;
        this.details = _details;
    }

}

let working: Workers = new Workers("ASDS@SADC", 33, 55, { fullname: "shlomo hailo", birtday: new Date(19 / 2 / 1999), id: "2", gender: "man" });
console.log(working)


class Actors {
    nickname: string;
    points: number;
    actors: IPerson<[string]>;
    constructor(_nickname: string, _points: number, _actors: IPerson<[string]>) {
        this.nickname = _nickname;
        this.points = _points;
        this.actors = _actors;
    }
}

let actr: Actors = new Actors("AVI", 44, { fullname: "avi akao", birtday: new Date(5 / 4 / 1666), id: ["sss"], gender: "fimale" });
console.log(actr)


interface IBilding<T> {
    adress: string;
    numberDoors: number;
    nameOrner: string;
    postalcode: T;
    parking?: boolean;

}

class Bilding {
    numberOfApartments: number;
    severalFloors: number;
    yard: boolean = true;
    homes: IBilding<string[]>;
    constructor(_numberofapraments: number, _severalfloors: number, _yard: boolean, _homes: IBilding<string[]>) {

        this.numberOfApartments = _numberofapraments;
        this.severalFloors = _severalfloors;
        this.yard = _yard;
        this.homes = _homes;

    }

}

let newbilding: Bilding = new Bilding(4, 5, false, { adress: "havradim", numberDoors: 23, nameOrner: "shlomo", postalcode: ["23", "asds"], parking: true })
class RealEstateCompany {
    namecompony: string;
    branchnumber: number;
    phonecompony: number;
    homess: IBilding<string[]>;
    constructor(_namecompony: string, _branchnumber: number, _phonecompony: number, _homess: IBilding<string[]>) {
        this.namecompony = _namecompony;
        this.branchnumber = _branchnumber;
        this.phonecompony = _phonecompony;
        this.homess = _homess;
    }

}



let newcompony: RealEstateCompany = new RealEstateCompany("DASFDS", 5, 66, { adress: "havradim", numberDoors: 23, nameOrner: "shlomo", postalcode: ["23", "asds"], parking: true })

class Kibbutz {
    namekibuz: string;
    farmarea: boolean;
    phonefarmarea: number;
    homeskibuz: IBilding<any[]>;
    constructor(_namekibuz: string, _farmarea: boolean, _phonefarmarea: number, _homeskibuz: IBilding<any[]>) {

        this.namekibuz = _namekibuz;
        this.farmarea = _farmarea;
        this.phonefarmarea = _phonefarmarea;
        this.homeskibuz = _homeskibuz;
    }
}
let newkibuz: Kibbutz = new Kibbutz("HAZOR", true, 15, { adress: "havradim", numberDoors: 23, nameOrner: "shlomo", postalcode: [23, "hfg"], parking: false });