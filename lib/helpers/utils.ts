import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using clsx and tailwindcss.
 *
 * @param {ClassValue[]} inputs - The class values to merge.
 * @returns {string} The merged class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Checks if an array is empty, null, or undefined.
 *
 * @template T - The type of the elements in the array.
 * @param {T[] | null | undefined} arr - The array to check.
 * @returns {boolean} True if the array is empty, null, or undefined, false otherwise.
 */
export function isEmptyArr<T>(arr: T[] | null | undefined): boolean {
  return !arr?.length;
}
