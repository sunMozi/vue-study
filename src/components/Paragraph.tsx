import { defineComponent } from 'vue'

export const Paragraph = defineComponent({
  name: 'Paragraph',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    return () => (
      <p
        style="text-indent: 2ch;"
        class={`text-heading-3 text-[15px]  mt-5 mb-5 ${props.className}`}
      >
        {slots.default ? slots.default() : null}
      </p>
    )
  },
})
