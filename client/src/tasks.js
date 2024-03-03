// const tasks = ref(null)
export const tasks = new Promise(() => {
	setTimeout(() => {
		[
			{ title: 'Number one', desc: 'Lorem ipsum dolor sit amet', completed: false },
			{ title: 'Number two', desc: '', completed: false },
			{
				title: 'Number three',
				desc: '		Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam atque modi libero suscipit, ex eum rem illo, expedita esse incidunt explicabo, qui deserunt? Tempora hic sit et rem aliquam nemo, corporis ducimus nesciunt odit cumque! Quia autem saepe ratione. Commodi eius placeat necessitatibus officia repellat eos ducimus dolore ullam soluta',
				completed: true
			}
		];
	}, 800);
});
