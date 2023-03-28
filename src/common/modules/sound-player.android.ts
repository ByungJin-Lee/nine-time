import SPlayer from 'react-native-sound-player';

const SoundPlayer = {
  play(sourceUrl: string, type: string) {
    SPlayer.playSoundFile(sourceUrl, type);
  },
  stop() {
    SPlayer.stop();
  },
};

export default SoundPlayer;
