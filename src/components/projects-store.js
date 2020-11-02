import { writable } from 'svelte/store' 

const projects = writable([
    {
        image : './images/project-repo/ae_01.jpg',
        client: 'Aethos',
        url:'aethos'
    },
    {
        image : './images/project-repo/gl_01.jpg',
        client: 'Gloved',
        url:'gloved'
    },
    {   
        image : './images/project-repo/ca_01.jpg',
        client: 'CAT Footwear AW2019',
        url:'cat-footwear-ss20'
    },
    {
        image : './images/project-repo/ag_01.jpg',
        client: 'Airgraft',
        url:''
    },
    {
        image : './images/project-repo/fi_01.jpg',
        client: 'Finto',
        url:'finto'
    },
    {   
        image : './images/project-repo/cat_01.jpg',
        client: 'CAT Footwear SS2019',
        url:'cat-footwear-aw19'
    },
    {
        image : './images/project-repo/yo_01.jpg',
        client: 'Yardoled',
        url:'yardoled'
    },
    {
        image : './images/project-repo/an_01.jpg',
        client: 'Anna Payne',
        url:'anna-payne'
    }
])

export default projects




