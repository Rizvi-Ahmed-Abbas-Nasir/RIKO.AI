import {
  Send,
  Plus,
  PenLine,
  Hash,
  TrendingUp,
  BarChart3,
  Lightbulb,
  Sparkles,
  Zap,
  Brain,
  Rocket
} from "lucide-react";

export default function RikoHome() {
  const actions = [
    { label: "Write Caption", icon: PenLine },
    { label: "Find Hashtags", icon: Hash },
    { label: "What's Trending", icon: TrendingUp },
    { label: "Analyze Competitor", icon: BarChart3 },
    { label: "Create Content Ideas", icon: Lightbulb },
    { label: "Improve My Content", icon: Sparkles },
  ];

  const features = [
    { text: "Speed up your content creation", icon: Zap },
    { text: "Get creative ideas & insights", icon: Brain },
    { text: "Optimize your posts like a pro", icon: Rocket },
  ];

  return (
    <div className="min-h-screen bg-[#F1F2ED]">
      <div className="w-full">
        <div className="relative w-full rounded-xl bg-gradient-to-b from-[#FFF8EE]/80 via-[#FFEFEA]/60 to-[#FBF5FF]/60">

          <header className="flex items-center justify-between bg-white rounded-t-xl px-6 py-4">
            <div className="flex items-center gap-3">
    <img
      src="/logo.png"   
      alt="Riko.ai"
      className="h-8 w-auto"
    />
  </div>
            <div className="flex gap-3">
              <button className="px-4 py-1.5 text-sm border border-[#F3A547] text-[#F3A547] rounded-lg">
                Login
              </button>
              <button className="px-4 py-1.5 text-sm bg-[#F3A547] rounded-lg text-white">
                Sign Up
              </button>
            </div>
          </header>

          <section className="flex flex-col items-center text-center px-6 py-16">
            <img src="/mainLogo.png" alt="Riko" className="h-28 mb-6" />

            <h1 className="text-3xl font-semibold mb-6">
              Ask <span className="text-orange-500">Riko</span> Anything
            </h1>

          
            <div className="w-full max-w-xl flex items-center bg-[#FAFAF8] border border-[#FFEBD3] rounded-full px-4 py-2 shadow">
              <Plus className="w-4 h-4 text-orange-500" />
              <input
                placeholder="Ask anything..."
                className="flex-1 bg-transparent px-3 py-1 text-sm focus:outline-none"
              />
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>

         
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              {actions.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-[#FAFAF8] border border-[#FEDEB8] rounded-xl hover:shadow-sm transition"
                >
                  <Icon className="w-4 h-4 text-orange-500" />
                  {label}
                </button>
              ))}
            </div>
          </section>

       
          <section className="px-6 pb-10">
            <p className="text-center text-lg mb-6 text-[#604F4A]">
              Power up your social game with Riko’s AI-driven tools!
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              {features.map(({ text, icon: Icon }) => (
                <div
                  key={text}
                  className="bg-[#FBF0EC] border border-[#F5DFD8] rounded-2xl px-6 py-5 shadow-sm text-center max-w-xs flex flex-col items-center gap-3"
                >
                  <Icon className="w-6 h-6 text-orange-500" />
                  <p className="text-sm text-[#504643]">{text}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
