import React from 'react'

const CourseTable: React.FC = () => {
  const courses = [
    {
      id: 1,
      name: "Computer Science",
      duration: "4 years",
      seats: 120,
      description: "Learn software development, AI, and cutting-edge technologies",
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Mechanical Engineering",
      duration: "4 years",
      seats: 90,
      description: "Design and analyze mechanical systems and robotics",
      icon: "⚙️",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      name: "Electrical Engineering",
      duration: "4 years",
      seats: 90,
      description: "Study power systems, electronics, and automation",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      name: "Civil Engineering",
      duration: "4 years",
      seats: 60,
      description: "Design sustainable infrastructure and buildings",
      icon: "🏗️",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      name: "Business Administration",
      duration: "3 years",
      seats: 120,
      description: "Master business strategy and leadership skills",
      icon: "📊",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 6,
      name: "Data Science",
      duration: "4 years",
      seats: 80,
      description: "Analyze big data and drive business insights",
      icon: "📈",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section style={{padding:40}}>
      <div style={{maxWidth:1100,margin:'0 auto',textAlign:'center'}}>
        <h3 style={{marginBottom:12}}>Our Programs</h3>
        <p style={{color:'var(--muted)'}}>Explore our academic offerings on the website.</p>
      </div>
    </section>
  )
}

export default CourseTable
