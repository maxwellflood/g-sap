<script>
    export let mode = null
    export let color = null
    export let type = null
    export let href = null
</script>


<button href={href} class="{mode} {color}" {type} on:click>
    <slot/>
</button>


<style>
    button{
        padding: 12px 16px;
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;
        
        
        border: none;
        background: var(--black);
        color: var(--white);
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        transition: 0.5s background-color ease;
    }

    .transparent{
        background: rgba(255,255,255,0);
        color: var(--black);
    }

    .transparent:hover{
        background: var(--grey);
    }

    .white{
        background:var(--white);
        color: var(--black);
    }

    .nav-btn{
        margin-left: 8px;
        font-family: 'Basis Grotesque Mono'
    }

</style>