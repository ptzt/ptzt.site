import { motion } from 'framer-motion';
import projectsData from '../../data/projectsData';

interface ProjectProps {
    project: {
        id: number;
        name: string;
        description: string;
        language: string;
    };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: 'easeOut', duration: 0.15 }}
            className="mt-24 w-full mb-32"
        >
            <h1>Proyecto {project.name}</h1>
            <p>Descripción: {project.description}</p>
        </motion.div>
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
                language: project.language
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
