import { writable } from "svelte/store";

const storedVolume =
    localStorage.getItem("volume") === null ? 20 : Number(localStorage.getItem("volume"));
export const volume = writable(storedVolume);
volume.subscribe(value => {
   	localStorage.setItem("volume", value.toString());
});
