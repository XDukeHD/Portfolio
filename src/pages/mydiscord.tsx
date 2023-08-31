import { useEffect } from 'react';

const MyDiscordPage = () => {
  useEffect(() => {
    // Redirecionar para o link que você deseja quando a página é carregada
    window.location.href = 'https://discordapp.com/users/816775306115285073';
  }, []);

  return null;
};

export default MyDiscordPage;