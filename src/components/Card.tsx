// components/Card.tsx

import { defineComponent, type SlotsType } from 'vue'
import type { CardSlots } from './types'

export default defineComponent({
  name: 'Card',
  props: {
    title: String,
    bordered: {
      type: Boolean,
      default: true,
    },
    shadow: {
      type: Boolean,
      default: true,
    },
  },
  slots: Object as SlotsType<CardSlots>,
  setup(props, { slots }) {
    const cardClass = [
      'rounded-2xl p-4 transition duration-300',
      props.bordered ? 'border border-gray-200' : '',
      props.shadow ? 'shadow-md hover:shadow-lg' : '',
      'bg-white',
    ].join(' ')

    return () => (
      <div class={cardClass}>
        {/* Header Slot or Title */}
        {slots.header ? (
          <div class="mb-2 text-lg font-semibold">{slots.header()}</div>
        ) : props.title ? (
          <div class="mb-2 text-lg font-semibold">{props.title}</div>
        ) : null}

        {/* Default Slot */}
        <div class="text-gray-700">{slots.default?.()}</div>

        {/* Footer Slot */}
        {slots.footer && <div class="mt-4 text-sm text-gray-500">{slots.footer()}</div>}
      </div>
    )
  },
})
