<script>
    import { createEventDispatcher } from "svelte";
    export let resultImage;

    const dispatch = createEventDispatcher();

    function closeModal() {
        dispatch("close");
    }
</script>

<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" on:click={closeModal}>
    <div on:click|stopPropagation class="modal-content bg-white p-6 rounded-lg shadow-lg transition-transform transform translate-y-0 duration-500 ease-out">
        <img src={`${resultImage}`} alt="Base64 Image" class="mb-4 rounded-md shadow" />
        <button on:click={closeModal} class="bg-blue-600 text-white py-2 px-6 rounded-md shadow hover:bg-blue-700">
            Close
        </button>
    </div>
</div>

<style>
    .modal-content {
        max-width: 90%;
        max-height: 90%;
        overflow: auto;
    }
</style>
