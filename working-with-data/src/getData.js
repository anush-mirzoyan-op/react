async function getData() {
    const obj = await fetch(`https://jsonplaceholder.typicode.com/users`) 

    const parsedObj = await obj.json()

    return parsedObj
}


export default getData