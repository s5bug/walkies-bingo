<script lang="ts">
    import { Viewer } from 'bytemd';
    export let content: string;
    export let screenshotMode: boolean;

    let selected: boolean = false;

    let twoAudio: HTMLAudioElement = new Audio("/two/two_6.mp3");
    twoAudio.volume = 0.2;

    function toggleSelection() {
        selected = !selected;
        if(selected) {
            let twoFile = "/two/two_" + (Math.floor(Math.random() * 8) + 1) + ".mp3";
            twoAudio.src = twoFile;
            twoAudio.addEventListener("canplay", event => {
                // The square could become deselected by this point
                if(selected) {
                    twoAudio.play();
                }
                twoAudio.removeEventListener("canplay", this);
            });
        } else {
            twoAudio.currentTime = 0;
            twoAudio.pause();
        }
    }
</script>

<div class="square" class:selected={selected && screenshotMode} on:click={toggleSelection}>
    <img src="/two.png" width="152" height="152" class:hidden={!selected || screenshotMode} />
    <div class:hidden={selected && !screenshotMode}>
        <Viewer value={content} sanitize={x => x} />
    </div>
</div>

<style>
    .square {
        user-select: none;
        width: 152px;
        height: 152px;
        border: 4px solid black;
    }

    .selected {
        background-color: #00ff00;
    }

    .hidden {
        display: none;
    }
</style>
