export const IDLE = 'idle'
export const PENDING = 'pending'
export const RESOLVED = 'success'
export const REJECTED = 'error'

export type Status = typeof IDLE | typeof PENDING | typeof RESOLVED | typeof REJECTED
