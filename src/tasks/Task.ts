export default abstract class Task {
    abstract getEntity(id: string): any
    abstract getEntities(): any[]
}
