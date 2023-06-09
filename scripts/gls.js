var rk4 = require('ode-rk4')
var math = require('mathjs')
var Plotly = require('plotly.js-dist-min')

/* Single iteration of the GLS. */
var m = math.matrix()
var lorenz_generalized = function (dydt, y, t) {
    temp = math.transpose(math.multiply(y[0], math.matrix([[0], [-y[2]], [y[1]]])))
    res = math.add(math.multiply(m, y), temp).valueOf()[0]
    dydt[0] = res[0]
    dydt[1] = res[1]
    dydt[2] = res[2]
}

/* The main generating function. Generates data using the ode solver. */
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

/* Transforms generated data from solveGLS to a better form. */
function unpack(rows, key) {
    return rows.map(function (row) { return row[key]; });
}


/* Generates data and then plots them on the screen. */
window.plotCoords = function (coord, width, height) {
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
        width: width,
        height: height
    });
}

