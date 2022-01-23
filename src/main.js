import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		photo: 'images/norberto.jpg',
		name: 'Norberto Rodríguez',
		job: 'Art Director',
		tags: '#graphicdesign #editorialdesign #illustration #illustrator #indesign #photoshop #malaga',
		social: [
			{
				name: 'linkedin',
				url: 'https://www.linkedin.com/in/norberto-rodr%C3%ADguez-l%C3%B3pez-b9b203130'
			},
			{
				name: 'behance',
				url: 'https://www.behance.net/norbertorodriguez_'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/norbertorodriguez_'
			},
			{
				name: 'mail',
				url: 'mailto:hola@norbertorodriguez.es'
			},
		],
	}
});

export default app;