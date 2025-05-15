<template>
    <div class="bg-white shadow-2xl w-full rounded-bl-[40px] rounded-tr-[40px] p-16">
        <input placeholder="Namamu" class="input input-outline mb-5"/>
        <input placeholder="Telepon" class="input input-outline mb-5"/>
        <input placeholder="Email" class="input input-outline mb-5"/>
        <textarea placeholder="Pesanmu" class="input input-outline textarea mb-14"></textarea>
        <button-paper-button
                :title="'Kirim Pesan  ➔'"
                :customClass="'btn-paper bg-primary30 w-50'"
                :isIcon="false"
              />
    </div>
</template>