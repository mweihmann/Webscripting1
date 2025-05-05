import {
    inchToCm,
    cmToInch,
    yardToMeter,
    meterToYard,
} from "./conversions/length.js";
import { updateResultById } from "./ui/dom.js";
  
document.getElementById("inchToCmBtn")?.addEventListener("click", () => {
    const input = document.getElementById("inchInput") as HTMLInputElement;
    const inch = parseFloat(input.value);
    const result = inchToCm(inch);
    updateResultById("inchToCmResult", `${result.input} ${result.from} = ${result.output.toFixed(2)} ${result.to}`);
});
  
document.getElementById("cmToInchBtn")?.addEventListener("click", () => {
    const input = document.getElementById("cmInput") as HTMLInputElement;
    const cm = parseFloat(input.value);
    const result = cmToInch(cm);
    updateResultById("cmToInchResult", `${result.input} ${result.from} = ${result.output.toFixed(2)} ${result.to}`);
});

document.getElementById("yardToMeterBtn")?.addEventListener("click", () => {
    const input = document.getElementById("yardInput") as HTMLInputElement;
    const yard = parseFloat(input.value);
    const result = yardToMeter(yard);
    updateResultById("yardToMeterResult", `${result.input} ${result.from} = ${result.output.toFixed(2)} ${result.to}`);
});

document.getElementById("meterToYardBtn")?.addEventListener("click", () => {
    const input = document.getElementById("meterInput") as HTMLInputElement;
    const meter = parseFloat(input.value);
    const result = meterToYard(meter);
    updateResultById("meterToYardResult", `${result.input} ${result.from} = ${result.output.toFixed(2)} ${result.to}`);
});