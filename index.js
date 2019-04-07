window.onload = function () {
    console.log(document.getElementById('mytarot'))
    let myTarot = document.getElementById('mytarot')
    let tarotFn = () => {
        alert(9)
    }
    myTarot.addEventListener('click', tarotFn, false)

}