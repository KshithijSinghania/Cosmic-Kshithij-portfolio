import { Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects=[
    {
        id:1,
        title:"Multilingual-OCR Model",
        description:"A Multilingual OCR Model using CNN and openCV",
        image:"/Projects/MultilingualOCR.png",
        tags:["Tensorflow","CNN","CV2"],
        githubUrl:"https://github.com/KshithijSinghania/Multilingual-OCR-ML",
    }
];

export const ProjectSection=()=>{
    return(
        <section id="projects" className="py-24 px-4 relative ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="font-bold text-3xl md:text-4xl mb-4 text-center">Featured<span className="text-primary"> Projects</span></h2>
                <p className="text-centre text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted
                    with attention to detail, performance, and user experience. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key)=>(
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden ">
                                <img src={project.image} alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6 ">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag)=>(
                                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/30 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a target="_blank" href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}></Github></a>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12 ">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/KshithijSinghania">Check My Github <ArrowRight size={16}/></a>
                </div>
            </div>
        </section>
    );
};