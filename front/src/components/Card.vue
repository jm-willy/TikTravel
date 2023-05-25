<template>
    <div id="card" class="px-3 py-4">

        <div class="bg-white shadow-xl rounded-lg overflow-hidden">

            <div class="bg-cover bg-center h-56 p-4" style="background-image: url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)">
                <button type="submit" class="flex float-right">
                    <a href="#" class="text-sm bg-gray-700 hover:bg-gray-800 rounded-lg px-2 text-white p-1.5">Reservar</a>
                </button>
            </div>

            <h3 id="text" class="border-t border-gray-300 text-center text-3xl p-1">Viaje</h3>

            <div class="p-2  flex items-center justify-center">

                <div class="bg-gray-200 flex flex-col w-32 p-3 rounded-xl border-2 border-white">
                    <span class="font-semibold text-sm text-center">Estancia</span>
                    <select id="underline_select" class="text-center block px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 focus:outline-none">
                        <option selected value="Option 3">Selecciona</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                    </select>
                </div>

                <div class="bg-gray-200 flex flex-col w-32 p-3 rounded-xl border-2 border-white">
                    <span class="font-semibold text-sm text-center">¿De dónde?</span>
                    <select id="underline_select" class="text-center block px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 focus:outline-none">
                        <option selected value="Option 3">Ubicación</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                    </select>
                </div>

                <div class="bg-gray-200 flex flex-col w-32 p-3 rounded-xl border-2 border-white">
                    <span class="font-semibold text-sm text-center">Hora</span>
                    <input type="time" class="text-center block px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 appearance-none focus:outline-none">
                </div>

            </div>

        </div>

    </div>
</template>

<style>
#card{
    width: 35rem;
}
</style>
