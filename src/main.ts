import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section class="bg"></section>
<div class="loading-text">0%</div>

`

const loadingText = document.querySelector('.loading-text') as HTMLDivElement
const backgroundElement = document.querySelector('.bg') as HTMLElement

let currentValue: number = 0
let lastValueOfLoad: 99 = 99


let blurringInterval = setInterval(blurring, 30)

function blurring(): void {
    let currentValueBiggerThenlast = currentValue >= lastValueOfLoad
    currentValue++

    if (currentValueBiggerThenlast) {
        clearInterval(blurringInterval)
    }

    loadingText.innerHTML = `${currentValue}%`
    loadingText.style.opacity = scale(currentValue, 0, 100, 1, 0)
    backgroundElement.style.filter = `blur(${scale(currentValue, 0, 100, 30, 0)}px)`
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number): string => {
    return String(((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min)
}