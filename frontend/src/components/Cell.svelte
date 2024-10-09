<script>
    export let imageUrl = '';

    function handleDrop(event) {
        event.preventDefault();
        const droppedUrl = event.dataTransfer.getData('text/plain');

        if (droppedUrl) {
            imageUrl = droppedUrl;
        }
    }

    function handleDragOver(event) {
        event.preventDefault();
    }
</script>

<div
        class="relative border border-gray-300 bg-gray-50 rounded-md flex justify-center items-center hover:bg-gray-100 transition-all duration-300 ease-in-out w-full overflow-hidden"
        on:drop={handleDrop}
        on:dragover={handleDragOver}
        style="background-image: url({imageUrl}); background-size: cover; background-position: center;"
>

</div>
