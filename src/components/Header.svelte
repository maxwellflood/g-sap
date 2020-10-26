<script>

</script>

<section>
    <div class="row p-med">
        <div class="col-half">
            <div class="type-wrapper">
                <slot name="text-left"></slot>
            </div>
        </div>
        <div class="col-half">
            <div class="type-wrapper">
                <slot name="text-right"></slot>
            </div>
        </div>
    </div>
</section>


<style>
    section{
        width: 100%;
        padding: 128px 48px 144px;
        background-color: var(--white);
    }
</style>