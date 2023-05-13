
function putValues(fields, values) {
    for (let i = 0; i < fields.length; i++) {
        fields[i].value = values[i]
    }
}

/* Recovers form values based on the popped history state. */
let defaultState = [['-10', '10', '28', '1', '-8/3'], ['1', '1', '1'], ['5000', '0.01', '100']]
function recoverHistory(e) {
    let state = e.state == null ? defaultState : e.state

    putValues(params, state[0])
    putValues(init_points, state[1])
    putValues(len_step_off, state[2])
    updateEq()
    check_seq_p()
}

window.addEventListener("popstate", recoverHistory)