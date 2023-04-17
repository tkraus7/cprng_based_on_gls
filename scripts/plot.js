
let graph_div = document.getElementById('graph')

plot_button.addEventListener("click", e => {
    plotCoords(solveGLS(params.map(read_and_eval), 
                        init_points.map(read_and_eval),
                        read_and_eval(len), 
                        read_and_eval(step),
                        read_and_eval(offset)), graph_div.offsetWidth, 'auto')
    document.getElementsByClassName('svg-container')[0].style.margin = "0 auto"
})
