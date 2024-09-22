import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const shortNumber = (num: number) => {
    if (num > 999 && num < 999999) {
        return (num / 1000).toFixed(1) + 'K';
    } else if (num > 999999) {
        return (num / 1000000).toFixed(1) + 'M';
    } else {
        return num;
    }
}

export const formatCurrency = (num: number) => {
    return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export const camelCaseToSentenceCase = (str: string) => {
    return str
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
