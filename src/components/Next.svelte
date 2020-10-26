<script>
    export let text
    export let link
</script>

<style>
    .link-wrapper{
        display: block;
        position: relative;
    }
    .next-wrapper{
        position: relative;
         padding-top: 144px;
         padding-bottom: 144px;
         background-color: var(--white);
         overflow: hidden;
         transition: background-color .3s ease; 
    }
    .next-wrapper:hover{
        background-color: var(--grey);
    }
    .btn-wrapper{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    } 
    .arrow-wrapper{
         max-height:40px;
         max-width: 50px;
         overflow: hidden;
    }
    .arrow-animation{
         display: flex;
         justify-content: space-between;
         height:40px;
         width: 150px;
         transform: translateX(-100px);
         transition: transform 0.3s ease;
    }
    img.arrow-icon{
        max-width: 50px;
    }
    .next-wrapper:hover > .row .col-fw .type-wrapper .btn-wrapper .arrow-wrapper .arrow-animation{
        transform: translateX(0px);
    }
    .img-wrapper{
         position: absolute;
         width: calc(100% - 128px);
         display: flex;
         justify-content: center;
         transition: transform 0.3s ease;
         transform: translateY(160px);
     }
     .next-wrapper:hover > .row .col-fw .img-wrapper{
        transform: translateY(40px);
    }
</style>


<a class="link-wrapper" href={link}>
    <section class="next-wrapper">
        <div class="row">
            <div class="col-fw">
                <div class="type-wrapper">
                    <div class="btn-wrapper">
                        <p class="xxl">
                            {text}
                        </p>
                        <div class="arrow-wrapper">
                            <div class="arrow-animation">
                                <img class="arrow-icon" src="./images/arrow.svg" alt="arrow"/>
                                <img class="arrow-icon" src="./images/arrow.svg" alt="arrow"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-wrapper">
                    <slot name="next-image"></slot>
                </div>
            </div>
        </div>
    </section>
</a>