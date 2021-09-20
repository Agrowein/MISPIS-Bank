import Head from 'next/head'
import React from 'react'
import { LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line } from 'recharts'
import styles from '../styles/Home.module.css'

class Home extends React.Component {
  state = {
    summa: 100000,
    time: 100,
    percent: 5,
    data: []
  }

  refreshPlot = () => {
    fetch('/api/savings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ summa: this.state.summa, time: this.state.time, percent: this.state.percent})
      })
      .then(response => response.json())
      .then(response => this.setState({data: response}))
  }

  componentDidMount = () => {
    this.refreshPlot()
  }
  

  handleChange = (event) => {
    this.setState({ [event.target.getAttribute('name')]: Number(event.target.value) })
    this.refreshPlot()
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Banking Savings</title>
          <meta name="description" content="" />
        </Head>
  
        <main className={styles.main}>
        <div className={styles.inputs}>
          <div>
            <input name="summa" type="text" defaultValue={this.state.summa} onChange={this.handleChange} />
            <label htmlFor="summa">Summa</label>
          </div>
          <div>
            <input name="time" type="text" defaultValue={this.state.time} onChange={this.handleChange} />
            <label htmlFor="time">Time</label>
          </div>
          <div>
            <input name="percent" type="text" defaultValue={this.state.percent} onChange={this.handleChange} />
            <label htmlFor="percent">Percent</label> 
          </div>
        </div>
        
          <LineChart
            width={1000}
            height={400}
            data={this.state.data}
          >
              <YAxis/>
              <XAxis dataKey="name"/>
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey="dl" stroke="#8884d8" />
          </LineChart>
        </main>
      </div>
    )
  }
}

export default Home
