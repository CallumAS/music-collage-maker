<script>
    import {writable} from "svelte/store";

    export let ws;
    export let expectedCellWidth;
    export let expectedCellHeight;
    import { Play, Settings } from 'lucide-svelte';

    export let rows = 5;
    export let cols = 5;
    export let cellImages = writable([]);

    let width = 1000;
    let height = 1000;
    let dpi = 200;
    let isOpen = true;

    // Send full settings (All values)
    function sendSettings() {
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({
                action: 'settings',
                query: `${rows}|${cols}|${width}|${height}|${dpi}`
            }));
        } else {
            console.log('WebSocket is not open');
        }
    }

    function dumpImages() {
        const unsubscribe = cellImages.subscribe(data => {
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({
                    action: 'process',
                    query: rows + "|" + cols + "|" + width + "|" + height + "|" + dpi,
                    grid: data
                }));
            } else {
                console.log('WebSocket is not open');
            }
            console.log(data);

            // Unsubscribe after the first invocation
            unsubscribe();
        });
    }


    function toggle() {
        isOpen = !isOpen;
    }
</script>

<div class="flex w-full">
    <button on:click={toggle} class="flex items-center justify-center fixed z-50 left-1 top-1 w-10 h-10 bg-black text-white rounded-full transition duration-300 hover:bg-gray-800">
        {#if isOpen}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        {/if}
    </button>

    <div class="bg-white fixed z-40 rounded-lg shadow-lg mr-4 transition-all duration-300 ease-in-out overflow-hidden"
         class:min-height={isOpen ? 'auto' : '0'}
         style="max-height: {isOpen ? '800px' : '0'}; opacity: {isOpen ? 1 : 0};">

        <div class="p-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">

                <div class="relative">
                    <label class="floating-label">Width</label>
                    <input type="number" bind:value={width} min="1"
                           class="input-field"
                           placeholder=" "/>
                </div>

                <div class="relative">
                    <label class="floating-label">Height</label>
                    <input type="number" bind:value={height} min="1"
                           class="input-field"
                           placeholder=" "/>
                </div>

                <div class="relative">
                    <label class="floating-label">DPI</label>
                    <input type="number" bind:value={dpi} min="1"
                           class="input-field"
                           placeholder=" "/>
                </div>

                <div class="relative">
                    <label class="floating-label">Rows</label>
                    <input type="number" bind:value={rows} min="1"
                           class="input-field"
                           placeholder=" "/>
                </div>

                <div class="relative">
                    <label class="floating-label">Columns</label>
                    <input type="number" bind:value={cols} min="1"
                           class="input-field"
                           placeholder=" "/>
                </div>

                <div class="">
                    <div class="bg-gray-50 h-full flex items-center justify-center text-gray-800 py-3 px-4 rounded-lg text-base font-semibold">
                        {expectedCellWidth}x{expectedCellHeight}
                    </div>
                </div>

                <div class="">
                    <button on:click={sendSettings}
                            class="btn-black h-full flex items-center justify-center space-x-2">
                        <Settings size={20}/>
                    </button>
                </div>

                <div class="">
                    <button on:click={dumpImages}
                            class="btn-black flex h-full

                             items-center justify-center space-x-2">
                        <Play size={20}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .btn-black {
        background-color: #000;
        color: #fff;
        padding: 10px;
        border-radius: 8px;
        font-weight: bold;
        transition: all 0.3s ease;
        width: 100%;
    }

    .btn-black:hover {
        background-color: #333;
        transform: scale(1.02);
    }

    .btn-black:active {
        transform: scale(0.98);
    }

    .input-field {
        width: 100%;
        padding: 12px 14px;
        font-size: 14px;
        background-color: #f9fafb; /* light background */
        border-radius: 8px;
        border: 1px solid #e5e7eb; /* light border */
        outline: none;
        transition: all 0.3s ease-in-out;
        color: #374151; /* Text color */
    }

    .input-field:hover {
        border-color: #d1d5db; /* slightly darker on hover */
    }

    .input-field:focus {
        border-color: #2563eb; /* Tailwind blue-600 */
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2); /* Subtle blue shadow */
    }

    .floating-label {
        position: absolute;
        top: -10px;
        left: 14px;
        font-size: 12px;
        color: #6b7280; /* gray color */
        background-color: white;
        padding: 0 4px;
    }

</style>