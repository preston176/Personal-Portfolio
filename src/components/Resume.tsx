
const Resume = () => {
    const EDUCATION_DATA = [
        {
            education: "BSc. Computer Science",
            institution: "University of Eldoret",
            place_of_study: "Eldoret, Kenya",
            duration: "2021 - Present",
            descrtiption: ""
        },
    ]

    const EXPERIENCE_DATA = [{
        position: "Kenya Power And Lighting Company Trainee",
        place_of_work: "South Nyanza, Kenya",
        duration: "May 2024 - July 2024",
        description: " Gained Practical Experience on Data Networks(Fiber Optics,VHF Radios), End User ICT-Support, Power Systems Communication"
    },]

    return (
        <div className=" text-primary font-semibold min-h-fit px-5">
            <div className="container mx-auto py-10">
                <h1 className=" text-3xl mt-5 font-semibold mb-8">My Resume</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-10 relative">
                    {/* Education Section */}
                    <div className="relative">
                        <h2 className="text-2xl font-bold mb-8 text-light">Education</h2>
                        {
                            EDUCATION_DATA.map((edu, index) => (
                                <div key={index} className="mb-0 pb-5 border-l-2 border-primary  pl-5 relative">
                                    <div className="absolute left-0 -ml-2 w-4 h-4 bg-gray-900 border-2 border-primary  rounded-full"></div>
                                    <h3 className="text-xl font-semibold">{edu.education}</h3>
                                    <p className="text-gray-400">{edu.duration}</p>
                                    <p className="text-lg font-semibold">{edu.place_of_study}</p>
                                    <p className="text-gray-500">
                                        {edu.descrtiption}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    {/* Experience Section */}
                    <div className="relative">
                        <h2 className="text-2xl font-bold mb-8 text-light">Experience</h2>
                        {
                            EXPERIENCE_DATA.map((exp, index) => (
                                <div key={index} className="mb-0 pb-5 border-l-2 border-primary pl-5 relative">
                                    <div className="absolute left-0 -ml-2 w-4 h-4 bg-gray-900 border-2 border-primary rounded-full"></div>
                                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                                    <p className="text-gray-400">{exp.duration}</p>
                                    <p className="text-lg font-semibold">{exp.place_of_work}</p>
                                    <p className="text-gray-500">
                                        {exp.description}
                                    </p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
