"use client";

import Image from "next/image";

export default function EventSocialLinksPage() {
  const links = [
    {
      name: "Email",
      href: "mailto:awscc.aub@gmail.com",
      logo: "/cloudClub.png",
      desc: "awscc.aub@gmail.com",
      isCopy: true,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/awscc-aub/",
      logo: "/linkedin.png",
      desc: "Professional updates and announcements",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/awscc_aub",
      logo: "/instagram.png",
      desc: "Follow updates, highlights, and stories",
    },
    {
      name: "Meetup",
      href: "https://www.meetup.com/aws-cloud-club-at-amity-university-bengaluru/",
      logo: "/meetup.png",
      desc: "Join the community and upcoming sessions",
    },
    {
      name: "Event Website",
      href: "https://awsaubscd.vercel.app",
      logo: "/aws-scd-banner.png",
      desc: "Schedules, speakers, and registrations",
    },
    {
      name: "Amity University",
      href: "https://www.amity.edu/bengaluru/",
      logo: "/aub_blue.png",
      desc: "Learn more about the college",
    },
  ];

  const renderLinkIcon = (link: (typeof links)[number]) => {
    if (link.logo) {
      return (
        <Image
          src={link.logo}
          alt={`${link.name} logo`}
          fill
          sizes="80px"
          className="object-contain"
        />
      );
    }

    return link.icon;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("awscc.aub@gmail.com");
      alert("Email copied: awscc.aub@gmail.com");
    } catch {
      window.location.href = "mailto:awscc.aub@gmail.com";
    }
  };

  const getIconContainerClass = (link: (typeof links)[number]) => {
    if (link.logo) {
      return "relative flex h-10 w-20 items-center justify-center overflow-hidden rounded-xl border border-[hsl(262_32%_88%)] bg-[hsl(0_0%_100%)]";
    }

    return "relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[hsl(262_32%_88%)] bg-linear-to-br from-[hsl(268_68%_92%)] to-[hsl(287_74%_72%/.45)] text-xl text-[hsl(262_32%_18%)]";
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,hsl(287_74%_72%/.2)_0%,hsl(268_68%_92%/.5)_28%,hsl(262_100%_97%)_68%)] text-[hsl(262_32%_18%)] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-lg">
        <div className="relative overflow-hidden rounded-3xl border border-[hsl(262_32%_88%/.9)] bg-[hsl(0_0%_100%/.86)] backdrop-blur-xl shadow-[0_16px_56px_hsl(268_68%_55%/.1)] p-6 sm:p-8">
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[hsl(268_68%_55%/.18)] blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[hsl(287_74%_72%/.2)] blur-3xl" />

          <div className="relative z-10 text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(262_32%_88%)] bg-[hsl(268_68%_92%)] px-3 py-1 text-xs tracking-[0.2em] uppercase text-[hsl(268_68%_35%)] mb-4">
              Connect With Us
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              AWSCC AUB Social Hub
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[hsl(262_28%_44%)]">
              AWS Student Community Day • Amity University Bengaluru
            </p>
          </div>

          <div className="relative z-10 space-y-4">
            {links.map((link) =>
              link.isCopy ? (
                <button
                  key={link.name}
                  onClick={copyEmail}
                  className="group w-full flex items-center gap-4 rounded-2xl border border-[hsl(262_32%_88%)] bg-[hsl(0_0%_100%/.78)] hover:bg-[hsl(268_68%_92%/.6)] hover:border-[hsl(268_68%_55%/.45)] transition-all duration-300 p-4 text-left"
                >
                  <div className={getIconContainerClass(link)}>
                    {renderLinkIcon(link)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-base sm:text-lg">{link.name}</h2>
                    <p className="text-xs sm:text-sm text-[hsl(262_28%_44%)] break-all">{link.desc}</p>
                  </div>
                  <div className="text-[hsl(268_68%_55%)] group-hover:translate-x-1 transition-transform duration-300">
                    Copy
                  </div>
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-[hsl(262_32%_88%)] bg-[hsl(0_0%_100%/.78)] hover:bg-[hsl(268_68%_92%/.6)] hover:border-[hsl(268_68%_55%/.45)] transition-all duration-300 p-4"
                >
                  <div className={getIconContainerClass(link)}>
                    {renderLinkIcon(link)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-base sm:text-lg">{link.name}</h2>
                    <p className="text-xs sm:text-sm text-[hsl(262_28%_44%)] truncate">{link.desc}</p>
                  </div>
                  <div className="text-[hsl(268_68%_55%)] group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </div>
                </a>
              )
            )}
          </div>

          <p className="relative z-10 mt-8 text-center text-xs text-[hsl(262_28%_44%)]">
            
          </p>
        </div>
      </div>
    </main>
  );
}