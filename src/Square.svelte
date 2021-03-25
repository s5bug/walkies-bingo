<script lang="ts">
    import { Viewer } from 'bytemd';
    export let content: string;

    let selected: boolean = false;

    function toggleSelection() {
        selected = !selected;
    }
</script>

<div class="square" on:click={toggleSelection}>
{#if selected}
    <img src="/two.png" width="152" height="152" />
{:else}
    <Viewer value={content} />
{/if}
</div>

<style>
    .square {
        user-select: none;
        width: 152px;
        height: 152px;
        border: 4px solid black;
    }
</style>
