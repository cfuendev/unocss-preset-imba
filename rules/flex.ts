import type { Rule } from '@unocss/core'

const properties: Rule[] = [
    [/^flex:(.+)$/, ([_, val]) => ({ flex: val })],
    [/^fl:(.+)$/, ([_, val]) => ({ flex: val })],
    [/^flex-basis:(.+)$/, ([_, val]) => ({ flex: val })],
]

const displayValues: Rule[] = [

]