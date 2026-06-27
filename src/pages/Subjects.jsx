import PageHero from '../components/PageHero'

const subjects = [
  {
    title: 'Mathematics',
    struggles: 'Students often feel stuck on algebra, equations, and problem-solving steps.',
    help: 'Lessons focus on understanding concepts, step-by-step practice, and exam confidence.',
  },
  {
    title: 'Biology',
    struggles: 'Complex systems and scientific vocabulary can feel overwhelming.',
    help: 'Clear explanations, meaningful examples, and active review make biology more accessible.',
  },
  {
    title: 'Chemistry',
    struggles: 'Balancing reactions, formulas, and abstract concepts creates uncertainty.',
    help: 'Practical problem solving and visual reasoning help students build chemistry skills.',
  },
  {
    title: 'Physics',
    struggles: 'Physics problems can feel too abstract without strong conceptual grounding.',
    help: 'Tutoring links formulas to real-world examples and strengthens reasoning.',
  },
  {
    title: 'Study Skills',
    struggles: 'Many learners need structure for time management, note-taking, and test prep.',
    help: 'Strategic study routines and active learning techniques reduce anxiety and improve results.',
  },
]

function Subjects() {
  return (
    <div className="page-layout">
      <PageHero
        title="Subjects"
        subtitle="Focused support across core STEM subjects and study skills"
        description="Tailored lessons for the topics that matter most to high school and early university students."
        illustration="Photo"
      />
      <section className="content-block">
        <div className="subject-grid">
          {subjects.map((subject) => (
            <article key={subject.title} className="subject-card">
              <h3>{subject.title}</h3>
              <p><strong>Common struggles:</strong> {subject.struggles}</p>
              <p><strong>How tutoring helps:</strong> {subject.help}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Subjects;
