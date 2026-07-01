import PageHero from '../components/PageHero'

const subjects = [
  {
    title: 'Mathematics',
    struggles: 'Algebra, functions, graphing, trigonometry, calculus, and multi-step word problems can become frustrating when one earlier idea is shaky.',
    help: 'We slow the problem down, rebuild the missing step, and practice until the student can explain what they are doing and why.',
  },
  {
    title: 'Biology',
    struggles: 'Biology can feel like too many terms, systems, and diagrams to memorize.',
    help: 'Tutoring connects vocabulary to mechanisms, examples, and visual explanations so the subject becomes easier to reason through.',
  },
  {
    title: 'Chemistry',
    struggles: 'Balancing equations, stoichiometry, bonding, formulas, and abstract molecular ideas can be hard to picture.',
    help: 'We use structured problem-solving, visuals, and repeated practice to make chemistry feel less mysterious.',
  },
  {
    title: 'Physics',
    struggles: 'Physics often becomes difficult when students try to memorize formulas without seeing the physical situation clearly.',
    help: 'Tutoring focuses on diagrams, units, variables, and real-world meaning before jumping into the math.',
  },
  {
    title: 'Computer Science',
    struggles: 'Programming, logic, debugging, data, and algorithms can feel overwhelming when the student does not know how to break problems apart.',
    help: 'We work step by step through code, concepts, and debugging habits so students build confidence as independent problem solvers.',
  },
  {
    title: 'Study Skills',
    struggles: 'Some students understand lessons in class but struggle to organize notes, prepare for tests, or know how to practice effectively.',
    help: 'We build practical routines for review, problem setup, active recall, test preparation, and time management.',
  },
]

function Subjects() {
  return (
    <div className="page-layout">
      <PageHero
        title="Subjects"
        subtitle="Focused support across math, science, computer science, and study skills."
        description="Tutoring can follow the student’s current course, rebuild foundations, or extend learning for students who want a deeper challenge."
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
