export class DataService {
    getData;

    constructor() {
        this.getData = new Promise((resolve, reject)  => {
            // eslint-disable-next-line
            resolve([
                {
                    id: 1,
                    title: "Trilogia Stapanul Inelelor",
                    author: "J.R.R. Tolkien",
                    rented: false
                },
                {
                    id: 2,
                    title: "Codul lui DaVinci",
                    author: "Dan Brown",
                    rented: false
                },
                {
                    id: 3,
                    title: "Hoțul de cărți",
                    author: "Markus Zusak",
                    rented: true
                },
                {
                    id: 4,
                    title: "Cronicile din Narnia – Leul",
                    author: "C.S.Lewis",
                    rented: false
                },
                {
                    id: 5,
                    title: "Harry Potter și piatra filozofală",
                    author: "J.K. Rowling",
                    rented: false
                },
                { id: 6, title: "Hobbitul", author: "J.R.R. Tolkien", rented: false },
                {
                    id: 7,
                    title: "Don Quixote",
                    author: "Miguel de Cervantes",
                    rented: false
                },
                { id: 8, title: "Moby Dick", author: "Herman Melville", rented: true }
                // eslint-disable-next-line
            ]), 
            reject("You have an error, Huston!")
        });
    }
}
