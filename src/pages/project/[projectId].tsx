import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Project = ({ repository }) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: 'easeOut', duration: 0.15 }}
            className="mt-24 w-full mb-32"
        >
            <h1>Proyecto {repository.name}</h1>
            <p>Descripcion: {repository.description}</p>
        </motion.div>
    );
};

export async function getStaticProps({ params }) {
    const repos = await fetch(
        `https://api.github.com/users/ptzt/repos?type=owner&per_page=10`
    ).then((res) => res.json());

    let topRepos = [];

    if (Array.isArray(repos)) {
        topRepos = repos
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 4);
    }

    const repository = topRepos.find((repo) => repo.id.toString() === params.projectId);

    if (!repository) {
        return {
            notFound: true,
        };
    }

    return {
        props: { repository },
        revalidate: 3600,
    };
}

export async function getStaticPaths() {
    const repos = await fetch(
        `https://api.github.com/users/ptzt/repos?type=owner&per_page=10`
        //`https://jsonplaceholder.typicode.com/users`
    ).then((res) => res.json());

    const paths = repos.map((repo) => {
        return {
            params: {
                projectId: repo.id.toString()
            }
        }
    });

    return {
        paths,
        fallback: false,
    };
}

export default Project;
