import React from 'react'

type DaySchedule = { dateLabel: string; fn: string[]; an: string[] }

const scheduleData: DaySchedule[] = [
  {
    dateLabel: 'Mon — Fri (18.08.2025 - 22.08.2025)',
    fn: [
      '8:00 AM — Kidangoor → CEP',
      '8:00 AM — Mundakayam → CEP (via Kanjirappally)',
      '8:15 AM — Kanjirappally → CEP',
      '9:15 AM — Poonjar → CEP'
    ],
    an: [
      '4:15 PM — CEP → Poonjar',
      '4:35 PM — CEP → Kanjirappilly',
      '4:35 PM — CEP → Mundakayam',
      '4:35 PM — CEP → Pala'
    ]
  },
  {
    dateLabel: 'Sat (23.08.2025)',
    fn: ['9:05 AM — Poonjar → CEP'],
    an: ['4:30 PM — CEP → Poonjar']
  }
]

const BusSchedule: React.FC = () => {
  return (
    <section className="schedule" id="schedule">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ display: 'inline-block', padding: '6px 12px', borderRadius: 999, background: '#e6f0ff', color: 'var(--primary)', fontWeight: 700 }}>TRANSPORT</div>
          <h2 style={{ margin: '12px 0 6px', fontSize: 26 }}>College Bus Schedule</h2>
          <p style={{ color: 'var(--muted)' }}>Weekday service (Mon–Fri) and a reduced Saturday schedule.</p>
        </div>

        <div className="card">
          <table className="table" role="table" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ width: 220, textAlign: 'left', padding: '12px 16px' }}>Date / Day</th>
                <th style={{ textAlign: 'left', padding: '12px 16px' }}>Forenoon (FN)</th>
                <th style={{ textAlign: 'left', padding: '12px 16px' }}>Afternoon (AN)</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, idx) => (
                <tr key={idx} style={{ borderTop: idx === 0 ? 'none' : '1px solid #f1f5f9' }}>
                  <td style={{ verticalAlign: 'top', padding: '14px 16px', fontWeight: 700 }}>{row.dateLabel}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <ul style={{ margin: 0, paddingLeft: 14 }}>
                      {row.fn.map((t, i) => (
                        <li key={i} style={{ marginBottom: 6 }}>{t}</li>
                      ))}
                    </ul>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <ul style={{ margin: 0, paddingLeft: 14 }}>
                      {row.an.map((t, i) => (
                        <li key={i} style={{ marginBottom: 6 }}>{t}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'center', marginTop: 16, color: 'var(--muted)' }}>Please arrive 5 minutes before scheduled pickup time. Times are approximate and may vary with traffic.</div>
      </div>
    </section>
  )
}

export default BusSchedule
