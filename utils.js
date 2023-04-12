// gls params
let a11 = document.getElementById('a11')
let a12 = document.getElementById('a12')
let a21 = document.getElementById('a21')
let a22 = document.getElementById('a22')
let l3 = document.getElementById('l3')

let params = [a11, a12, a21, a22, l3]

let x0 = document.getElementById('x0')
let y0 = document.getElementById('y0')
let z0 = document.getElementById('z0')
let len = document.getElementById('len')
let step = document.getElementById('step')
let offset = document.getElementById('offset')

let init_points = [x0, y0, z0]
let len_step_off = [len, step, offset]

let plot_button = document.getElementById('b1')
let gls_eq = document.getElementById('gls_eq')
let form = document.getElementById('gls_p')
let form_seq_p = document.getElementById('seq_p')
let param_preset = document.getElementById('presets')

let gen_b = document.getElementById("gen_b")

function myCopy3(arr) {
    return [arr[0], arr[1], arr[2]]
}

let regex = /^[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*$/
function isNumber(x) {
    return x.match(regex) != null
}

function eval_number(x) {
    return parseFloat(eval(x))
}

function read_and_eval(elem) {
    elem = parseFloat(eval(elem.value))
    return elem
    // return isNaN(elem) ? 0 : elem
}

function decToBin(x) {
    return Number(x).toString(2).padStart(8, '0')
}

function myModulo(x, y) {
    return x - y * Math.floor(x / y)
}
