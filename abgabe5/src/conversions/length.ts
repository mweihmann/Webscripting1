import { ConversionResult } from '../types/units.js';

export function inchToCm(inch: number): ConversionResult {
    return {
        from: 'inch',
        to: 'cm',
        input: inch,
        output: inch * 2.54
    };
}

export function cmToInch(cm: number): ConversionResult {
    return {
        from: 'cm',
        to: 'inch',
        input: cm,
        output: cm / 2.54
    };
}

export function yardToMeter(yard: number): ConversionResult {
    return {
        from: 'yard',
        to: 'meter',
        input: yard,
        output: yard * 0.9144
    };
}

export function meterToYard(meter: number): ConversionResult {
    return {
        from: 'meter',
        to: 'yard',
        input: meter,
        output: meter / 0.9144
    };
}