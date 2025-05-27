import { defineComponent } from 'vue'

const print = (message?: string) => {
  console.log(message)
}

export default defineComponent(() => {
  return () => (
    <>
      <button
        class="px-10 py-5 bg-violet-400 rounded-2xl  border-blue-500 border-2 hover:bg-amber-400 hover:border-red-500 duration-300"
        onClick={() => print('Hello World')}
      >
        click me
      </button>
    </>
  )
})
