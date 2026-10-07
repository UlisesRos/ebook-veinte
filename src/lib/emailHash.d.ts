export const ITERACIONES: number;
export function normalizarEmail(email: string): string;
export function esEmailValido(email: string): boolean;
export function hashEmail(email: string, sal: string): Promise<string>;
