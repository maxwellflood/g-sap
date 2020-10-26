<script>
    import Button from './Button.svelte'
</script>

<nav class="">

    <a href=".">
        <div class="nav-logo-wrapper">
            <div class="nav-logo">
                <img src="./images/g-logo.svg" alt="">
            </div>
        </div>
    </a>
    
    <div class="nav-menu">
        <a class="nav-link" href="projects">Projects</a>
        <a class="nav-link" href="about">About</a>
        <a class="nav-link" href="contact">Contact</a>
        <!-- <Button href="projects" mode="nav-btn" color="transparent">Projects</Button>
        <Button mode="nav-btn" color="transparent">About</Button>
        <Button mode="nav-btn" color="transparent">Contact</Button> -->
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

    .nav-link{
        font-family: 'basis grotesque mono';
        padding: 12px 16px;
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;
        background: rgba(255,255,255,0);
        color: var(--black);
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        transition: 0.5s background-color ease;
        margin-left: 8px;
        letter-spacing: 2px;
    }
    
</style>