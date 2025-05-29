import { defineComponent, ref } from 'vue'

export default defineComponent(() => {
  const empList = ref([
    {
      id: 1,
      name: '谢逊',
      image: 'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/4.jpg',
      gender: 1,
      job: 1,
      entrydate: '2023-06-09',
      updatetime: '2024-07-30T14:59:38',
    },
    {
      id: 2,
      name: '韦一笑',
      image: 'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg',
      gender: 1,
      job: '1',
      entrydate: '2020-05-09',
      updatetime: '2023-07-01T00:00:00',
    },
    {
      id: 3,
      name: '黛绮丝',
      image: 'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/2.jpg',
      gender: 2,
      job: 2,
      entrydate: '2021-06-01',
      updatetime: '2023-07-01T00:00:00',
    },
  ])

  const genderMap: Record<number, string> = { 1: '男', 2: '女' }
  const jobMap = { 1: '前端工程师', 2: 'UI 设计师' }

  return () => (
    <div class="overflow-x-auto rounded-lg shadow-lg">
      <table class="min-w-full border-collapse text-sm">
        <thead class="bg-gradient-to-r from-blue-500 to-purple-600">
          <tr>
            <th class="px-4 py-3 text-white font-semibold border-b border-purple-700">ID</th>
            <th class="px-4 py-3 text-white font-semibold border-b border-purple-700">姓名</th>
            <th class="px-4 py-3 text-white font-semibold border-b border-purple-700">头像</th>
            <th class="px-4 py-3 text-white font-semibold border-b border-purple-700">性别</th>
            <th class="px-4 py-3 text-white font-semibold border-b border-purple-700">职位</th>
            <th class="px-4 py-3 text-white font-semibold border-b border-purple-700">入职日期</th>
            <th class="px-4 py-3 text-white font-semibold border-b border-purple-700">更新时间</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {empList.value.map((item, index) => (
            <tr
              key={item.id}
              class={[
                'transition-colors',
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white',
                'hover:bg-purple-50',
              ]}
            >
              <td class="px-4 py-2 text-center">{item.id}</td>
              <td class="px-4 py-2">{item.name}</td>
              <td class="px-4 py-2">
                <img src={item.image} alt={item.name} class="w-12 h-12 rounded-full object-cover" />
              </td>
              <td class="px-4 py-2">{genderMap[item.gender]}</td>
              <td class="px-4 py-2">{jobMap[item.job]}</td>
              <td class="px-4 py-2">{new Date(item.entrydate).toLocaleDateString()}</td>
              <td class="px-4 py-2">{new Date(item.updatetime).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
})
