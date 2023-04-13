
alg_sel = document.getElementById("algs")

sum_eq = document.getElementById('sum_eq')
xor_eq = document.getElementById('xor_eq')
none_eq = document.getElementById('none_eq')
eqs = [sum_eq, xor_eq, none_eq]

/* Hides all the descripted algorithms. */
function hideAll() {
    for (eq of eqs) {
        eq.style.display = 'none'
    }
}

/* Shows a single algorithm description. */
function showEq(eq) {
    eq.style.display = 'block'
}


/* Shows a relevant algorithm description based on the user input. */
function changeAlg(e) {
    hideAll()
    switch(e.target.value) {
        case 'sum':
            showEq(sum_eq)
            break
        case 'xor':
            showEq(xor_eq)
            break
        case 'none':
            showEq(none_eq)
            break
    }
}

alg_sel.addEventListener("change", changeAlg)

