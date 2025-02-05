import React, { useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import { Moon, Sun } from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen`}>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-opacity-90 backdrop-blur-md z-50 shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-blue-500">Sanae</span> Ahjoub
        </h1>
        <ul className="flex space-x-4">
          <li><a href="#accueil" className="hover:text-blue-500">Accueil</a></li>
          <li><a href="#apropos" className="hover:text-blue-500">À propos</a></li>
          <li><a href="#projets" className="hover:text-blue-500">Projets</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </nav>

      {/* Header */}
      <header id="accueil" className="flex flex-col items-center justify-center h-screen text-center">
        <Canvas className="w-full h-96">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere visible args={[1, 32, 32]} scale={2}>
            <meshStandardMaterial attach="material" color={darkMode ? "#1e40af" : "#3b82f6"} />
          </Sphere>
        </Canvas>
        <h1 className="text-4xl font-bold mt-4">Sanae Ahjoub</h1>
        <p className="text-lg mt-2">Développeuse passionnée par le design 3D et l'innovation.</p>
        <div className="mt-4">
          <a href="#apropos" className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-2">
            En savoir plus
          </a>
          <a href="/cv/sanae-cv.pdf" download className="btn btn-secondary border border-gray-300 py-2 px-4 rounded-lg">
            Télécharger mon CV
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="apropos" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold mb-8">À Propos de Moi</h2>
          <div className="flex justify-center gap-8">
            {[
              { skill: "JavaScript", color: "text-yellow-500", percent: 90 },
              { skill: "CSS", color: "text-blue-500", percent: 80 },
              { skill: "HTML", color: "text-orange-500", percent: 95 },
              { skill: "Bootstrap", color: "text-purple-500", percent: 75 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div
                  className={`w-24 h-24 rounded-full border-8 border-gray-200 flex items-center justify-center ${item.color}`}
                >
                  <span className="text-xl font-bold">{item.percent}%</span>
                </div>
                <h3 className="mt-4">{item.skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold mb-8">Mes Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Calculatrice en JS",
                description: "Une calculatrice interactive développée en JavaScript.",
                image: "IMAGES/image.png",
              },
              {
                title: "Gestion des tâches en JS",
                description: "Une application de gestion de tâches en JavaScript.",
                image: "IMAGES/task-manager.jpg",
              },
              {
                title: "Gestion de produits en JS",
                description: "Une application de gestion de produits en JavaScript.",
                image: "IMAGES/product-manager.jpg",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold mb-8">Contact</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            />
            <textarea
              placeholder="Votre message"
              rows="5"
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="text-center">
          &copy; 2025 Sanae Ahjoub. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

export default App;