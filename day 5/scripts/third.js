fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data))


fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    body:JSON.stringify({
        userId:243,
        title:"hello",
    body:'hi ppl',
    })
}).then(response=>response.json())
.then(data=>console.log(data))