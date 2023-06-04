import { useMemo } from 'react'
import { useRouter } from '../libs/router/hook'
import { FlexWrap } from './flex-wrap'

export function Navigation() {
  const { createUrl, routes } = useRouter()

  const navigation = useMemo(() => {
    return Object.entries(routes)
      .slice(2) // slice home and notFound
      .map(([pathname, route]) => (
        <a
          key={pathname}
          {...createUrl(pathname)}
        >
          <button key={pathname}>{route.title}</button>
        </a>
      ))
  }, [])

  return <FlexWrap>{navigation}</FlexWrap>
}
