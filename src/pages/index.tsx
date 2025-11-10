import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Healthcare homepage">
      <main>
        <div style={{padding: '2rem', textAlign: 'center'}}>
          <h1>Welcome to Healthcare</h1>
          <p>A Docusaurus site with interactive React components</p>
          <div style={{marginTop: '2rem'}}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Get Started with Tutorial
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
