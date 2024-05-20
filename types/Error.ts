export type ErrorT = { error: Error & { digest?: string }; reset: () => void };
