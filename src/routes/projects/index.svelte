<script>

    import Next from '../../components/Next.svelte'
    import projectsStore from '../../components/projects-store.js'

</script>

<style>

    .header-wrapper{
        background-color: var(--white);
        padding-top: 216px;
        padding-bottom: 56px; 
    }

    .next-image{
         position: relative;
         margin: auto;
         width: 50%;
     }

</style>

<svelte:head>
	<title>Grotesk Studio | Projects</title>
</svelte:head>


<div class="spacer"></div>

<div class="header-wrapper">
    <section>
        <div class="row">
            <div class="col-half">
                <div class="type-wrapper">
                    <h3>Projects</h3>
                </div>
            </div>
            <div class="col-half">
                <div class="type-wrapper">
                    <h3>All</h3>
                </div>
            </div>
        </div>
    </section>
</div>

<section>
    <div class="row">
        {#each $projectsStore as project}
            <div class="col-half padding-bottom-lrg">
                <a href="/projects/{project.url}">
                    <img src="{project.image}" alt="">
                    <div class="type-wrapper padding-top-small">
                        <h4>{project.client}</h4>
                    </div>
                </a>
            </div>
        {/each}
    </div>
</section>

<Next text="Studio projects" link="play">
    <img class="next-image" slot="next-image" src="./images/projects/bae.jpg" alt="">
</Next>

