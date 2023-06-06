import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

interface SelectPackageManagerProps {
  packageName: string
}

export default function SelectPackageMananger(props: SelectPackageManagerProps) {
  const packageManagers = [
    {
      name: 'pnpm',
      command: 'add'
    },
    {
      name: 'yarn',
      command: 'add'
    },
    {
      name: 'npm',
      command: 'install'
    }
  ]

  const tabs = packageManagers.map((manager) => {
    return (
      <TabItem
        key={manager.name}
        value={manager.name}
        label={manager.name}
      >
        <CodeBlock language="bash">
          {manager.name} {manager.command} @zero-dependency/{props.packageName}
        </CodeBlock>
      </TabItem>
    )
  })

  return <Tabs>{tabs}</Tabs>
}
