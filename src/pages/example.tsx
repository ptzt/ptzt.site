import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Example = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/projects');
                const data = await response.json();
                setProjects(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProjects();
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: 'easeOut', duration: 0.15 }}
            className="mt-24 w-full mb-32"
        >
            <h1>Pruebas con Notion</h1>
            {projects.length > 0 ? (
                projects.map((project) => (
                    <div key={project.id}>
                        <h2>{project.properties.title.rich_text[0].plain_text}</h2>
                        {project.properties.img.files.length > 0 && (
                            <img src={project.properties.img.files[0].file.url} alt="Imagen del proyecto" />
                        )}
                        <p>{project.properties.description.rich_text[0].plain_text}</p>
                    </div>
                ))
            ) : (
                <p>No se encontraron proyectos.</p>
            )}
        </motion.div>
    );
};

export default Example;
