<script lang="ts">
	import 'bytemd/dist/index.min.css';
	import Square from './Square.svelte';
	export let squares: string[];
</script>

<main>
	<h1>Walkies Bingo</h1>
	<div id="bingo-board">
		{#each [0, 5, 10, 15, 20] as ri }
			{#each squares.slice(ri, ri + 5) as square, i}
				<div class="square square-column-{i}"><Square content={square}/></div>
			{/each}
		{/each}
	</div>
</main>

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

	@media (max-width: 800px) {
		main {
			max-width: none;
		}
	}
</style>