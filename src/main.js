import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		photo: 'images/david.jpg',
		name: 'David López',
		job: 'Full-stack Developer',
		tags: '#javascript #vuejs #sass #symfony #doctrine #html5 #css3 #sublime #osx #madrid',
		social: [
			{
				name: 'linkedin',
				url: 'https://es.linkedin.com/in/davidlpz/'
			},
			{
				name: 'codepen',
				url: 'https://codepen.io/davidlpz/'
			},
			{
				name: 'github',
				url: 'https://github.com/davidlpz/'
			},
			{
				name: 'mail',
				url: 'mailto:davidlpzgomez@gmail.com'
			},
		],
	}
});

export default app;