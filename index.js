let saveEl = document.getElementById("save-element")
let countEl = document.getElementById("count-element")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
}
function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    console.log(count)
    count = 0;
}