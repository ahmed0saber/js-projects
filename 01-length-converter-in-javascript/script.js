const meterToUnitFactor = {
    Meters: 1,
    Kilometers: 0.001,
    Centimeters: 100,
    Inches: 39.37,
    Feets: 3.28084,
    Yards: 1.09361,
    Miles: 0.000621371,
}

const units = Object.keys(meterToUnitFactor)

const convertUnitToOthers = (currentValue, currentUnit) => {
    const valueInMeters = currentValue / meterToUnitFactor[currentUnit]
    units.forEach(unit => {
        if (unit !== currentUnit) {
            if (valueInMeters === 0) {
                document.getElementById(unit).value = ""
                return
            }

            document.getElementById(unit).value = valueInMeters * meterToUnitFactor[unit]
        }
    })
}

const displayInputs = () => {
    const inputsContainer = document.querySelector(".inputs-container")

    units.forEach(unit => {
        const inputWrapper = document.createElement("div")
        inputWrapper.classList.add("input-wrapper")
        inputWrapper.innerHTML = `
            <label for="${unit}">Enter length in ${unit} here</label>
            <input id="${unit}" type="number" placeholder="Enter length in ${unit} here">
        `
        inputWrapper.querySelector("input").addEventListener("input", function() {
            convertUnitToOthers(this.value, this.id)
        })

        inputsContainer.append(inputWrapper)
    })
}

const initLengthConverter = () => {
    displayInputs()

    document.querySelector(".reset-btn").addEventListener("click", () => {
        units.forEach(unit => {
            document.getElementById(unit).value = ""
        })
    })
}
initLengthConverter()
