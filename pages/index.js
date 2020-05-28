alert("olá");

async function loadTest () {
    let load = await fetch("http://localhost:8000/"); 
    let loadTwo = await load.json();  
    console.log(loadTwo);
}

loadTest();
