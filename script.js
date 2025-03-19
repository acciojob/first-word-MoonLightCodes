document.getElementById('btn').addEventListener('click',()=>{
	document.getElementById('res').textContent=firstWord(document.getElementById('int').value);
})
function firstWord(a) {
	return a.split(' ')[0];
}
