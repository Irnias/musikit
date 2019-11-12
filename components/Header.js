import React from 'react'
import Head from 'next/head'
import mIco from '../static/m-ico.ico'

class Header extends React.Component {
  render() {
    const { title } = this.props
    return (
      <Head>
        <title>{title}</title>
        <link rel='icon' href={mIco} />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,user-scalable=no,minimum-scale=1.0,maximum-scale=1.0"
        />
      </Head>
    );
  }
}

export default Header;
