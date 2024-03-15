import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Izzys',
    description: 'Izzys is a multifunctional bot for Discord, packed with various functions for entertainment and moderation.',
    image: '/izzys.png', // Caminho da imagem do botão
    modalImage: '/izzys-prev.png', // Caminho da imagem no modal
    modalTitle: 'Izzys',
    modalDescription: 'Discover with Izzys™! Custom commands, quick giveaways, detailed logs, and simple configurations. Simplify and enhance your experience today!',
  },
  {
    id: 2,
    title: 'Z-bio',
    description: 'Z-bio is a modern and stylish platform for creating your own online biography.',
    image: '/zbio.jpg', // Caminho da imagem do botão
    modalImage: '/zbio-prev.png', // Caminho da imagem no modal
    modalTitle: 'Z-bio',
    modalDescription: 'Make yourself stand out, meet new people and bring new faces to your team. Start introducing yourself to the world.',
  },
  
];

export function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    image: '',
    title: '',
    description: '',
  });

  const openModal = (project) => {
    setModalContent(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="portfolio"
      className="portfolio"
      style={{ background: "#000", color: "var(--bs-indigo)" }}
    >
      <h2
        className="text-uppercase text-center"
        style={{ font: "normal normal bold 3rem/2rem Borel", color: "#fff" }}
      >
        Projects
      </h2>
      <hr className="star-dark mb-5" />
    <div className="flex flex-wrap justify-center items-center">
      {projects.map((project) => (
        <div key={project.id} className="w-full md:w-1/3 p-4 flex justify-center">
          <div className="bg-gray-800 p-6 rounded-lg relative">
            <div className="absolute top-2 right-2 w-16 h-16">
              <img
                src={project.image}
                alt="Preview"
                width={150}
                height={150}
                className="rounded-md cursor-pointer"
                onClick={() => openModal(project)}
              />
            </div>
            <h2 className="text-lg text-white font-medium title-font mb-4">{project.title}</h2>
            <p className="leading-relaxed text-white">{project.description}</p>
            <button
              className="text-purple-400 inline-flex items-center mt-4"
              onClick={() => openModal(project)}
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-gray-800 p-8 rounded-lg relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={modalContent.modalImage} 
            width={650}
            height={450}
            alt="Modal Image" className="mx-auto mb-4" />
            <h2 className="text-lg font-medium mb-2">{modalContent.modalTitle}</h2>
            <p className="text-violet break-all">{modalContent.modalDescription}</p>
            <br></br>
            <a href="#" className="block text-center bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700">
              Link do site
            </a>
          </div>
        </div>
      )}
    </div>
    </section>
  );
}

    {/*
    <section
      id="portfolio"
      className="portfolio"
      style={{ background: "#000", color: "var(--bs-indigo)" }}
    >
      <h2
        className="text-uppercase text-center"
        style={{ font: "normal normal bold 3rem/2rem Borel", color: "#fff" }}
      >
        Projects
      </h2>
      <hr className="star-dark mb-5" />
  */}
      