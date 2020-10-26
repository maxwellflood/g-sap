<script>
	// import successkid from 'images/successkid.jpg';

	import Splash from '../components/Splash.svelte'
    import Header from '../components/Header.svelte'
    import Next from '../components/Next.svelte'


    let projects = [
        {
            image : './images/projects/ae.jpg',
            client: 'Aethos'
        },
        {
            image : './images/projects/ag.jpg',
            client: 'Airgraft'
        },
        {   
            image : './images/projects/cat.jpg',
            client: 'CAT'
        },
    ]   
</script>

<style>
    .projects{
        padding-bottom: 16px;
    }
	.project{
         width: 100%;
         line-height: 0;
     }
     .next-image{
         position: relative;
         margin: auto;
         width: 50%;
     }
</style>

<svelte:head>
	<title>Grotesk Studio</title>
</svelte:head>


<div class="spacer"></div>
<Splash splashSubheader="Project" splashHeader="Airgraft"/>

<Header>
    <div slot="text-right">
        <h2>Creating brands with character</h2>
        <p class="xxl">
            We’re Grotesk, a creative studio that exists to create compelling and engaging brand experiences through research, strategy and design.
        </p>
    </div>
</Header>

<section class="projects">
    {#each projects as project}
        <div class="row padding-bottom">
            <div class="project">
                <img src="{project.image}" alt="">
            </div>
        </div>
    {/each}
</section>

<Next text="All projects" link="projects">
    <img class="next-image" slot="next-image" src="./images/projects/bae.jpg" alt="">
</Next>



