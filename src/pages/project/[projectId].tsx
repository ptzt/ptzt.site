import { motion } from 'framer-motion';
import projectsData from '../../data/projectsData';
import {
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiJavascript,
    SiPython
} from "react-icons/si";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import FsLightbox from "fslightbox-react";

const languageIcons = {
    TypeScript: <SiTypescript size={32} />,
    JavaScript: <SiJavascript size={32} />,
    Python: <SiPython size={32} />,
    "React Native": <SiReact size={32} />
    // Agrega más iconos para otros lenguajes aquí
};

interface ProjectProps {
    project: {
        id: number;
        name?: string;
        description?: string;
        language?: string;
        images?: string[];
        repo?: string;
        deploy?: string;
    };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
    const [toggler, setToggler] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: 'easeOut', duration: 0.15 }}
            className="mt-24 w-full mb-32"
        >
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">
                {project.name}
            </h1>
            <div className="flex items-center mb-4">
                {languageIcons[project.language] || languageIcons.default}
                <p className="text-gray-600 dark:text-gray-400 leading-6 tracking-wide ml-2">
                    {project.language}
                </p>
            </div>
            <p className="text-gray-900 dark:text-gray-300 leading-6 tracking-wide mb-12">
                {project.description}
            </p>

            {/* Mapear las imágenes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                {project.images?.map((imageUrl, index) => (
                    <Image
                        key={index}
                        src={imageUrl}
                        alt={`Imagen ${index + 1}`}
                        width={500}
                        height={500}
                        style={{ height: "200px", objectFit: "cover" }}
                        onClick={() => setToggler(!toggler)}
                        className='hover:opacity-50 cursor-pointer rounded-xl'
                    />

                ))}
                <FsLightbox
                    toggler={toggler}
                    sources={project.images}
                />
            </div>



            {/* Botones */}
            <div className="flex justify-between mt-10">
                {project.repo && project.repo !== "" && (
                    <Link href={project.repo} target="_blank">
                        <button className="dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-black hover:text-white">
                            Ver código
                        </button>
                    </Link>
                )}
                {project.deploy && project.deploy !== "" && (
                    <Link href={project.deploy} target="_blank">
                        <button className="dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-black hover:text-white">
                            Ver deploy
                        </button>
                    </Link>
                )}
            </div>
        </motion.div >
    );
};


export async function getStaticProps({ params }: { params: { projectId: string } }) {
    const projectId = params.projectId;

    // Obtener el proyecto específico del array de datos
    const project = projectsData.find((item) => item.id.toString() === projectId);

    if (!project) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            project: {
                id: project.id,
                name: project.name,
                description: project.description,
                language: project.language,
                images: project.images,
                repo: project.repo,
                deploy: project.deploy
            },
        },
        revalidate: 3600,
    };
}

// Esta función debe retornar los paths con los projectId válidos
export async function getStaticPaths() {
    const paths = projectsData.map((project) => {
        return {
            params: {
                projectId: project.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export default Project;
