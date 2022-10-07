// prettier-ignore
type Attributes<T extends keyof HTMLElementTagNameMap> = Partial<{
  style: Partial<CSSStyleDeclaration>
} & Omit<HTMLElementTagNameMap[T], 'style'>>

type Children = (string | Node | HTMLElement)[]

export function el<T extends keyof HTMLElementTagNameMap>(
  tag: T,
  attributes?: Attributes<T>,
  ...children: Children
): HTMLElementTagNameMap[T] {
  const el = document.createElement(tag)
  Object.assign(el, attributes)
  el.append(...children)
  return el
}

export function text(str: string): Text {
  return document.createTextNode(str)
}

export function nbsp(): Text {
  return text('\u00a0')
}
