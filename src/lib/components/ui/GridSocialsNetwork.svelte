<script lang="ts">
    const items = [
        { link: "https://www.linkedin.com/in/sedrac-calupeteca/", image: "https://img.icons8.com/?size=100&id=qNUNvR9aEWql&format=png&color=000000", label: "LinkedIn" },
        { link: "https://www.facebook.com/sedrak.lucas/", image: "https://img.icons8.com/?size=100&id=118497&format=png&color=000000", label: "Facebook" },
        { link: "https://github.com/sedrac-slc", image: "https://img.icons8.com/?size=100&id=12599&format=png&color=000000", label: "GitHub" },
        { link: "https://wa.me/244936269780", image: "https://img.icons8.com/?size=100&id=16713&format=png&color=000000", label: "Whatsapp" },
        { link: "mailto:slcsedrac@gmail.com", image: "https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000", label: "Email" },
    ];
</script>

<ul class="flex gap-4">
    {#each items as { link, image, label }, i}
        <li class="bg-white rounded-full p-1 animate__animated animate__fadeInLeft animate__delay-{items.length - i}s">
            <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <img src={image} alt={label} width="40" height="40" />
            </a>
        </li>
    {/each}
</ul>