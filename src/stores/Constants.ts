import { IImage } from "./Interfaces";

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
    url:
        "https://scontent-yyz1-1.xx.fbcdn.net/v/t31.0-1/c119.29.1333.1333a/s480x480/27173840_1219997254811326_3049876508667507278_o.jpg?_nc_cat=106&_nc_sid=dbb9e7&_nc_ohc=70wAm_YkwJcAX_1PkFO&_nc_ht=scontent-yyz1-1.xx&oh=00d08f90a8ac584f99809b5eb8c2377e&oe=5EEFF4B5",
    title: "Anna Wu",
    subtitle: "Co-founder, Director"
};

const exec2 = {
    url:
        "https://media-exp1.licdn.com/dms/image/C5103AQE3dthNCDTveg/profile-displayphoto-shrink_800_800/0?e=1596067200&v=beta&t=1r2tvOkBNLFbDnKeIsUBLaE5b-QE-pPMlSNm_htP5UE",
    title: "Anlin Tu",
    subtitle: "Co-founder, Director, Videographer, Editor"
};

const exec3 = {
    url:
        "https://scontent.fybz2-2.fna.fbcdn.net/v/t31.0-8/28235074_1460419844066764_8345448215658430596_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=wmy6ozy4sOsAX_f8Zit&_nc_ht=scontent.fybz2-2.fna&oh=42d64b5cfee4fe028a4b6616d34ef658&oe=5EF01C68",
    title: "Emily Ding",
    subtitle: "Director, Videographer, Editor"
};

const exec4 = {
    url:
        "https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/30624402_10155542588092709_179887244834766848_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=TZwOq-0R64wAX-5oSnm&_nc_ht=scontent.fybz2-1.fna&oh=5fe1d828c64cc5eeaf36f92c347c3c9d&oe=5EEED2ED",
    title: "Julia Pu",
    subtitle: "Director, Videographer"
};

const exec5 = {
    url:
        "https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-1/p480x480/71516547_10157443750682593_2226471816015118336_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=HyCX2_2ZnyEAX9A64cR&_nc_ht=scontent.fybz2-2.fna&_nc_tp=6&oh=f8ff6c1a4026f6c36429db112949e303&oe=5EEF8A80",
    title: "Jessica Jiang",
    subtitle: "Director"
};

const exec6 = {
    url:
        "https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-19/s320x320/92481724_543128233250435_1991198240594198528_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_ohc=5oKdvlqKUIAAX_Cu5HZ&oh=8c36ccad6ac6aaad16f0327336e95a97&oe=5EF535A5",
    title: "Amy Liang",
    subtitle: "Director, Editor"
};

export class Images {
    static banner: string = "https://i.imgur.com/Wlr40m0.jpg";
    static groupImage: string = "https://i.imgur.com/xQZ0uKj.jpg";
    static victoriaParkPerformance: string = "https://i.imgur.com/CQR9hHB.jpg";
    static execs: IImage[] = [exec1, exec2, exec3, exec4, exec5, exec6];
}
