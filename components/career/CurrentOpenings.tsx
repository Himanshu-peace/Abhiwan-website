
type Job = {
  title: string
  description: string
}

const jobs: Job[] = [
  {
    title: "Project Manager",
    description:
      "We are looking for a Project Manager with experience in Virtual reality and metaverse or related sectors to oversee the planning and execution of project deliverables. This role requires strong...",
  },
  {
    title: "Unity Developer",
    description:
      "We are looking for a Unity Developer experienced in building 2D/3D games, interactive apps, and real-time environments. You'll work on gameplay systems, optimization, UI integration, and cross-platform deployment for high-quality digital experiences.",
  },
  {
    title: "Unreal Developer",
    description:
      "We are seeking an Unreal Developer with strong knowledge of Blueprints/C++ and real-time rendering. You will help create immersive worlds, optimize performance, and develop interactive features for cutting-edge games.",
  },
  {
    title: "Full-Stack Developer",
    description:
      "We need a Full-Stack Developer skilled in building scalable web platforms and dashboards. You will work across frontend and backend systems, integrating APIs, managing databases, and ensuring smooth delivery.",
  },
]

const categories = [
  "All",
  "Game Development",
  "Front End Development",
  "3D Designing",
  "UI UX Design",
  "Back End Development",
  "Sales & Marketing",
  "Training & Internships" 
]


export default function CurrentOpenings() {
  return (
    <section className=" mx-20 px-6 py-16 grid lg:grid-cols-3 gap-10">
      {/* Sidebar */}
      <div className="border-2  border-[#7c5ce3] rounded-xl p-6 h-fit">
        <h3 className="mb-4 font-semibold">Filter by Category</h3>

        <div className="h-[1px] mb-4 bg-[repeating-linear-gradient(to_right,rgba(255,255,255,1)_0_2px,transparent_6px_10px)]"></div>

        <div className="space-y-3">
          {categories.map((cat, i) => (
            <label key={i} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="category"
                defaultChecked={i === 0}
                className="accent-[#413CFF] w-5 h-5"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Jobs */}
      <div className="lg:col-span-2 space-y-8">
        {jobs.map((job, i) => (
            <div >
                <div
                    key={i}
                    className=" pb-6 pl-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                    <div>
                        <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
                        <p className="text-gray-400 text-sm max-w-xl">
                            {job.description}
                        </p>
                    </div>
                    <div className=" self-start rounded-full p-[0.8px] bg-[radial-gradient(50.91%_97.54%_at_50%_2.46%,#C3C6FF_0%,#BEBCFF_100%)]">
                        <button className="  bg-[radial-gradient(50.91%_97.54%_at_50%_2.46%,#525AFF_0%,#0900FF_100%)] px-5 py-2 rounded-full text-sm whitespace-nowrap">
                            View Role →
                        </button>
                    </div>
                </div>
                <div className="h-[1px] mb-4 bg-[repeating-linear-gradient(to_right,rgba(255,255,255,1)_0_2px,transparent_6px_10px)]"></div>
            </div>
        ))}
      </div>
    </section>
  )
}