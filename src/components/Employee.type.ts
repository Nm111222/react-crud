export interface IEmployee {
    id:string,
    firstName:string,
    lastName:string,
    email:string
}

export const dummyEmployeeList: IEmployee[] = [
    {
    id: new Date().toJSON().toString(),
    firstName: "Nilesh",
    lastName: "Mishra",
    email :"nkm1507999@gmail.com"

},
];

export enum PageEnum {
    list,
    add,
}