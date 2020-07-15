<script>
    export let photo;
	export let name;
    export let job;
    export let tags;
    export let social;
</script>

<svelte:head>
    <link class="" href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<main>
    <img class="photo" src="{photo}" alt="{name}">
    <div class="me">
        <h1>{name}</h1>
        <h2>{job}</h2>
    </div>
	<p class="tags">{ tags }</p>
    <div class="links">
        {#each social as link }
            <a href="{ link.url }" target="_blank" class="{ link.name }" title="{ link.name }">{ link.name }</a>
        {/each}
    </div>
</main>

<style>
    .photo {
        display: block;
        width: 60%;
        margin: 0 auto 4vh;
        border-radius: 100%;
    }
    h1 {
        font-family: 'Fira Sans', sans-serif;
        font-size: 8vw;
        margin-bottom: .15rem;
    }
    h2 {
        text-transform: lowercase;
        font-size: 6vw;
        margin-bottom: 7vh;
    }
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 640px;
        margin: 0 auto;
        padding-top: 10vh;
    }
    .tags {
        width: 90%;;
        font-size: 4vw;
        line-height: 1.5;
        text-align: center;
    }
    .links {
        margin: 7vh 0;
    }
    .links a {
        display: inline-block;
        margin: 0 1rem;
        width: 32px;
        height: 32px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
        transition: .25s;
    }
    .links a:hover {
        opacity: .7;
    }
    .links .linkedin {
        background-image: url(../images/icon_linkedin.svg);
        background-size: 24px;
        position: relative;
        top: -2px;
    }
    .links .behance {
        background-image: url(../images/icon_behance.svg);
    }
    .links .instagram {
        background-image: url(../images/icon_instagram.svg);
        background-size: 24px;
    }
    .links .mail {
        background-image: url(../images/icon_mail.svg);
        background-size: 24px;
    }
    @media (min-width: 480px) {
        main {
            padding-top: 12.5vh;
        }
        .photo {
            max-width: 250px;
        }
        h1 {
            font-size: 3.25rem;
        }
        h2 {
            font-size: 1.75rem;
            margin-bottom: 3.5rem;
        }
        .links {
            margin: 3.5rem 0;
        }
        .tags {
            width: 60%;
            font-size: 1rem;
        }
    }
</style>