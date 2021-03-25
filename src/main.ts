import App from './App.svelte';

let possibleSquares = [
	"Wheel of Fortune Break",
	"Hardcore Choke",
	"Tetris Break (ft. DT Cannon)",
	"*rhymes 3 words* \"Bars?\"",
	"VS level that ends in a horizontal section",
	"Pointless Key door Scramble",
	"\"I wanted to wall jump there\"",
	"2 FPS Lag Lobby",
	"Last to Checkpoint",
	"BlurryFlips",
	"\"Just took a break\"",
	"Forgets to vote/votes without thinking",
	"\"I can't make this jump without running\"",
	"Reminds the viewer that he can, in fact, run as Link",
	"Dies right before someone else wins",
	"\"It's pretty hard for me to win in SMB1\"",
	"\"Boss fight? 11 bosses? Choke point?\"",
	"Ends with fewer points than he started with",
	"Rare Homie Sighting",
	"Forgets he can long jump in 3D World",
	"\"Yeah, I lose this one for sure\"\n\n(and he does)",
	"Conveyor Makes VS Level Impossible",
	"Tries to cheese a level and loses because of that",
	"Sudden 1v1"
];

let chosenSquares = possibleSquares.sort(() => 0.5 - Math.random()).slice(0, 24);

chosenSquares.splice(12, 0, "**TWO** (Free Space)");

const app = new App({
	target: document.body,
	props: {
		squares: chosenSquares,
	}
});

export default app;