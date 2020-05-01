import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
        <br/>
          <p style={{color: "black", fontSize: 50, fontWeight: 'bold'}}>
            Home of badeand
          </p>
          <br/>
          <Link to="/projects/list">
            <Button type="primary" size="large" icon="right-circle" style={{marginRight: 10}}>Projects</Button>
          </Link>
          <Link to="/aboutme/aboutme">
            <Button type="primary" size="large" icon="right-circle" style={{marginRight: 10}}>About me</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
