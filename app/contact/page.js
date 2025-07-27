export default function Contact() {
  return (
    <div className="bg-white max-w-xl mx-auto mt-12 p-8 rounded-lg shadow">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4 text-center">Contact Me</h2>
      <p className="text-center text-slate-700 mb-6">
        Feel free to reach out via any of the platforms below:
      </p>
      <ul className="space-y-3 text-center text-slate-600">
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:efterjahanema@example.com" className="text-indigo-600 hover:underline">
            efterjahanema@example.com
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/efter-jahan-ema-143119214/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            https://www.linkedin.com/in/efter-jahan-ema-143119214/
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/Efter-26"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            https://github.com/Efter-26
          </a>
        </li>
      </ul>
    </div>
  )
}
