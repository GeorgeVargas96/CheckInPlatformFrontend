export class ClassroomDTO{
    public id: number;
    public name: string;
    public capacity: number;

    public constructor(id: number, name: string, capacity: number){
        this.id = id;
        this.name = name;
        this.capacity = capacity;
    }
}