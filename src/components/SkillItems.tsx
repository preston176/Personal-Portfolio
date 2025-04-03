import { SkillIcon } from "@/components/SkillIcon";
import { twMerge } from "tailwind-merge";

type Props = {
    skillSet: {
        title: string;
        icon: React.ElementType;

    }[],
    className?: string;
    skillWrapperClassName?: string
}


export const SkillItems = ({ skillSet, className, skillWrapperClassName }: Props) => {
    return (
        <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)", className)}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", skillWrapperClassName)}>
                {skillSet.map((skill, index) => (
                    <div key={index} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                        <SkillIcon component={skill.icon} />
                        <span className="font-semibold">{skill.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}