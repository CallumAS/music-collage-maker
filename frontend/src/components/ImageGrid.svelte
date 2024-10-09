<script>
    import Cell from './Cell.svelte';
    import { writable } from 'svelte/store';

    export let ws;
    export let searchResults;

    export let rows = 5;
    export let cols = 5;

    export let cellImages = writable([]);

    function initializeGrid() {
        try {
            if (rows <= 0 || cols <= 0) throw new Error('Rows and columns must be greater than 0');

            cellImages.set(Array.from({ length: rows }, () => Array(cols).fill('')));
        } catch (error) {
            console.error("Error initializing the grid:", error);
        }
    }

    initializeGrid();

    $: if (rows !== $cellImages.length || cols !== ($cellImages[0]?.length || 0)) {
        initializeGrid();
    }

</script>

<div class={`grid gap-2 p-2 border border-gray-200 rounded-lg shadow-sm bg-white w-full mx-auto overflow-y-auto`} style={`grid-template-columns: repeat(${cols}, minmax(0, 1fr));`}>
    {#each Array(rows) as _, rowIdx}
        {#each Array(cols) as _, colIdx}
            {#if $cellImages[rowIdx] && $cellImages[rowIdx][colIdx] !== undefined}
                <Cell bind:imageUrl={$cellImages[rowIdx][colIdx]} class="border p-40 w-full flex justify-center items-center rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition" />
            {:else}
                <div class="border p-4 h-28 w-full flex justify-center items-center rounded-lg shadow-md bg-red-100 text-red-500">
                    Error: Invalid cell
                </div>
            {/if}
        {/each}
    {/each}
</div>
