const calculate = () => {
    const number = document.getElementById('temp').value
    const tempselect = document.getElementById('temp_diff')
    const value = temp_diff.options[tempselect.selectedIndex].value
    const celtofah = (cel) => {
        let fahren = Math.round((cel * 9 / 5) + 32)
        return fahren
    }
    const fehtocel = (feh) => {
        let calci = Math.round((feh - 32) * 5 / 9)
        return calci
    }
    let result;
    if (value == 'cel') {
        result = celtofah(number)
        document.getElementById('resultcon').innerHTML = `= ${result} Fahrenheit`
    } else {
        result = fehtocel(number)
        document.getElementById('resultcon').innerHTML = `= ${result} Celcius`
    }
}
