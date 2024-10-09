<script>
    import SearchResults from './components/SearchResults.svelte';
    import ControlPanel from './components/ControlPanel.svelte';
    import ImageGrid from './components/ImageGrid.svelte';
    import Modal from './components/Modal.svelte';
    import { writable } from 'svelte/store';

    let ws;
    let searchQuery = '';
    let searchResults = writable([]);
    const wsUrl = `ws://${'localhost:8080'}/ws`;
    let cellImages = writable([]);


    let resultImage = '';


    //settings
    let rows = 5;
    let cols = 3;

    let expectedCellWidth = 200;
    let expectedCellHeight = 200;

    function connectWS() {
        ws = new WebSocket(wsUrl);
        ws.onopen = () => console.log('WebSocket connected');
        ws.onmessage = (event) => {
            if (event.data instanceof Blob) {
                const imageUrl = URL.createObjectURL(event.data);
                resultImage = imageUrl;

            } else {
                const response = JSON.parse(event.data);
                switch (response.action) {
                    case "search":
                        searchResults.set(response.response);
                        break;
                    case "settings":
                        expectedCellWidth = response.width;
                        expectedCellHeight = response.height;
                        break;
                }
            }
        };
        ws.onclose = () => console.log('WebSocket closed');
        ws.onerror = (error) => console.error('WebSocket error:', error);
    }

    function closeModal() {
        resultImage = '';
    }

    connectWS();
</script>

<main class="p-4 bg-gray-100 min-h-screen">
    <ControlPanel {ws} {cellImages} bind:expectedCellWidth bind:expectedCellHeight bind:rows bind:cols />

    <div class="flex gap-2" style="height: -webkit-fill-available">
        <div>
            <SearchResults {ws} {cellImages} {searchResults}/>
        </div>
        <ImageGrid {ws} {searchResults} {rows} {cols} {cellImages} />
    </div>

    {#if resultImage != ""}
        <Modal {resultImage} on:close={closeModal} />
    {/if}
</main>

<style>
    img {
        max-width: 100%;
        max-height: 500px;
        transition: transform 0.3s ease-in-out;
    }
    img:hover {
        transform: scale(1.05);
    }
</style>