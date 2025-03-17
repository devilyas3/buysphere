import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export const formatNumberWithDecimal = (number: number): string => {
  const [int, decimal] = number.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : int;
};

// PROMPT:[ChatGPT] create toSlung ts arrow function that convert text to lowercase, remove non-word,
//  non-whitespace, non-hypehen chars, replace whitespace, trim leading hyphens and trim trailinghyphens.

export const toSlug = (text: string): string =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
