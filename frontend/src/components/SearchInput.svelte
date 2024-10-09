<script>
    import { writable } from "svelte/store";
    import { Search } from 'lucide-svelte';

    export let ws;
    export let searchResults;

    let query = "";

    function sendSearch() {
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ action: 'search', query }));
        } else {
            console.error('WebSocket is not open');
        }
    }
</script>

<div class="relative mb-1 w-full max-w-2xl mx-auto">
    <input
            type="text"
            class="w-full pl-2 text-sm pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out shadow-sm text-gray-700"
            placeholder="Search for images..."
            bind:value={query}
    />
    <button
            on:click={sendSearch}
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-2 rounded-full hover:bg-gray-800 transition duration-150 ease-in-out shadow-md"
    >
        <Search class="" size={20} />

    </button>
</div>

<style>
    @media (max-width: 640px) {
        .max-w-2xl {
            max-width: 90%; /* Reduce max width on small screens */
        }
    }
</style>
