function a() {
    let input = document.getElementById('Amount').value
    let form = document.getElementById('form').value
    let to = document.getElementById('to').value
    if (form === to) {
        if (form ==="VND")
            document.getElementById('Result').innerHTML =input
        else {
            document.getElementById('Result').innerHTML =input
        }
    } else if (form === "USD") {
        document.getElementById('Result').innerHTML = input*23000
    } else {
        document.getElementById('Result').innerHTML = input/23000

    }
}