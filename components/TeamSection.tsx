export default function TeamSection() {
  const team = [
    { name: 'Dr. Amara Okonkwo', role: 'CEO & Co-founder', initials: 'AO', color: 'from-blue-400 to-cyan-500' },
    { name: 'James Kipchoge', role: 'CTO', initials: 'JK', color: 'from-purple-400 to-pink-500' },
    { name: 'Sarah Mwangi', role: 'Head of Operations', initials: 'SM', color: 'from-green-400 to-emerald-500' },
    { name: 'Kofi Mensah', role: 'Director of Research', initials: 'KM', color: 'from-orange-400 to-red-500' },
  ];

  return (
    <section id="team" className="relative bg-[#07080A] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">Leadership Team</h2>
          <p className="mt-4 text-lg text-white/60">Visionary leaders committed to transforming African agriculture</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="group rounded-xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-300 hover:border-[#C9A84C] animate-float-card"
            >
              {/* Avatar */}
              <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.color} text-2xl font-bold text-white`}>
                {member.initials}
              </div>

              <h3 className="mb-2 text-lg font-bold text-white">{member.name}</h3>
              <p className="mb-4 text-sm font-semibold text-[#C9A84C]">{member.role}</p>
              <p className="text-sm text-white/50">Leading innovation in sustainable agritech solutions across Africa.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
