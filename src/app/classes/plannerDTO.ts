export class PlannerDTO{
    public id: number;
    public courseId: number;
    public classroomId: number;

    public constructor(id: number, courseId: number, classroomId: number){
        this.id = id;
        this.courseId = courseId;
        this.classroomId = classroomId;
    }
}