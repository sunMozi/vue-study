import { computed, defineComponent, ref, watch } from 'vue'
import Card from '@/components/Card'

export default defineComponent(() => {
  const message = ref('Welcome to the Home Page')
  const count = ref(0)
  const double = computed(() => count.value * 2)

  watch(count, (newVal, oldVal) => {
    console.log('count changed:', oldVal, '→', newVal)
  })
  return () => (
    <>
      <div class="p-4">
        <p>Count: {count.value}</p>
        <p>Double: {double.value}</p>
        <button class="mt-2 px-4 py-1 bg-blue-600 text-white" onClick={() => count.value++}>
          +1
        </button>
      </div>

      {/* 使用插槽渲染 Header/Footer */}
      <Card bordered shadow>
        {{
          header: () => <span>📦 插槽标题</span>,
          default: () => <p>这是卡片正文内容。</p>,
          footer: () => <span>©2025 Mozi Inc.</span>,
        }}
      </Card>

      {/* 使用 props.title + 默认插槽 */}
      <Card title="属性标题">
        <p>这是使用 props.title 的卡片内容</p>
      </Card>
    </>
  )
})
