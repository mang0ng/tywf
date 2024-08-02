import { createBoard } from '@wixc3/react-board';
import { GoogleMap } from '../../../components/google-map/google-map';

export default createBoard({
    name: 'GoogleMap',
    Board: () => (
        <GoogleMap embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1070.5767338724731!2d-117.74406754354561!3d33.672636193597675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd47b0f61a7b%3A0xcbe9efed720dac0a!2sGreat%20Park!5e0!3m2!1sen!2sus!4v1722581038818!5m2!1sen!2sus" />
    ),
    isSnippet: true,
    environmentProps: { windowHeight: 800, canvasWidth: 800, canvasHeight: 800, windowWidth: 800 },
});
