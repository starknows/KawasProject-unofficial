<script>
    import { onMount } from 'svelte';
    import '../app.css'
    import "../style/normalize.css";
    import setVh from '$lib/setVh';
    import coverUnits from "../data/coverUnit";
    let lightboxContent = null;
    onMount(()=> {
        setVh();
    });
</script>

<svelte:head>
	<title>Kawas Project 周表</title>
    <meta name="description" content="Kawas Project非官方DD網頁，提供周表快速預覽服務">
    <meta property="og:site_name" content="Kawas Project 周表" />
  	<meta property="og:type" content="website" />
  	<meta property="og:title" content="周表一覽 | Kawas Project DD小工具" />
  	<meta property="og:description" content="Kawas Project非官方DD網頁，提供周表快速預覽服務" />
  	<meta property="og:url" content="https://starknows.github.io/KawasProject-unofficial/" />
  	<meta property="og:image" content="https://starknows.github.io/KawasProject-unofficial/appImage.jpg" />
</svelte:head>

<svelte:window on:resize={setVh} on:orientationchange={setVh}/>

<div class="list-wrapper flex-center">
    {#if lightboxContent&&lightboxContent.type==='image'}
        <div class="lightbox-content-wrapper flex-center" on:click={() => lightboxContent = null}>
            <img src={lightboxContent.content} alt="zoom in">
        </div>
    {/if}
    {#each coverUnits as coverUnit}
        <div class="calendar-wrapper flex-center flex-col">
            <div class="img-wrapper flex-center" style={`background: no-repeat center/cover url(${coverUnit.link});`}>
                <img
                    src={coverUnit.link}
                    alt="youtube video img"
                    on:click={() => lightboxContent = {type: 'image', content: coverUnit.link}}
                />
            </div>
            <div class="icon-wrapper flex-center">
                <a href={coverUnit.youtube} target="_blanc">
                    <i class="fa-brands fa-youtube"></i>
                </a>
                <a href={coverUnit.twitter} target="_blanc">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <div class="icon-title">
                    {coverUnit.title}
                </div>
            </div>
        </div>
    {/each}
</div>

<style lang="sass">
.lightbox-content-wrapper
    width: 100%
    height: 100%
    position: absolute
    left: 0
    top: 0
    z-index: 1000
    background: rgba(black, 0.7)
.list-wrapper
    flex-wrap: wrap
    justify-content: space-evenly
    height: 100vh
    height: calc(var(--vh, 1vh) * 100)
    width: 100%
.calendar-wrapper
    flex: 0 0 40%
    padding: 16px
    height: clamp(10%, 49%, 50%)
.img-wrapper
    cursor: pointer
    position: relative
    width: 100%
    height: calc(100% - 3rem)
    overflow: hidden
    & > img
        width: 100%
        height: 100%
        object-fit: contain
        aspect-ratio: 16/9
        z-index: 2
        transition: .2s
        &:hover
            transform: scale(1.02)
    &::after
        position: absolute
        content: ''
        width: 100%
        height: 100%
        background: rgba(white, 0.3)
        backdrop-filter: blur(5px)
        z-index: 1
.icon-wrapper
    width: 100%
    height: 3rem
    background: rgba(white, 0.1)
    backdrop-filter: blur(2px)
    padding: 0 1rem
    & > a
        flex: 0 0 3rem
        font-size: 2rem
        text-decoration: none
        & > i
            font-style: normal
.icon-title
    flex: 1 1 auto
    text-align: right
    font-size: 1.5rem
    font-weight: 700
    color: rgba(white, 0.8)
.fa-youtube
    color: #FF0000
.fa-twitter
    color: #1DA1F2
</style>
