
// console.log("1")
// console.log("2")


// setTimeout(() => {
//     console.log("3")
// }, 0);

// console.log("4")


async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
}

getData();