import { defineComponent } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

// 将导航配置抽离为常量
const NAV_ITEMS = [
  { name: '首页', path: '/' },
  { name: 'About', path: '/about' },
  { name: '作业1', path: '/work01' },
  { name: '作业2', path: '/work02' },
  { name: '作业3', path: '/work03' },
  { name: '测试1', path: '/test01' },
  { name: 'Login', path: '/login' },
] as const

export default defineComponent({
  name: 'App',

  setup() {
    // 响应式处理可能需要的话可以在这里添加逻辑
    return () => (
      <div class="min-h-screen bg-gray-100 text-gray-800">
        <AppHeader />
        <main class="p-4 md:p-6 container mx-auto">
          <RouterView />
        </main>
      </div>
    )
  },
})

// 抽离头部为独立组件
const AppHeader = defineComponent({
  setup() {
    return () => (
      <header class="bg-white shadow p-4">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 class="text-xl font-bold whitespace-nowrap">Vue + TSX App</h1>
          <NavBar />
        </div>
      </header>
    )
  },
})

// 抽离导航栏为独立组件
const NavBar = defineComponent({
  setup() {
    return () => (
      <nav class="flex flex-wrap justify-center gap-4 md:gap-6">
        {NAV_ITEMS.map((item) => (
          <RouterLink
            key={item.path}
            to={item.path}
            class={[
              'px-2 py-1',
              'text-gray-600 hover:text-blue-500',
              'transition-colors duration-200',
              'border-b-2 border-transparent',
              'hover:border-blue-300',
            ]}
            activeClass="!text-blue-700 !border-blue-600 font-semibold"
          >
            {item.name}
          </RouterLink>
        ))}
      </nav>
    )
  },
})
