//your JS code here. If required.
async function callme(event){
    event.preventDefault();
	let prom = await new Promise((resolve)=>{
		setTimeout(()=>{
            resolve(document.getElementById("text").value)
        },document.getElementById("delay").value)
		
	});
	document.getElementById("output").innerText = prom;
	
	
}

