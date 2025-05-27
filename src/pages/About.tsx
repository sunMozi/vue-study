import { defineComponent, ref } from 'vue'

export default defineComponent(() => {
  const message = ref('Welcome to the About Page')

  return () => <div class="text-center text-2xl text-blue-700 font-semibold">{message.value}</div>
})
