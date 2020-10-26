<script>
	// import successkid from 'images/successkid.jpg';

	import Splash from '../components/Splash.svelte'
    import Header from '../components/Header.svelte'


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
	.project{
         width: 100%;
     }
     .all-projects{
         padding-top: 128px;
         padding-bottom: 144px;
     }
</style>

<svelte:head>
	<title>Grotesk Studio</title>
</svelte:head>

<div>
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
    
    <section class="all-projects">
        <div class="row">
            <div class="col-fw">
                 <div class="type-wrapper">
                    <p class="xxl">All projects</p>
                </div>
            </div>
        </div>
    </section>
</div>
