import {ReactComponent as Heart} from "../../../assets/icons/heart.svg";
import {ReactComponent as Pin} from "../../../assets/icons/pin.svg";
import {ReactComponent as Clock} from "../../../assets/icons/clock.svg";
import {ReactComponent as Confettie} from "../../../assets/icons/confettie.svg";
import {ReactComponent as Home} from "../../../assets/icons/home.svg";

export const categories = [
    {
        name: 'All pets',
        icon: <Heart />
    },
    {
        name: 'Location specific',
        icon: <Pin />
    },
    {
        name: 'Age specific',
        icon: <Clock />
    },
    {
        name: 'Available now',
        icon: <Confettie />
    },
    {
        name: 'For small or big homes',
        icon: <Home />
    },
]
