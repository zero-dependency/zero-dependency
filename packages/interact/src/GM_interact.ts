import displace from 'displacejs'

export class GM_interact {
  private target: HTMLElement
  private displace: DisplaceJSObject
  private options: DisplaceJSOptions | undefined

  constructor(...args: Parameters<typeof displace>) {
    this.target = this.options?.handle ?? args[0]
    this.options = args[1]
    this.displace = displace(...args)
    this.destroy()
    this.reinit = this.reinit.bind(this)

    const init = () => {
      this.displace.reinit()
      this.target.removeEventListener('mouseenter', init)
    }

    this.target.addEventListener('mouseenter', init)
    window.addEventListener('resize', this.reinit)
  }

  reinit(): void {
    this.displace.reinit()
  }

  destroy(): void {
    this.displace.destroy()
    window.removeEventListener('resize', this.reinit)
  }

  changePosition(x: number, y: number): void {
    this.target.style.left = `${x}px`
    this.target.style.top = `${y}px`
  }
}
