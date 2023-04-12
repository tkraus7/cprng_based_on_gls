var rk4 = require('ode-rk4')
var math = require('mathjs')
var Plotly = require('plotly.js-dist-min')

var m = math.matrix()
var lorenz_generalized = function (dydt, y, t) {
    temp = math.transpose(math.multiply(y[0], math.matrix([[0], [-y[2]], [y[1]]])))
    res = math.add(math.multiply(m, y), temp).valueOf()[0]
    dydt[0] = res[0]
    dydt[1] = res[1]
    dydt[2] = res[2]
}

window.solveGLS = function (args, init_p, length, step, offset) {
    m = math.matrix([[args[0], args[1], 0], [args[2], args[3], 0], [0, 0, args[4]]])
    var integrator = rk4(init_p, lorenz_generalized, 0, step)
    y = []
    for (i = 0; i < length + offset; i++) {
        y.push(myCopy3(integrator.y))
        integrator.step()
    }
    return y.slice(offset)
}

function unpack(rows, key) {
    return rows.map(function (row) { return row[key]; });
}

function plotCoords(coord) {
    var x = unpack(coord, 0);
    var y = unpack(coord, 1);
    var z = unpack(coord, 2);

    Plotly.newPlot('graph', [{
        autosize: true,
        type: 'scatter3d',
        mode: 'lines',
        x: x,
        y: y,
        z: z,
        opacity: 1,
        line: {
            width: 6,
            reversescale: false
        }
    }], {
        // width: 1100,
        // height: 1100
    });
}

plot_button.addEventListener("click", e => {
    plotCoords(solveGLS(params.map(read_and_eval), 
                        init_points.map(read_and_eval),
                        read_and_eval(len), 
                        read_and_eval(step),
                        read_and_eval(offset)))
})

// plotCoords(solveGLS([-10, 10, 28, 1, -8/3], [1, 1, 1], 5000, 0.01, 100))