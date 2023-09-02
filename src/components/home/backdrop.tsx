import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Izzys from '../../public/img/izzys1.png';

const Backdrop = ({ imageUrl, externalLink }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="relative">
      <div className="lightBox">
        <Image
          src={Izzys}
          alt="Imagem"
          onClick={toggleDetails}
            className="cursor-pointer"
            style={{ width: "100%", height: "100%" }}
        />
      </div>

      {showDetails && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-100 flex justify-center items-center">
            <div className="bg-light p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 mr-2 rounded-full overflow-hidden">
                            
                    <h2 className="text-xl font-bold">Detalhes da Foto</h2>
                    <button onClick={toggleDetails}>X</button>
                </div>
                <p>Detalhes da Foto</p>
            </div>
            </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Backdrop;