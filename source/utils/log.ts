import { isDev } from './env';

export function devWarning(component: string, message: string): void {
  if (isDev) {
    console.warn(`[ppfish-mobile: ${component}] ${message}`);
  }
}

export function devError(component: string, message: string) {
  if (isDev) {
    console.error(`[ppfish-mobile: ${component}] ${message}`);
  }
}
