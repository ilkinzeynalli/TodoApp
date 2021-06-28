export class Model{
    user: string;
    items: TodoItem[];

    constructor(){
        this.user = "Ilkin Zeynalli";
        this.items = [
            new TodoItem("Spor",false),
            new TodoItem("Kahvalti",true),
            new TodoItem("Kitap okumak",false),
            new TodoItem("Sinema",false)
        ]
    }

    
}


export class TodoItem{
    constructor(public description:string,public action:boolean){}
}