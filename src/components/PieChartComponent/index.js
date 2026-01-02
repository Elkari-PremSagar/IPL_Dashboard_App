import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const PieChartComponent = props => {
  const {data} = props

  return (
    <div className="pie-chart-container">
      <h1 className="chart-heading">Match Statistics</h1>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius="70%"
            dataKey="value"
            label
          >
            {data.map(entry => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChartComponent
