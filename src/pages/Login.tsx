import { defineComponent, ref } from 'vue'

const print = (message?: string) => {
  console.log(message)
}

const IconQuestion = () => (
  <svg
    class="icon fill-[#a145e7]"
    viewBox="0 0 1077 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3186"
    width="15"
    height="15"
  >
    <path
      d="M797.642105 738.357895m-269.473684 0a269.473684 269.473684 0 1 0 538.947368 0 269.473684 269.473684 0 1 0-538.947368 0Z"
      p-id="3187"
    ></path>
    <path
      d="M530.367326 965.319411a187.683032 187.683032 0 0 1-141.468294-64.296422L54.595368 517.928421a154.839579 154.839579 0 0 1-9.701052-191.929937l150.258526-211.973389A155.648 155.648 0 0 1 321.891705 48.505263h422.179032a155.168337 155.168337 0 0 1 128.905431 68.694232l142.465348 212.108126a155.771958 155.771958 0 0 1-11.156211 187.941726l-140.557473 184.675706a36.432842 36.432842 0 0 1-51.259285 5.055326 36.341221 36.341221 0 0 1-11.754442-38.723368 36.529853 36.529853 0 0 1 6.699116-12.535916l140.557474-185.0368 0.592842-0.727579a82.609853 82.609853 0 0 0 6.117052-99.748379l-142.459957-212.113516a82.340379 82.340379 0 0 0-68.424758-36.271158H321.8432a82.755368 82.755368 0 0 0-67.287579 34.729769L104.286316 368.305853a82.205642 82.205642 0 0 0 5.168505 101.877221l334.255158 382.911326a114.860463 114.860463 0 0 0 86.608842 39.359326h0.226358a114.914358 114.914358 0 0 0 86.695074-39.720421l75.538863-85.423158a36.352 36.352 0 0 1 24.915537-12.498189 36.465179 36.465179 0 0 1 26.456926 8.779453 36.481347 36.481347 0 0 1 12.498189 24.915536 36.405895 36.405895 0 0 1-8.779452 26.456927l-75.544253 85.649515a187.887832 187.887832 0 0 1-141.597642 64.840758h-0.366484v-0.134736z"
      p-id="3188"
    ></path>
    <path
      d="M727.746021 300.005053a37.726316 37.726316 0 0 1 4.333137 53.172547l-194.732463 229.284379-209.434948-228.190316a37.726316 37.726316 0 0 1 55.587032-51.022147l151.659789 165.241263 139.414906-164.15259a37.720926 37.720926 0 0 1 53.172547-4.333136z"
      p-id="3189"
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
