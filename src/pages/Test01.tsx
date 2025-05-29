import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'

export default defineComponent(() => {
  const count = ref(0)
  const text = ref('Hello World')
  const items = ref(['Item 1', 'Item 2', 'Item 3'])

  const print = (message?: string) => {
    console.log(message)
    count.value++
  }

  const reset = () => {
    count.value = 0
    text.value = ''
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      print('Triggered by keyboard')
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeyDown)
  })

  return () => (
    <div class="flex items-center h-screen flex-col overflow-hidden">
      <h1 class="text-red-300 text-5xl mt-[100px] mb-10">{text.value}</h1>
      <h1 class="text-red-300 text-5xl mb-10">{count.value}</h1>
      <h1 class="text-red-300 text-5xl mb-10">{count.value * 2}</h1>
      <h1 class="text-red-300 text-5xl mb-10">{count.value * 3}</h1>

      <input
        type="text"
        v-model={text.value}
        class="px-10 py-5 bg-violet-400 rounded-2xl border-blue-500 border-2 mb-6"
      />

      <div class="flex space-x-4">
        <button
          class="px-10 py-5 bg-violet-400 rounded-2xl border-blue-500 border-2 hover:bg-amber-400 hover:border-red-500 duration-300"
          onClick={() => print('Hello World')}
        >
          click me
        </button>

        <button
          class="px-10 py-5 bg-gray-300 rounded-2xl border-gray-500 border-2 hover:bg-red-300 hover:border-red-500 duration-300"
          onClick={reset}
        >
          reset
        </button>
      </div>
      {items.value.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </div>
  )
})
