
/* Combines a single GLS state using the sum algoritm. */
function combineRowSum(row) {
    let sum = (row[0] + row[1] + row[2])
    return myModulo(Math.round(sum * (10 ** 14)), 256)
}

/* Combines a single GLS state using the xor algoritm. */
function combineRowXor(row) {
    row = row.map(x => myModulo(Math.round(x * (10 ** 14)), 256))
    return row[0] ^ row[1] ^ row[2]
}

/* Combines a single GLS state using the none algoritm. */
function combineRowNone(row) {
    return row.map(x => myModulo(Math.round(x * (10 ** 14)), 256))
}

/* Generates data using the user selected algorithm. */
function generateSeq() {
    let data = solveGLS(params.map(read_and_eval),
        init_points.map(read_and_eval),
        read_and_eval(len),
        read_and_eval(step),
        read_and_eval(offset))

    switch (alg_sel.value) {
        case 'sum':
            res = data.map(combineRowSum)
            return res
        case 'xor':
            res = data.map(combineRowXor)
            return res
        case 'none':
            res = data.map(combineRowNone)
            return res.flat()
    }
}

/* Downloads data to a file. */
function download(data, filename, type) {
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob)
        window.navigator.msSaveOrOpenBlob(file, filename);
    else {
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

/* Returns a preset name for the generated file. */
function generatePrompt() {
    let preset = param_preset.value
    return alg_sel.value + '_' + preset + init_points.map(read_and_eval).join('-')
        + '-' + read_and_eval(len)
}

/* Converts generated data to binary and prompts the user about the file name.
Then it saves the binary data to a file */
function generateToFile() {
    let seq = generateSeq().map(decToBin).join('')
    let filename = prompt('Save as (.txt):', generatePrompt())
    if (filename != null) {
        filename = filename.split(' ').join('')
        download(seq, filename + '.txt', 'test/plain')
    }
}

gen_b.addEventListener('click', generateToFile)

/* Helping funtion for quickly generating data */
function myGenerate() {
    let data = solveGLS([-10, 10, 28, 1, -8 / 3], [3.3918, 6.7089, 10.1519], 1000000, 0.01, 0)
    let data_sum = data.map(combineRowSum).map(decToBin).join('')
    let data_xor = data.map(combineRowXor).map(decToBin).join('')
    let data_none = data.map(combineRowNone)
    data_none = data_none.flat().map(decToBin).join('')

    download(data_sum, 'sum_lorenz_in_1000000.txt', 'test/plain')
    download(data_xor, 'xor_lorenz_in_1000000.txt', 'test/plain')
    download(data_none, 'none_lorenz_in_1000000.txt', 'test/plain')
}

/* Helping funtion for quickly generating data */
function myGenerateChen() {
    let data = solveGLS([-35, 35, -7, 28, -3], [2.0023,2.8771,9.9668], 1000000, 0.01, 0)
    let data_sum = data.map(combineRowSum).map(decToBin).join('')
    let data_xor = data.map(combineRowXor).map(decToBin).join('')
    let data_none = data.map(combineRowNone)
    data_none = data_none.flat().map(decToBin).join('')

    download(data_sum, 'sum_chen_in_1000000.txt', 'test/plain')
    download(data_xor, 'xor_chen_in_1000000.txt', 'test/plain')
    download(data_none, 'none_chen_in_1000000.txt', 'test/plain')
}
