function a() {
    let input = document.getElementById('Amount').value
    let form = document.getElementById('form').value
    let to = document.getElementById('to').value
    if (form === to) {
        if (form ==="VND")
            document.getElementById('Result').innerHTML = 'Giá: ' + input + 'VND'
        else {
            document.getElementById('Result').innerHTML = 'Giá: ' + input + 'USD'
        }
    } else if (form === "VND") {
        document.getElementById('Result').innerHTML = 'Giá: ' + input*23000 + 'VND'
    } else {
        document.getElementById('Result').innerHTML = 'Giá: ' + input/23000 + 'USD'

    }
}