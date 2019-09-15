import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header.js"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="hem" />
    <h1>protein redesign</h1>
    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>计算生物学和生物信息学的边界不是很明显。</p>
    <p>从头设计具有生物活性的蛋白质开关是很有趣的方向。</p>

    <ul>
      <li><a href="https://zhuanlan.zhihu.com/p/77760095">重头合成蛋白质开关</a></li>
      <li><Link to="/cidr/">CIDR for single cell RNA-seq data</Link></li>
      <li><Link to="/dropclust/">dropClust: 大规模单细胞RNA数据的聚类方法</Link></li>
      <li><Link to="/om/">Om</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
