export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-slate-100 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-700">Hello, I am Efter Jahan a passionate Full Stack Developer</h1>
        <p className="mt-6 text-xl text-slate-700">
          I craft scalable web apps using React.js, Next.js, Node.js, Express.js, Python, Django, MongoDB and SQL Database.
        </p>
        <a
          href="/projects"
          className="mt-8 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition"
        >
          View My Work
        </a>
      </div>
    </section>
  )
}
