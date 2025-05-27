import { Paragraph } from '@/components/Paragraph'
import { defineComponent } from 'vue'

const Image = (props: { src: string; alt: string; width?: number; height?: number }) => (
  <img
    src={props.src}
    alt={props.alt}
    width={props.width ?? 600}
    height={props.height ?? 500}
    loading="lazy"
    class="my-6 rounded-md shadow-md mx-auto"
  />
)

export default defineComponent(() => {
  return () => (
    <>
      <div class="container max-w-4xl border p-6 rounded-md bg-white shadow-md m-auto">
        <h1 class="text-center mt-5 text-3xl font-bold leading-tight">
          蒋飞：美国经济开启衰退模式
        </h1>
        <p class="text-center mt-2 text-sm font-semibold text-gray-600">
          2023年03月24日16:17 作者: 蒋飞
        </p>

        <hr class="border-t border-dashed border-gray-300 my-6" />

        <iframe
          class="mt-5 mx-auto rounded-md shadow-lg"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/Qkz_DPS3FJo?si=qWDl1CTDVn92sDx5"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          loading="lazy"
        ></iframe>

        <Paragraph>
          经历2022年以来持续加息的影响,美国部分经济指标回落速度正在加快。首先,M2同比增速已经降至1月的-1.73%,与去年同期的11.74%相比已经大幅收缩。同时CPI同比增速也从去年6月最高点的9.1%回落至2月份的6%。
        </Paragraph>

        <Image src="/img/1.png" alt="经济指标走势图" />

        <Paragraph>
          其次,2022年12月,美国20大中城市房价环比-0.93%,同比回落至4.65%,较最高点21.29%大幅下降。目前美国房贷利率依然高达6.66%,根据房贷利率领先房价增速大约9个月的规律,美国房价还将继续下跌。
        </Paragraph>

        <Image src="/img/2.png" alt="美国房价走势图" />

        <Paragraph>
          再者,美国零售和食品服务销售额同比增速已经下滑至2月的5.39%,处于2021年以来的最低增速；制造业PMI指数也已经连续两个月跌破48%,从2000年以来,美国制造业PMI有5次跌破并持续位于48%以下,均发生了经济衰退。
        </Paragraph>

        <Image src="/img/3.png" alt="制造业PMI指数变化" />

        <Paragraph>
          商业银行危机爆发,流动性继续紧张。随着加息效果的逐渐显现,部分银行出现了流动性问题。比如硅谷银行,其主要存款客户都是科技创业公司。在一级融资市场收紧的情况下,这些公司开始取出存在硅谷银行的存款,而这些存款被硅谷银行投资到持有到期的证券上。由于存款规模较大,证券账面处于亏损状态,造成恐慌和挤兑,进而演变成区域性银行危机。3月8日,美国加息货币友好银行Silvergate宣告停止运营,清算资产。3月10日,美国硅谷银行被联邦存款银行保险公司（FDIC）介入接管,中止运营。3月12日,Signature
          Bank被监管机构关闭。美联储加息以来,美国商业银行证券投资普遍亏损,目前危机还未结束。
        </Paragraph>

        <Image src="/img/4.png" alt="银行危机相关图表" />

        <Paragraph>
          3月9日,美国拜登政府公布了2024财年财政预算案,预计国会两党将展开激烈争辩。拜登政府对2024财年提出了6.88万亿美元的预算总额,较2023财年的6.37万亿增长了8%（5100亿美元）。2024财年预算收入5.04万亿美元,较2023年财年4.80万亿增加了5%（2400亿美元）。这意味着,美国仍有2700亿美元的预算赤字。
        </Paragraph>

        <Image src="/img/5.png" alt="财政预算案相关数据" />

        <p class="text-right mr-10 text-gray-400 text-xs">责任编辑：宋源珺</p>
      </div>
    </>
  )
})
