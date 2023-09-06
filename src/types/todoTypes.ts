export type todoResponseType = {
    id: string
    addedDate: string
    order: number
    title: string
}

export type todoListResponse={
    data:{
        item:todoResponseType
    }
    resultCode:number
    messages:string[]
}
export type todoListRequest ={
    title:string
}