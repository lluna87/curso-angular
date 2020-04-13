export class ToDoItem {

    public description: string;
    public completed: boolean;

    constructor(description: string) {
        this.description = description;
        this.completed = false;
    }
}