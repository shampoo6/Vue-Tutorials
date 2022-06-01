import {createSSRApp} from "vue";

export function createApp() {
  return createSSRApp({
    data: () => ({
      count: 1
    }),
    template: `
      <div>
      <div>{{ count }}</div>
      <button @click="count++">+</button>
      </div>
    `
  })
}