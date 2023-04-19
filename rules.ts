import type { Rule } from '@unocss/core'

const rules: Rule[] = [
    [/^m:(.+)$/, ([_, val]) => ({ margin: val })],
    [/^p:(.+)$/, ([_, val]) => ({ padding: val })],
    [/^rd:(.+)$/, ([_, val]) => ({ 'border-radius': val })],
    [/^bg:(.+)$/, ([_, val]) => ({ background: val })],
    [/^of:(.+)$/, ([_, val]) => ({ overflow: val })],
  ]

  export default { rules }