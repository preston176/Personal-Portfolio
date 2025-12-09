import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
// import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Emmanuel Shikuku",
    position: "CEO @ Calatech",
    text: "Whether he's diving into frontend frameworks or backend technologies, Preston's ability to innovate and adapt is remarkable. His technical depth consistently exceeds expectations.",
    avatar: memojiAvatar3,
  },
  {
    name: "FlowLens User",
    position: "Senior Developer",
    text: "This extension saved me hours of context-switching pain. Finally, a tool that understands how developers actually work. The privacy-first approach is exactly what I needed.",
    avatar: memojiAvatar4,
  },
  {
    name: "Nexus AI User",
    position: "Content Manager",
    text: "Nexus AI transformed how our team searches through documentation. What used to take 15 minutes now takes seconds. The AI responses are impressively accurate.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container ">
        <SectionHeader
          title="Real Impact, Real Feedback"
          eyebrow="User Testimonials"
          description="From users, collaborators, and industry leaders"
        />


        <div className="mt-16 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 flex-none animate-move-left  [animation-duration:60s]" >
            {[...new Array(2).fill(0)].map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="max-w-xs p-6 md:p-8 md:max-w-md">
                    <div className="flex items-center gap-4">
                      <div className="size-14 bg-gray-700 rounded-full flex flex-shrink-0 items-center justify-center">
                        <Image src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} width={56} height={56} />
                      </div>

                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-white/60">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-6 text-sm md:text-base text-white/80">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};
