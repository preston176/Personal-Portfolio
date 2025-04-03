export const SkillIcon = ({ component }: { component: React.ElementType }) => {
    const Component = component;

    return (
        <>
            <Component className="size-10 text-green-500 fill-[url[#tech-icon-gradient)]" />
            <svg className="size-0 absolute">
                <linearGradient id="tech-icon-gradient">
                    <stop offset="0%" stopColor="rgb(34 197 94)" />  {/* Green-500 */}
                    <stop offset="100%" stopColor="rgb(22 163 74)" /> {/* Green-400 */}
                </linearGradient>
            </svg>
        </>
    );
};
