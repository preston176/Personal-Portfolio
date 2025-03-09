import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Resume = () => {
    const EDUCATION_DATA = [
        {
            title: "BSc. Computer Science",
            institution: "University of Eldoret",
            location: "Eldoret, Kenya",
            duration: "2021 - Present",
        },
        {
            title: "Game Development Unity C#",
            institution: "Maliyo Academy",
            location: "Lagos, Nigeria (Remote)",
            duration: "Sept 2024 - Dec 2024",
        },
        {
            title: "ALX Software Engineering Essentials",
            institution: "ALX Africa",
            location: "Nairobi, Kenya",
            duration: "Sept 2023 - Dec 2024",
        },
    ];

    const EXPERIENCE_DATA = [
        {
            title: "Information Technology Intern",
            company: "Elite Global Technologies",
            location: "Lagos, Nigeria (Remote)",
            duration: "Oct 2024 - Jan 2025",
        },
        {
            title: "Content Writer",
            company: "FreeCodeCamp",
            location: "Remote",
            duration: "Aug 2024 - Present",
        },
        {
            title: "Information Technology Trainee",
            company: "KPLC - Lighting Company",
            location: "South Nyanza, Kenya (On-site)",
            duration: "May 2024 - July 2024",
        },
    ];

    return (
        <div className="px-6 md:px-16 mt-12 mb-16" id="resume">
            <h1 className="text-4xl text-primary font-semibold text-center">My Resume</h1>
            
            {/* Timeline Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_3px_1fr] gap-8 mt-12">
                {/* Education Section */}
                <div className="flex flex-col space-y-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
                    {EDUCATION_DATA.map((edu, index) => (
                        <div key={index} className="relative">
                            <Card className="shadow-md border border-gray-700 bg-[#1a1a29] rounded-lg p-6">
                                <CardHeader>
                                    <h3 className="text-xl font-semibold text-primary">{edu.title}</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg text-gray-300">{edu.institution}</p>
                                    <p className="text-md text-gray-500">{edu.location}</p>
                                    <Badge className="mt-2 bg-gray-800 text-gray-300 text-sm">{edu.duration}</Badge>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Vertical Divider (Timeline) */}
                <div className="hidden md:flex flex-col items-center">
                    <div className="w-[3px] bg-gray-700 h-full"></div>
                </div>

                {/* Experience Section */}
                <div className="flex flex-col space-y-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <div key={index} className="relative">
                            <Card className="shadow-md border border-gray-700 bg-[#1a1a29] rounded-lg p-6">
                                <CardHeader>
                                    <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg text-gray-300">{exp.company}</p>
                                    <p className="text-md text-gray-500">{exp.location}</p>
                                    <Badge className="mt-2 bg-gray-800 text-gray-300 text-sm">{exp.duration}</Badge>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resume;
