import CTASection from '../components/CTASection'
import '../home-v2.css'

const painPoints = [
  'I understand it in class, then freeze when I try it alone.',
  'My child is capable, but they are losing confidence.',
  'The homework takes forever because one missing step derails everything.',
]

const principles = [
  {
    title: 'Find the missing piece',
    text: 'Most confusion has a source. We slow the problem down until we find the idea, skill, or assumption that is getting in the way.',
  },
  {
    title: 'Understand before memorizing',
    text: 'Formulas matter, but they make more sense when students understand the situation, the pattern, and the reason behind each step.',
  },
  {
    title: 'Build independent problem solvers',
    text: 'The goal is not to create dependence on tutoring. The goal is to help students think clearly enough to tackle the next problem on their own.',
  },
]

const credentials = [
  'BSc in Life Sciences',
  'MBA',
  'Post-Graduate Certificate in Law',
  'College Diploma in Paramedicine',
  'Formal training in Mathematics and Physics',
  'Computer Science educator',
]

const subjects = [
  { name: 'Mathematics', note: 'algebra, functions, calculus, problem solving' },
  { name: 'Physics', note: 'motion, forces, energy, circuits, formulas that make sense' },
  { name: 'Chemistry', note: 'reactions, stoichiometry, bonding, structured practice' },
  { name: 'Biology', note: 'systems, vocabulary, mechanisms, clear explanations' },
  { name: 'Computer Science', note: 'programming, debugging, logic, computational thinking' },
  { name: 'Study Skills', note: 'test prep, review habits, confidence, organization' },
]

const steps = [
  'Start with a conversation',
  'Find where things are getting stuck',
  'Build a simple learning plan',
  'Practice until confidence grows',
]

const resources = ['Articles', 'Practice problems', 'Videos', 'Interactive tools', 'Books and workbooks']

function Home() {
  return (
    <div className="home-v2">
      <section className="v2-hero">
        <div className="v2-hero-copy">
          <p className="v2-eyebrow">Learn STEM With Chris</p>
          <h1>Helping students discover they can understand STEM.</h1>
          <p className="v2-lede">
            Patient, practical tutoring in mathematics, science, computer science, and study skills for high school and early university students.
          </p>
          <p className="v2-belief">Because confidence begins with understanding.</p>
          <div className="v2-actions">
            <a className="button button-primary" href="/contact">Book a consultation</a>
            <a className="button button-secondary" href="/subjects">Explore subjects</a>
          </div>
        </div>
        <div className="v2-learning-card" aria-label="Learning snapshot illustration">
          <div className="v2-card-topline">STEM learning lab</div>
          <div className="v2-equation">y = mx + b</div>
          <div className="v2-sketch-grid">
            <span>atoms</span>
            <span>graphs</span>
            <span>code</span>
            <span>motion</span>
          </div>
          <div className="v2-confidence-meter">
            <span>confusion</span>
            <div><strong /></div>
            <span>confidence</span>
          </div>
        </div>
      </section>

      <section className="v2-section v2-problem-section">
        <div className="v2-section-intro">
          <p className="v2-eyebrow">When STEM feels frustrating</p>
          <h2>You are not alone.</h2>
          <p>
            A student can be bright, curious, and hardworking — and still feel completely stuck when math or science starts moving too fast.
          </p>
        </div>
        <div className="v2-pain-grid">
          {painPoints.map((point) => (
            <article key={point} className="v2-pain-card">
              <span>“</span>
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-section v2-philosophy">
        <div>
          <p className="v2-eyebrow">How I teach</p>
          <h2>Understanding comes first.</h2>
          <p>
            One of the biggest misconceptions about STEM is that success comes from memorizing more formulas. It does not. Success comes from understanding the idea well enough that the formula, diagram, code, or method has somewhere to connect.
          </p>
          <p>
            Every session is built around that principle: slow things down, find the missing piece, and help the student leave with a clearer way to think.
          </p>
        </div>
        <div className="v2-principle-grid">
          {principles.map((principle) => (
            <article key={principle.title} className="v2-principle-card">
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-section v2-chris-section">
        <div className="v2-photo-placeholder">
          <span>Chris photo</span>
        </div>
        <div>
          <p className="v2-eyebrow">Meet Chris</p>
          <h2>A lifelong learner helping students become confident problem solvers.</h2>
          <p>
            My background spans science, business, law, healthcare, mathematics, physics, computer science, technology, and education. I have spent much of my life learning difficult things, applying them in the real world, and helping others understand them more clearly.
          </p>
          <p>
            That is the spirit behind Learn STEM With Chris. I do not just want students to get through tonight’s homework. I want them to experience the moment when a difficult idea finally makes sense.
          </p>
          <div className="v2-credentials" aria-label="Chris's education and background">
            {credentials.map((credential) => (
              <span key={credential}>{credential}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-section-intro">
          <p className="v2-eyebrow">Areas we explore together</p>
          <h2>Support across core STEM subjects.</h2>
        </div>
        <div className="v2-subject-grid">
          {subjects.map((subject) => (
            <article key={subject.name} className="v2-subject-card">
              <h3>{subject.name}</h3>
              <p>{subject.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-section v2-steps-section">
        <div>
          <p className="v2-eyebrow">How tutoring works</p>
          <h2>A simple path from stuck to clearer.</h2>
        </div>
        <ol className="v2-step-list">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="v2-section v2-resources-section">
        <div>
          <p className="v2-eyebrow">Looking ahead</p>
          <h2>More than tutoring.</h2>
          <p>
            Learn STEM With Chris can grow into a library of explanations, practice problems, videos, books, and interactive learning tools. Tutoring is the personal starting point — the bigger mission is helping students learn how to learn difficult things.
          </p>
        </div>
        <div className="v2-resource-cloud">
          {resources.map((resource) => (
            <span key={resource}>{resource}</span>
          ))}
        </div>
      </section>

      <CTASection
        title="Let’s start with a conversation."
        description="Tell me what course you are taking, what feels frustrating, and where you would like to be. We will decide together whether I am the right person to help."
        buttonText="Contact Chris"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Home;
