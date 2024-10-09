<script>
    import SearchInput from "./SearchInput.svelte";
    import { writable } from "svelte/store";

    export let ws;
    export let searchResults = [];
    export let onDragStart;
    export let cellImages = writable([]);

    function handleDragStart(event, url) {
        if (onDragStart) {
            onDragStart(event, url);
        } else {
            event.dataTransfer.setData('text/plain', url);
        }
    }

    function addAllImages() {
        let resultIndex = 0;
        cellImages.update(images => {
            return images.map(row => {
                return row.map(cell => {
                    if (cell === "" && resultIndex < $searchResults.length) {
                        return $searchResults[resultIndex++];
                    }
                    return cell;
                });
            });
        });
    }
</script>

<div class="bg-white rounded-xl shadow-md p-2 w-[30rem] h-full overflow-y-auto relative">
    <SearchInput {ws} {searchResults} />

    {#if $searchResults.length > 0}
        <button
                on:click={addAllImages}
                class="mb-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 w-full"
        >
            Add All
        </button>
        <div class="grid grid-cols-3 gap-2">
            {#each $searchResults as url}
                <div
                        class="group relative rounded-lg h-36 w-36 overflow-hidden shadow-sm hover:shadow-md cursor-pointer"
                        draggable="true"
                        on:dragstart={(event) => handleDragStart(event, url)}
                >
                    <img src={url} alt="Search result" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                        <span class="text-white">Drag Me</span>
                    </div>
                </div>
            {/each}
        </div>
    {:else}
        <div class="py-8 w-full px-4 mx-auto">
            <div class="mx-auto w-full text-center">
                <p class="mb-4 text-3xl tracking-tight font-bold text-black">No Results</p>
                <p class="mb-4 text-lg font-light text-gray-500">Please search something else...</p>
            </div>
        </div>
    {/if}
</div>

<style>
    .group:hover .group-hover\:opacity-100 {
        opacity: 1;
    }
</style>