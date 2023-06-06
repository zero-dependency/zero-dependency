import React from 'react'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  href: string
  description: string
}

const FeatureList: FeatureItem[] = [
  {
    title: 'React',
    href: '/api/react',
    description: 'React hooks and utils'
  },
  {
    title: 'Fetcher',
    href: '/api/fetcher',
    description: 'Fetch wrapper'
  },
  {
    title: 'Cookie',
    href: '/api/cookie',
    description: 'document.cookie wrapper'
  },
  {
    title: 'Storage',
    href: '/api/storage',
    description: 'Web Storage wrappers'
  },
  {
    title: 'Emitter',
    href: '/api/emitter',
    description: 'Event Emitter'
  },
  {
    title: 'DOM',
    href: '/api/dom',
    description: 'DOM Utilities'
  },
  {
    title: 'Utils',
    href: '/api/utils',
    description: 'Additional utils'
  }
]

function Feature({ title, href, description }: FeatureItem) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="card">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link
            to={href}
            className="button button--secondary button--block button--md"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
