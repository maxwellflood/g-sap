<script>
    import Button from './Button.svelte'
</script>

<nav class="">
    <div class="nav-logo-wrapper">
        <div class="nav-logo">
            <img src="./images/g-logo.svg" alt="">
        </div>
    </div>
    <div class="nav-menu">
        <Button href="projects" mode="nav-btn" color="transparent">Projects</Button>
        <Button mode="nav-btn" color="transparent">About</Button>
        <Button mode="nav-btn" color="transparent">Contact</Button>
    </div>
</nav>

<style>

    nav{
        position: fixed;
        top: 0;
        z-index: 1000;
        width: 100%;
        padding: 40px 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* background-color: aqua; */
    }

    .nav-menu{
        transform: translateX(-15px)
    }

    .nav-logo-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        cursor: pointer;
        /* background: var(--white); */
        transform: translateX(18px)
    }

    .nav-logo{
        width: 13px;
        height: 18px;
    }
    
</style>