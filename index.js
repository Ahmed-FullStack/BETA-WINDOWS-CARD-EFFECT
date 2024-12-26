const transparentEffectContainers = document.querySelectorAll(
	'[transparent-effect]'
);

transparentEffectContainers.forEach(transparentEffectContainer => {
	transparentEffect(transparentEffectContainer);
});

function transparentEffect(effectContainer) {
	effectContainer.addEventListener('mousemove', e => {
		const containerCards = effectContainer.querySelectorAll('.card');
		containerCards.forEach(card => {
			const { x, y } = card.getBoundingClientRect();

			const xCoordinate = e.clientX - x;
			const yCoordinate = e.clientY - y;

			card.style.setProperty('--x', `${xCoordinate}px`);
			card.style.setProperty('--y', `${yCoordinate}px`);
		});
	});
}
