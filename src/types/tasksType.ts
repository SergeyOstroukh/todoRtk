export type RequestTaskType={
    items:ItemTask[]
    totalCount:number
    error:string
}

export type ItemTask={
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
export type ResponceTaskType={
    todolistId:string
}