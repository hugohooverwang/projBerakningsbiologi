import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="hem" />
    <h1>Einzelzellanalyse</h1>

    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>In the field of cellular biology, single-cell analysis is the study of genomics, transcriptomics, proteomics and metabolomics at the single cell level.</p>
    <p>Now go build something great.</p>
    <ul>
      <li><Link to="/cidr/">CIDR for single cell RNA-seq data</Link></li>
      <li><Link to="/dropclust/">dropClust: 大规模单细胞RNA数据的聚类方法</Link></li>
      <li><Link to="/om/">Om</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
