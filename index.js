window.onload = function () {
    console.log(document.getElementById('mytarot'))
    let myTarot = document.getElementById('mytarot')
    let tarotFn = () => {
        alert(9)
    }
    let login = () => {
        let reg = /\w{1-9}/
        let mytext = '000000'
        if(reg.test(mytext)){
            alert('登陆成功')
        }
    }
    myTarot.addEventListener('click', tarotFn, false)

}