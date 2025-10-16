export const getRandom = (max: number, min = 1) => Math.ceil(Math.random() * (max - min) + min);

export const sleep = (cb: () => void, time = 2000) => setTimeout(cb, time);