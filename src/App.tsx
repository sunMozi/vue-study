import { defineComponent } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div class="min-h-screen bg-gray-100 text-gray-800">
        <header class="bg-white shadow p-4 flex justify-between items-center">
          <h1 class="text-xl font-bold">Vue + TSX App</h1>
          <nav class="space-x-4">
            <RouterLink to="/" class="text-blue-500 hover:underline">
              Home
            </RouterLink>
            <RouterLink to="/about" class="text-blue-500 hover:underline">
              About
            </RouterLink>{' '}
            <RouterLink to="/work01" class="text-blue-500 hover:underline">
              work01
            </RouterLink>{' '}
            <RouterLink to="/work02" class="text-blue-500 hover:underline">
              work02
            </RouterLink>{' '}
            <RouterLink to="/test01" class="text-blue-500 hover:underline">
              test01
            </RouterLink>{' '}
            <RouterLink to="/login" class="text-blue-500 hover:underline">
              login
            </RouterLink>
          </nav>
        </header>

        <main class="p-6">
          <RouterView />
        </main>
      </div>
    )
  },
})
