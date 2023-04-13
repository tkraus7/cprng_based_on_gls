

function ch(x) {
    return isNumber(x) ? x : "invalid";
}

/* Updates the GLS equation once the user updates a GLS parameter. */
function updateEq(e) {
    let params_values = params.map(p=>p.value)
    plot_button.disabled = !params_values.every(isNumber)

    gls_eq.innerHTML = `\\[\\dot{x} = \\begin{bmatrix}
        ${ch(a11.value)} & ${ch(a12.value)} & 0 \\\\
        ${ch(a21.value)} & ${ch(a22.value)} & 0 \\\\
        0 & 0 & ${ch(l3.value)}
        \\end{bmatrix}x + x_1
        \\begin{bmatrix}
        0 & 0 & 0 \\\\
        0 & 0 & -1 \\\\
        0 & 1 & 0
        \\end{bmatrix}x\\]`

    MathJax.typeset();
}

form.addEventListener('change', updateEq)

/* Disables buttons if the parameters are invalid. */
function check_seq_p(e) {
    let init_points_values = init_points.map(p=>p.value)
    let len_step_off_values = len_step_off.map(p=>p.value)
    plot_button.disabled = !init_points_values.every(isNumber) || !len_step_off_values.every(isNumber)
    gen_b.disabled = !init_points_values.every(isNumber) || !len_step_off_values.every(isNumber)
}

form_seq_p.addEventListener('change', check_seq_p)

/* Helping function to set GLS parameters. */
function set_values(values) {
    for (let i = 0; i < params.length; i++) {
        params[i].value = values[i]
    }
}

/* Changes the GLS parameters based on the user selected preset. */
let lorenz_args = [-10, 10, 28, 1, "-8/3"]
let chen = [-35, 35, -7, 28, -3]
function update_params(e) {
    switch(e.target.value) {
        case 'lorenz':
            set_values(lorenz_args)
            break
        case 'chen':
            set_values(chen)
            break
    }
}

param_preset.addEventListener("change", update_params)
