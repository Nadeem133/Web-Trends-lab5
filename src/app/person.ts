export class Person {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;

    /* Add a method to this model called getAge() which will return an accurate age based on the
dateOfBirth 
    getAge(): number {
        let today: Date = new Date();
        let age: number = today.getFullYear() - this.dateOfBirth.getFullYear() ;

        if(this.dateOfBirth.getDate() > today.getDate()
        && this.dateOfBirth.getMonth() > today.getMonth()) {
            age--;
        }
        return age;
    }*/
}
