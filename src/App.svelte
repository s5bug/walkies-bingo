<script lang="ts">
	import 'bytemd/dist/index.min.css';
	import Square from './Square.svelte';
	export let possibleSquares: string[];
	let squares: string[];

	let screenshotMode: boolean = false;

	function reloadSquares() {
		let chosenSquares = possibleSquares.sort(() => 0.5 - Math.random()).slice(0, 24);
		chosenSquares.splice(12, 0, "# TWO\n\n(Free Space)");
		squares = chosenSquares;
	}

	reloadSquares();

	import { volume } from './stores.ts';
</script>

<main>
	<h1>Walkies Bingo</h1>
	<div id="bingo-board">
		{#key squares}
			{#each [0, 5, 10, 15, 20] as ri }
				{#each squares.slice(ri, ri + 5) as square, i}
					<div class="square square-column-{i}">
						<Square content={square} screenshotMode={screenshotMode} volume={$volume}/>
					</div>
				{/each}
			{/each}
		{/key}
	</div>
	<div id="controls">
		<button on:click="{reloadSquares}">Re-roll Board</button>
		<label>
			<input type=checkbox bind:checked={screenshotMode}> Screenshot Mode
		</label>
		<label>
			<input type="range" min="0" max="100" bind:value={$volume} id="volume-slider"> TWO Volume
		</label>
	</div>
</main>

<hr>

<footer>
<dl>
	<dt>Walkies Bingo Design</dt>
	<dd><a href="https://twitter.com/IndagoYt/status/1363332508448935937" target="_blank">IndagoYt's friend Evelyn</a></dd>
	<dt>Web App Creator</dt>
	<dd><a href="https://twitter.com/s5bug/status/1374989326518390784" target="_blank">s5bug</a></dd>
	<dt>Link to Source Code</dt>
	<dd><a href="https://github.com/s5bug/walkies-bingo" target="_blank">https://github.com/s5bug/walkies-bingo</a> (report issues and request/add squares here)</dd>
</dl>
<p>
	If you're having issues on mobile, try enabling the "Desktop Site" option in your browser's menu.
</p>
</footer>

<style>
	:global(body) {
		background-color: #FFD32A;
	}

	@font-face {
    	font-family: 'MARIOMAKER';
    	src: url("/MARIOMAKER.otf") format('opentype');
    	font-weight: normal;
    	font-style: normal;
  	}

	main {
		font-family: 'MARIOMAKER';
		color: #000000;
		text-align: center;
		max-width: 800px;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		text-transform: uppercase;
		font-size: 4em;
		font-weight: bold;
		margin: -0.33em auto;
	}

	#bingo-board {
		display: grid;
		grid-template: repeat(5, 160px) / repeat(5, 160px);
		border: 4px solid black;
		width: 800px;
		height: 800px;
	}

	.square-column-0 {
		background-color: #FD192E;
	}

	.square-column-1 {
		background-color: #247C2D;
	}

	.square-column-2 {
		background-color: #FFD800;
	}

	.square-column-3 {
		background-color: #5E5EFF;
	}

	.square-column-4 {
		background-color: #FF87EF;
	}

	#controls > * {
		display: inline-block;
	}

	#volume-slider {
		position: relative;
		top: 0.5em;
	}

	footer {
		color: black;
		padding: 1em;
	}

	@media (max-width: 800px) {
		main {
			max-width: none;
		}
	}
</style>