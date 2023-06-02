import { useMemo } from 'react'
import highlightJson from '@crashmax/json-format-highlight'

interface JsonPreviewProps {
  json: any
}

export function JsonPreview(props: JsonPreviewProps) {
  const html = useMemo(() => {
    return highlightJson(props.json, {
      tagPre: true,
      wordWrap: false,
      colors: {
        backgroundColor: '#25262b',
        falseColor: '#f44747'
      }
    })
  }, [props.json])

  return <code dangerouslySetInnerHTML={{ __html: html }}></code>
}
