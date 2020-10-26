<script>
    export let splashHeader
    export let splashSubheader
</script>

<section class="splash-wrapper">
    <div class="splash-header">
        {#if splashHeader && splashSubheader}
            <h2>{splashSubheader}</h2>
            <h1>{splashHeader}</h1>
        {:else if splashSubheader}
            <h2>{splashSubheader}</h2>
        {:else if splashHeader}
            <h1>{splashHeader}</h1>
        {/if}
    </div>
</section>

<style>
    .splash-wrapper{
        position: relative;
        width: 100vw;
        height: calc(100vh - 120px);
        background-color: var(--grey);
        padding: 64px;
        display: flex;
        align-items: center;
    }

    .splash-header{ 
        position: absolute;
        bottom: 88px;
        padding: 0 32px; 
    }
    .splash-header h1{
        padding: 16px 0;
    }
</style>