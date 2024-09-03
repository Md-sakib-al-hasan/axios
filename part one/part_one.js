const { error } = require("console");

async function getDtata() {
    try {
        axios.get('https://jsonplaceholder.typicode.com/todos/5')
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    catch (e) {
        console.log(e)
    }
}

getDtata();