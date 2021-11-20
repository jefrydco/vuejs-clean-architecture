<template>
  <div class="dialog">
    <div class="dialog__card">
      Are you sure?
      <div>
        <button
          class="dialog__btn dialog__btn--warning"
          @click="$emit('cancel')"
        >
          Cancel
        </button>
        <button class="dialog__btn dialog__btn--primary" @click="$emit('oke')">
          Oke
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.dialog {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dialog__card {
  background-color: white;
  width: 300px;
  padding: 5px;
  border-radius: 5px;
}

.dialog__btn {
  padding: 5px 10px;
  border: none;
  color: white;
}

.dialog__btn--warning {
  background-color: rgb(244, 180, 0);
}

.dialog__btn--primary {
  background-color: rgb(79, 195, 247);
}
</style>
