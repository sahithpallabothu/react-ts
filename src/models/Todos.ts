class Todos {
    id:string;
    text:string;

    constructor(toDoId:string,toDoText:string){
        this.text = toDoText;
        this.id = toDoId;
    }
}

export default Todos;