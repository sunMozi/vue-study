// 文件名: MusicTable.tsx
import { defineComponent, type PropType } from 'vue'

interface MusicItem {
  id: number
  title: string
  encyclopedia: string
  artist: string
  duration: string
  audioUrl: string
}

export default defineComponent({
  name: 'MusicTable',
  props: {
    data: {
      type: Array as PropType<MusicItem[]>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div class="overflow-x-auto rounded-lg shadow-lg">
        <table class="min-w-full border-collapse text-sm">
          <thead class="bg-gradient-to-r from-blue-500 to-purple-600">
            <tr>
              <th class="px-4 py-3 text-white font-semibold border-b border-purple-700">编号</th>
              <th class="px-4 py-3 text-white font-semibold border-b border-purple-700">标题</th>
              <th class="px-4 py-3 text-white font-semibold border-b border-purple-700">歌手</th>
              <th class="px-4 py-3 text-white font-semibold border-b border-purple-700">时长</th>
              <th class="px-4 py-3 text-white font-semibold border-b border-purple-700">播放</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {props.data.map((item, index) => (
              <tr
                key={item.id}
                class={[
                  'transition-colors',
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white',
                  'hover:bg-purple-50',
                ]}
              >
                <td class="px-4 py-3 text-gray-600 font-medium">{index + 1}</td>
                <td class="px-4 py-3 text-gray-800 font-medium">{item.title}</td>
                <td class="px-4 py-3">
                  <a
                    href={item.encyclopedia}
                    class="text-purple-600 hover:text-purple-800 hover:bg-purple-100 px-2 py-1 rounded-md transition-colors"
                  >
                    {item.artist}
                  </a>
                </td>
                <td class="px-4 py-3 text-gray-500">{item.duration}</td>
                <td class="px-4 py-3">
                  <audio
                    controls
                    class="w-32 h-8 accent-purple-600"
                    preload="none"
                    src={item.audioUrl}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
})
