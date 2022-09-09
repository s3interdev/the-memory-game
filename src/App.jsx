import { useState } from 'react';
import SingleCard from './components/single-card';

const cardImages = [
	{ src: '/assets/helmet-1.png' },
	{ src: '/assets/potion-1.png' },
	{ src: '/assets/ring-1.png' },
	{ src: '/assets/scroll-1.png' },
	{ src: '/assets/shield-1.png' },
	{ src: '/assets/sword-1.png' },
];

const App = () => {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);

	/** shuffle cards */
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setCards(shuffledCards);
		setTurns(0);
	};

	/** handle a choice */
	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	return (
		<div className="app">
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>

			<div className="card-grid">
				{cards.map((card) => (
					<SingleCard key={card.id} card={card} handleChoice={handleChoice} />
				))}
			</div>
		</div>
	);
};

export default App;
