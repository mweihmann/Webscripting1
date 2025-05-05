export type LengthUnit = 'inch' | 'cm' | 'yard' | 'meter';

export interface ConversionResult {
  from: LengthUnit;
  to: LengthUnit;
  input: number;
  output: number;
}