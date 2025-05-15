<template>
    <div>
        <h1>Dev Component</h1>
        <p>This is a development component.</p>
    </div>

    <div class="flex flex-col gap-4 px-12 mb-20">
        <div>
            <h2>Button</h2>
            <div class="grid grid-cols-9 gap-8">
                <div>
                    <p>"btn btn-primary"</p>
                    <div class="btn btn-primary">Button</div>
                </div>
                <div>
                    <p>"btn btn-outline"</p>
                    <div class="btn btn-outline">Button</div>
                </div>
                <div>
                    <p>"btn btn-white"</p>
                    <div class="btn btn-white">Button</div>
                </div>
            </div>
        </div>

        <div>
            <h2>Color</h2>
            <div class="grid grid-cols-9 gap-8">
                <div>
                    <p>"primary"</p>
                    <div class="bg-primary text-white p-4 rounded-3">Primary</div>
                </div>
                <div>
                    <p>"primary20"</p>
                    <div class="bg-primary20 text-white p-4 rounded-3">primary20</div>
                </div>
                <div>
                    <p>"primary30"</p>
                    <div class="bg-primary30 text-white p-4 rounded-3">primary30</div>
                </div>
                <div>
                    <p>"secondary"</p>
                    <div class="bg-secondary text-white p-4 rounded-3">secondary</div>
                </div>
                <div>
                    <p>"secondary10"</p>
                    <div class="bg-secondary10 text-white p-4 rounded-3">secondary10</div>
                </div>
                <div>
                    <p>"netral"</p>
                    <div class="bg-netral text-white p-4 rounded-3">netral</div>
                </div>
                <div>
                    <p>"netral10"</p>
                    <div class="bg-netral10 text-white p-4 rounded-3">netral10</div>
                </div>
                <div>
                    <p>"netral20"</p>
                    <div class="bg-netral20 text-white p-4 rounded-3">netral20</div>
                </div>
            </div>
        </div>


        <div>
            <h2>Typografi</h2>
            <div class="grid gap-8">
                <div>
                    <p>"font default (tidak menggunakan class) element [div,p,body]"</p>
                    <div class="bg-netral10 p-4 rounded-3">
                        <div>The quick brown fox jumps over the lazy dog</div>
                    </div>
                </div>
                <div>
                    <p>element : H1</p>
                    <div class="bg-netral10 p-4 rounded-3">
                        <h1>The quick brown fox jumps over the lazy dog</h1>
                    </div>
                </div>
                <div>
                    <p>class : H1 bold</p>
                    <div class="bg-netral10 p-4 rounded-3">
                        <h1 class="h1-bold">The quick brown fox jumps over the lazy dog</h1>
                    </div>
                </div>
                <div>
                    <p>element : H2</p>
                    <div class="bg-netral10 p-4 rounded-3">
                        <h2>The quick brown fox jumps over the lazy dog</h2>
                    </div>
                </div>
                <div>
                    <p>class : H2 bold</p>
                    <div class="bg-netral10 p-4 rounded-3">
                        <h2 class="h2-bold">The quick brown fox jumps over the lazy dog</h2>
                    </div>
                </div>

                <div>
                    <p>element : H3</p>
                    <div class="bg-netral10 p-4 rounded-3">
                        <h3>The quick brown fox jumps over the lazy dog</h3>
                    </div>
                </div>
                <div>
                    <p>class : H3 bold</p>
                    <div class="bg-netral10 p-4 rounded-3">
                        <h3 class="h3-bold">The quick brown fox jumps over the lazy dog</h3>
                    </div>
                </div>

                <div>
                    <p>class : paragraph-24-semibold</p>
                    <div class="bg-netral10 p-4 rounded-3">
                        <div class="paragraph-24-semibold">The quick brown fox jumps over the lazy dog</div>
                    </div>
                </div>
                <div>
                    <p>class : paragraph-24-bold</p>
                    <div class="bg-netral10 p-4 rounded-3">
                        <div class="paragraph-24-bold">The quick brown fox jumps over the lazy dog</div>
                    </div>
                </div>
                <div>
                    <p>class : paragraph-20-semibold</p>
                    <div class="bg-netral10 p-4 rounded-3">
                        <div class="paragraph-20-semibold">The quick brown fox jumps over the lazy dog</div>
                    </div>
                </div>
                <div>
                    <p>class : paragraph-20-bold</p>
                    <div class="bg-netral10 p-4 rounded-3">
                        <div class="paragraph-20-bold">The quick brown fox jumps over the lazy dog</div>
                    </div>
                </div>
                <div>
                    <p>class : paragraph-17-bold</p>
                    <div class="bg-netral10 p-4 rounded-3">
                        <div class="paragraph-17-bold">The quick brown fox jumps over the lazy dog</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>