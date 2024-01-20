"use client";
import {AiFillThunderbolt} from "react-icons/ai";
import Button from "@/components/atoms/Button";
import {useState} from "react";
import Modal from "@/components/organismes/Modal";
import MoviePreview from "@/components/organismes/MoviePreview";

export default function RandomMovie () {

    const movie = {
        id: 1,
        title: 'Chicken Run: Dawn of the Nugget',
        poster_path: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/exNtEY8QUuQh9e23wSQjkPxKIU3.jpg',
        backdrop_path: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/bmlkLCjrIWnnZzdAQ4uNPG9JFdj.jpg'
    };

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <section className="w-full my-24 flex flex-col items-center relative">
                <div className="w-2/6 absolute h-40">
                    <div style={{boxShadow: 'rgb(99, 179, 237) 0px 0px 80px 50px'}}
                         className="z-0 absolute top-1/4 left-3/4 rounded-full"></div>
                    <div style={{boxShadow: 'rgb(99, 179, 237) 0px 0px 100px 80px'}}
                         className="z-0 absolute top-3/4 right-3/4 rounded-full"></div>
                </div>
                <div className="flex flex-col items-center gap-3 my-8 mx-4 z-10">
                    <h2 className="text-2xl font-medium mt-4 ml-6 text-center">Pas d'inspiration ?</h2>
                    <p className="text-lg text-center">
                        On a pensé à vous, voici un film que vous pourriez aimer
                    </p>
                </div>

                <Button
                    handleClick={openModal}
                    title="Contenu aléatoire"
                    icon={<AiFillThunderbolt/>}
                    hasBackground
                    className={'z-10'}/>
            </section>

            {showModal && (
                <Modal onClose={closeModal}>
                    <MoviePreview backdrop_path={movie.backdrop_path} id={movie.id} title={movie.title} />
                </Modal>
            )}
        </>
    );
}