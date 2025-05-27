import { defineComponent, ref } from 'vue'

const print = (message?: string) => {
  console.log(message)
}

const IconQuestion = () => (
  <svg
    class="w-4 h-4 mr-1 inline-block text-blue-600"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M8.25 9a3.75 3.75 0 117.5 0c0 2-3.5 2.25-3.5 4.5m0 1.5h.008v.008H8.25v-.008z"
    ></path>
  </svg>
)

export default defineComponent(() => {
  const username = ref('')
  const password = ref('')

  const isLoginEnabled = () => username.value && password.value

  return () => (
    <>
      <div class="w-[400px] p-8 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col m-auto mt-20">
        {/* 顶部切换按钮 */}
        <div class="flex justify-center mb-8 border-b border-gray-200">
          <button class="px-6 py-2 text-gray-600 font-medium hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition">
            密码登录
          </button>
          <button class="px-6 py-2 text-gray-400 font-medium cursor-not-allowed" disabled>
            账户登录
          </button>
        </div>

        {/* 输入框 */}
        <div class="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="请输入用户名"
            v-model={username.value}
            class="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="password"
            placeholder="请输入密码"
            v-model={password.value}
            class="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            onClick={() => isLoginEnabled() && print('登录')}
            class={[
              'rounded-md py-3 font-semibold transition-shadow shadow-md',
              isLoginEnabled()
                ? 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed',
            ]}
            disabled={!isLoginEnabled()}
          >
            登录
          </button>
        </div>

        {/* 底部链接 */}
        <div class="flex justify-between mt-10 text-sm text-blue-600 font-medium">
          <span class="cursor-pointer hover:underline flex items-center">
            <IconQuestion />
            忘记密码？
          </span>
          <span class="cursor-pointer hover:underline flex items-center">
            <IconQuestion />
            短信登录
          </span>
          <span class="cursor-pointer hover:underline flex items-center">
            <IconQuestion />
            客服帮助
          </span>
          <span class="cursor-pointer hover:underline flex items-center">
            <IconQuestion />
            注册新用户
          </span>
        </div>
      </div>
    </>
  )
})
