import Image from "next/image";

const projects = [
  {
    title: "TravelBook",
    desc: "TravelBook is a full-stack travel booking platform designed to make trip planning seamless and efficient. The platform enables users to search, book, and manage travel services such as flights, hotels, and packages with a smooth user experience.",
    link: "https://travel-book-site.vercel.app/",
    image: "/travelbook.png", // Image in public/
  },
  {
    title: "Better E Mart Landing & Backend",
    desc: "Landing page and full backend for Better E Mart using React, Next.js, Node.js, Express & MongoDB. Includes role-based access, order logic, and API.",
    link: "https://ornate-kringle-858b0e.netlify.app/",
    image: "/better.png", // Image in public/

  },
  {
    title: "Social Newsfeed App",
    desc: "A simple social media newsfeed UI built with JavaScript, HTML, and CSS. Interactive, responsive, and mobile-friendly design.",
    link: "https://newsfeed-app-78f9a.web.app/#home", // Update with actual repo
    image: "/newsfeed.png",
  },
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-indigo-700 mb-12 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-white border rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <Image
              src={proj.image}
              alt={proj.title}
              width={800}
              height={384}
              className="w-full h-48 object-cover rounded-t-lg"
              style={{ width: "100%", height: "12rem", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}
              priority={i === 0}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">{proj.title}</h3>
              <p className="text-slate-600 mb-4">{proj.desc}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
