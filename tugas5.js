// ====== Tugas 5 JavaScript =====

console.log("1 sampai 20")
for(let i=1; i<=20; i++) {
  console.log(i)
}

console.log("Bilangan kelipatan 3")
function init() {
  for(var i=1; i<=20; i++) {
    if(i%3 === 0) {
      console.log(i)
    }
  }
}

init()