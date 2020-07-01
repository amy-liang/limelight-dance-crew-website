import { IImage } from "./Interfaces";
import amy from "../images/amy.jpg";
import jess from "../images/jess.jpg";
import emily from "../images/emily.jpg";
import anlin from "../images/anlin.jpg";
import anna from "../images/anna.jpg";
import julia from "../images/julia.jpg";

export class Colors {
    static blue1: string = "#0f1223";
    static blue2: string = "#2A3149";
    static blue3: string = "#343d61";
    static lightBlue: string = "#99AEBC";
    static white: string = "#ffffff";
    static transparentBlue1: string = "rgba(15,18,35,0.3)";
}

export class Dimensions {
    static headerHeight: number = 80;
}

export class Urls {
    static limelightFacebook: string =
        "https://www.facebook.com/limelightdancecrew/";
    static limelightYoutube: string =
        "https://www.youtube.com/channel/UC40GdqVnIsD23o_5fYvy3dQ";
    static limelightInstagram: string =
        "https://www.instagram.com/limelight_dance_crew/";
}

const exec1 = {
    src: anna,
    title: "Anna Wu",
    subtitle: "Co-founder, Director"
};

const exec2 = {
    src: anlin,
    title: "Anlin Tu",
    subtitle: "Co-founder, Director, Videographer, Editor"
};

const exec3 = {
    src: emily,
    title: "Emily Ding",
    subtitle: "Director, Videographer, Editor"
};

const exec4 = {
    src: julia,
    title: "Julia Pu",
    subtitle: "Director, Videographer"
};

const exec5 = {
    src: jess,
    title: "Jessica Jiang",
    subtitle: "Director"
};

const exec6 = {
    src: amy,
    title: "Amy Liang",
    subtitle: "Director, Editor"
};

export class Images {
    static banner: string = "https://i.imgur.com/Wlr40m0.jpg";
    static groupImage: string = "https://i.imgur.com/xQZ0uKj.jpg";
    static victoriaParkPerformance: string = "https://i.imgur.com/CQR9hHB.jpg";
    static execs: IImage[] = [exec1, exec2, exec3, exec4, exec5, exec6];
}
