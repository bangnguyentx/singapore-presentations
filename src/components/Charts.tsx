'use client';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { ChartConfig } from '@/data/slides';

const COLORS = ['#EF3340', '#F6C85F', '#14B8A6', '#64748B', '#F25C66'];

interface Props {
  config: ChartConfig;
}

export default function Charts({ config }: Props) {
  return (
    <div className="glass p-6 rounded-lg chart-container">
      <h3 className="text-xl font-semibold mb-4 text-singapore-gold">
        {config.title}
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        {config.type === 'bar' && (
          <BarChart data={config.data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey={config.xAxisKey} stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0F1724',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Bar dataKey={config.dataKey} fill="#EF3340" />
          </BarChart>
        )}

        {config.type === 'line' && (
          <LineChart data={config.data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey={config.xAxisKey} stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0F1724',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Line type="monotone" dataKey={config.dataKey} stroke="#EF3340" strokeWidth={3} />
          </LineChart>
        )}

        {config.type === 'pie' && (
          <PieChart>
            <Pie
              data={config.data}
              dataKey={config.dataKey}
              nameKey={config.xAxisKey}
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {config.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        )}

        {config.type === 'area' && (
          <AreaChart data={config.data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey={config.xAxisKey} stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0F1724',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
              }}
            />
            <Area type="monotone" dataKey={config.dataKey} stroke="#EF3340" fill="rgba(239,51,64,0.3)" />
          </AreaChart>
        )}
      </ResponsiveContainer>
      <p className="text-xs text-gray-500 mt-4 text-center source-citation">
        Data visualization based on sample/estimated data. Verify with official sources.
      </p>
    </div>
  );
}
