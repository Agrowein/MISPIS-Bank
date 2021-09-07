import Head from 'next/head'
import React from 'react'
import { LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line } from 'recharts'
import styles from '../styles/Home.module.css'

class Home extends React.Component {
  state = {
    summa: 100000,
    time: 5,
    percent: 5,
    data: [{name: '1 year', uv: 400, pv: 2400, amt: 2400}, {name: '2 year', uv: 300, pv: 2400, amt: 2400}]
  }

  handleChange = (event) => {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ summa: this.state.summa, time: this.state.time })
    };
    fetch('/index', req)
        .then(response => response.json())
        .then(d => this.setState({data: d}))
        .then(() => console.log(this.state.data))
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Banking Savings</title>
          <meta name="description" content="" />
        </Head>
  
        <main className={styles.main}>
  
        <input name="summa" type="text" defaultValue={this.state.summa} onChange={this.handleChange} />
        <label htmlFor="summa">Summa</label>
        <input name="time" type="text" defaultValue={this.state.time} onChange={this.handleChange} />
        <label htmlFor="time">Time</label>
        <input name="percent" type="text" defaultValue={this.state.percent} />
        <label htmlFor="percent">Percent</label> 
          <LineChart
            width={400}
            height={400}
            data={this.state.data}
          >
              <YAxis/>
              <XAxis dataKey="name"/>
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        </main>
      </div>
    )
  }
}

export default Home
