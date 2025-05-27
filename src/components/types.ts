// components/types.ts

import type { JSX } from 'vue/jsx-runtime'

export interface CardSlots {
  default?: () => JSX.Element
  header?: () => JSX.Element
  footer?: () => JSX.Element
}
