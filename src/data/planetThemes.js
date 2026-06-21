import earth from "../assets/planets/real/earthbg.png";
import mars from "../assets/planets/real/marsbg.png";
import saturn from "../assets/planets/real/saturnbg.png";
import jupiter from "../assets/planets/real/jupiterbg.png";
import neptune from "../assets/planets/real/neptunebg.png";
import mercury from "../assets/planets/real/mercurybg.png";
import uranus from "../assets/planets/real/uranusbg.png";
import venus from "../assets/planets/real/venusbg.png";

import candyorange from "../assets/planets/fantasy/candyorangerb.png";
import cottonpink from "../assets/planets/fantasy/cottonpinkrb.png";
import cyberblue from "../assets/planets/fantasy/cyberbluerb.png";
import destroyred from "../assets/planets/fantasy/destroyredrb.png";
import liquidyellow from "../assets/planets/fantasy/liquidyellowrb.png";
import mossgreen from "../assets/planets/fantasy/mossgreenrb.png";
import sodablue from "../assets/planets/fantasy/sodabluerb.png";
import toypurple from "../assets/planets/fantasy/toypurplerb.png";

export const planetThemes = {
  realistic: [
    { id: 1, name: "Earth", image: earth, x: "15%", y: "40%" },
    { id: 2, name: "Mars", image: mars, x: "40%", y: "20%" },
    { id: 3, name: "Saturn", image: saturn, x: "70%", y: "45%" },
    { id: 4, name: "Jupiter", image: jupiter, x: "80%", y: "20%" },
    { id: 5, name: "Neptune", image: neptune, x: "80%", y: "70%" },
    { id: 6, name: "Mercury", image: mercury, x: "25%", y: "75%" },
    { id: 7, name: "Uranus", image: uranus, x: "35%", y: "50%" },
    { id: 8, name: "Venus", image: venus, x: "60%", y: "80%" },
  ],

  fantasy: [
    { id: 1, name: "CandyO", image: candyorange, x: "15%", y: "40%" },
    { id: 2, name: "CottonP", image: cottonpink, x: "40%", y: "20%" },
    { id: 3, name: "CyberB", image: cyberblue, x: "70%", y: "45%" },
    { id: 4, name: "DestroyR", image: destroyred, x: "80%", y: "20%" },
    { id: 5, name: "LiquidY", image: liquidyellow, x: "80%", y: "70%" },
    { id: 6, name: "MossG", image: mossgreen, x: "25%", y: "75%" },
    { id: 7, name: "SodaB", image: sodablue, x: "35%", y: "50%" },
    { id: 8, name: "ToyP", image: toypurple, x: "60%", y: "80%" },
  ],

};