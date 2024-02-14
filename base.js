var one = document.getElementById('one')
var two = document.getElementById('two')
var thr = document.getElementById('thr')
var fou = document.getElementById('fou')

function check() {
    if (one.value.toLowerCase() === 'добро') {
        if (two.value.toLowerCase() === 'пожаловать') {
            if (thr.value.toLowerCase() === 'в') {
                if (fou.value.toLowerCase() === 'будущее') {
                    document.getElementById('center').style.visibility = "hidden"
                    document.getElementById('fw').style.visibility = "visible"
                    document.getElementById("canvas").scrollIntoView();
                    alert("ПРАВИЛЬНО!")
                } else {
                    alert("Последнее слово неправильное!")
                }
            } else {
                alert("Третье слово неправильное!")
            }
        } else {
            alert("Второе слово неправильное!")
        }
    } else {
        alert("Первое слово неправильное!")
    }
}