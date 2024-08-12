let buttonsCalc = document.querySelectorAll(".kalc-number, .kalc-operator")
let buttonClear = document.querySelector(".kalc-clear")
let buttonEqual = document.querySelector(".kalc-equal")
let buttonDelete = document.querySelector(".kalc-delete")
let buttonDot = document.querySelector(".kalc-dot")
let ecran = document.querySelector(".kalc-screen")

let kalculator = {
    print: (element) => {
        if(!isNaN(element)){
            if(ecran.value === "0")
                ecran.value = element
            else
                ecran.value += element
        } else if(ecran.value === "Error"){
            ecran.value = element
        } else
            ecran.value += element
    },
    clear: () => {
        ecran.value = "0"
    },
    delete: () => {
        ecran.value = ecran.value.slice(0, -1)
    },
    calculate: () => {
        try {
            ecran.value = eval(ecran.value)
        } catch (error){
            ecran.value = "Error"
        }
    }
}

buttonsCalc.forEach((btn) => {
    btn.addEventListener("click", () => kalculator.print(btn.textContent))
})

buttonDot.addEventListener("click", () => {
    let currentValue = ecran.value
    let tabNum = currentValue.split(/[\+\-\/\*]/)
    let lastNum = tabNum.slice(-1)[0]
    console.log(lastNum)
    console.log(tabNum)
    if (lastNum === "" || lastNum.includes('.'))
        return
    ecran.value += "."
});

buttonClear.addEventListener("click", () => {
    kalculator.clear()
});

buttonDelete.addEventListener("click", () => {
    kalculator.delete()
});

buttonEqual.addEventListener("click", () => {
    kalculator.calculate()
});
