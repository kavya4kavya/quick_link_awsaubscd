export default function EventSocialLinksPage() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("awscc.aub@gmail.com");
      alert("Email copied: awscc.aub@gmail.com");
    } catch {
      window.location.href = "mailto:awscc.aub@gmail.com";
    }
  };
  const links = [
    {
      name: "Email",
      href: "mailto:awscc.aub@gmail.com",
      icon: "✉️",
      desc: "awscc.aub@gmail.com",
      isCopy: true,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/awscc-aub/",
      icon: "💼",
      desc: "Professional updates and announcements",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/awscc_aub",
      icon: "📸",
      desc: "Follow updates, highlights, and stories",
    },
    {
      name: "Meetup",
      href: "https://www.meetup.com/aws-cloud-club-at-amity-university-bengaluru/",
      icon: "📍",
      desc: "Join the community and upcoming sessions",
    },
    {
      name: "Event Website",
      href: "https://awsaubscd.vercel.app",
      icon: "🌐",
      desc: "Schedules, speakers, and registrations",
    },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#7c3aed_0%,_#1e1b4b_35%,_#020617_100%)] text-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-lg">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-6 sm:p-8">
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-purple-400/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-fuchsia-400/10 blur-3xl" />

          <div className="relative z-10 text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-400/10 px-3 py-1 text-xs tracking-[0.2em] uppercase text-purple-200 mb-4">
              Connect With Us
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              AWSCC AUB Social Hub
            </h1>
            <p className="mt-3 text-sm sm:text-base text-purple-100/80">
              AWS Student Community Day • Amity University Bengaluru
            </p>
          </div>

          <div className="relative z-10 space-y-4">
            {links.map((link) => (
              link.isCopy ? (
                <button
                  key={link.name}
                  onClick={copyEmail}
                  className="group w-full flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-300/20 transition-all duration-300 p-4 text-left"
                >
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-300/20 transition-all duration-300 p-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/30 to-fuchsia-400/20 text-xl border border-white/10">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-base sm:text-lg">{link.name}</h2>
                  <p className="text-xs sm:text-sm text-purple-100/70 truncate">{link.desc}</p>
                </div>
                <div className="text-purple-200 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
                              </button>
              ) : (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-300/20 transition-all duration-300 p-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/30 to-fuchsia-400/20 text-xl border border-white/10">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-base sm:text-lg">{link.name}</h2>
                  <p className="text-xs sm:text-sm text-purple-100/70 truncate">{link.desc}</p>
                </div>
                <div className="text-purple-200 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
              </a>
              )
            ))}
          </div>

          <p className="relative z-10 mt-8 text-center text-xs text-purple-100/50">
            Designed for attendee quick access via QR code
          </p>
        </div>
      </div>
    </main>
  );
}
