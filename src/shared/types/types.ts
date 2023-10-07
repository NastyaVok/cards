export interface Item { 
    id: string,
    title: string,
    description: string,
}

export interface Task {
    name: string,
    items: Item[],       
}

export interface Tasks {
    [index: string]: Task,
}