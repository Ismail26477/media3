import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const teamMembers = [
  {
    id: 1,
    name: "Aditya Deshmukh",
    position: "Founder Director",
    bio: "With over 12 years of experience in the audio and video production industry, Aditya leads Media Works Studio with a strong vision for creativity, innovation, and professional excellence.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PG7TQHfSFeOttKngxOEstuyMlEifow.png",
  },
  {
    id: 2,
    name: "Mangesh Borgaonkar",
    position: "Co-Founder",
    bio: "Mangesh plays an important role in the growth and strategic development of Media Works Studio, contributing to business operations and creative planning.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YhIeujUBvF5I0Ckf8kwoZ0H66mNbob.png",
  },
  {
    id: 3,
    name: "Prasad Pawar",
    position: "Re-Recording Engineer",
    bio: "Prasad specializes in audio balancing, sound enhancement, and final sound mixing with technical precision and attention to detail.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2zsG9XWRrawAFjZRtaHPipDpLsMqHN.png",
  },
  {
    id: 4,
    name: "Mayur Satpute",
    position: "Editor & Colour Artist",
    bio: "Mayur brings stories to life through creative editing and cinematic colour grading, creating visually impactful content.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-21%20at%201.42.11%20PM-bMPXK25XE0fMFnU5VeUai700uuahRv.jpeg",
  },
  {
    id: 5,
    name: "Sumit Patil",
    position: "Recording Engineer",
    bio: "Sumit delivers high-quality audio recordings with clarity and precision, ensuring professional audio production across all media projects.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2HiqlvIYlHG5D8o1ZevFtYVOZPsTgl.png",
  },
  {
    id: 6,
    name: "Shrinivas Lange",
    position: "Foley Artist",
    bio: "Shrinivas specializes in creating realistic sound effects that add depth and authenticity to visual storytelling.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SCBOHz9b5XKj85nXOVxwqZkTF4FGIx.png",
  },
];

const TeamSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      <div className="absolute -right-40 top-1/3 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-6">▸ Our Team</p>
          <h2 className="display-lg text-balance">
            Meet The Creative
            <br />
            <span className="text-primary">Minds Behind Our Success</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 bg-background-elevated border-border">
                <div className="h-64 overflow-hidden bg-muted flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-xs text-primary font-medium">
                      {member.position}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {member.bio}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
