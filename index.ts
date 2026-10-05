// class Contact{
    
//     private _name: string;
//     private _phone: string;

// // Encapsulation:properties are private and hidden

//     constructor(name: string, phone: string) {
//         this._name = name
//         this._phone = phone
//     }
// // getters for phone
//     public get name(): string {
//         return this._name;
//     }

//     public get phone(): string {
//         return this._phone;
//     }
// // setters for phone
//     public set phone(newPhone:string) {
//         if (newPhone.length >= 7) {
//             this._phone = newPhone;
//         } else {
//             console.log("Invalid phone number")
//         }
//     }

//     public display_info(): void {
//         console.log(`Name: ${this._name} | Phone: ${this._phone}`)
//     }
// }

// let contact = new Contact("John","0182829")
// // contact= new Contact("Mark", "0199202")


// // console.log("Your new contact is", contact.name, "with phone number", contact.phone)
// // contact.display_info()
//                         // personal contact

// class PersonalContact extends Contact {
//     private _relationship: string;

//     constructor(name: string, phone: string, relationship: string){
//         super(name, phone)
//         this. _relationship = relationship
//     }


// public override display_info(): void {
//      console.log(`[Personal] Name: ${this.name} | Phone: ${this.phone} | ${this._relationship}`)
//     }
// }
//                 //   Business contact
// class BusinessContact extends Contact {
//     private _company: string;
//     private _email: string;

//     constructor(name: string, phone: string, company:string, email:string) {
//     super(name,phone)
//     this. _company = company;
//     this. _email = email;
//     }

// public override display_info(): void {
//      console.log(`[Business] Name: ${this.name} | Phone: ${this.phone} | ${this._company} | ${this._email}`)
// }
// }

// //  Address Book
// class AddressBook {
//     private contacts: Contact[] = []    // related it to our parent class

//     public addContact(contact: Contact): void {
//         this.contacts.push(contact);
//         console.log(`Successfully added ${contact.name} to the address book.`);
//     }

// //    display all contacts
// public displayAll(): void {
//     console.log("\n---Address Book Contact---");
//     this.contacts.forEach(contact => {
//         contact.display_info();
//     });

// }

// }

// const addressBook = new AddressBook()
// addressBook.addContact(contact)
// console.log(addressBook)




// Assignment
// class Bank {
//     protected balance: number;

//     constructor(balance: number) {
//         this.balance = balance;
//     }

// }


// class Saving extends Bank {

// }

// let bank = new Bank(1000);





