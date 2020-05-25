import { IImage } from "./Interfaces"

export class Colors {
    static mainBlue: string = "#0F1223";
    static secondaryBlue: string = "#2A3149";
    static lightBlue: string = "#99AEBC";
    static white: string = "#ffffff";
}

export class Dimensions {
    static headerHeight: number = 80;
}

const exec1 = {
    url: "https://scontent-yyz1-1.xx.fbcdn.net/v/t31.0-1/c119.29.1333.1333a/s480x480/27173840_1219997254811326_3049876508667507278_o.jpg?_nc_cat=106&_nc_sid=dbb9e7&_nc_ohc=70wAm_YkwJcAX_1PkFO&_nc_ht=scontent-yyz1-1.xx&oh=00d08f90a8ac584f99809b5eb8c2377e&oe=5EEFF4B5",
    title: "Anna Wu",
    subtitle: "Co-founder, Director"
};

const exec2 = {
    url: "data:image/jpeg;base64,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",
    title: "Anlin Tu",
    subtitle: "Co-founder, Director, Videographer, Editor"
};

const exec3 = {
    url: "https://scontent.fybz2-2.fna.fbcdn.net/v/t31.0-8/28235074_1460419844066764_8345448215658430596_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=wmy6ozy4sOsAX_f8Zit&_nc_ht=scontent.fybz2-2.fna&oh=42d64b5cfee4fe028a4b6616d34ef658&oe=5EF01C68",
    title: "Emily Ding",
    subtitle: "Director, Videographer, Editor"
};

const exec4 = {
    url: "https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/30624402_10155542588092709_179887244834766848_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=TZwOq-0R64wAX-5oSnm&_nc_ht=scontent.fybz2-1.fna&oh=5fe1d828c64cc5eeaf36f92c347c3c9d&oe=5EEED2ED",
    title: "Julia Pu",
    subtitle: "Director, Videographer"
};

const exec5 = {
    url: "https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-1/p480x480/71516547_10157443750682593_2226471816015118336_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=HyCX2_2ZnyEAX9A64cR&_nc_ht=scontent.fybz2-2.fna&_nc_tp=6&oh=f8ff6c1a4026f6c36429db112949e303&oe=5EEF8A80",
    title: "Jessica Jiang",
    subtitle: "Director"
};

const exec6 = {
    url: "https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-19/s320x320/92481724_543128233250435_1991198240594198528_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_ohc=5oKdvlqKUIAAX_Cu5HZ&oh=8c36ccad6ac6aaad16f0327336e95a97&oe=5EF535A5",
    title: "Amy Liang",
    subtitle: "Director, Editor"
};

export class Images {
    static banner: string = "https://i.imgur.com/Wlr40m0.jpg";
    static groupImage: string = "https://i.imgur.com/xQZ0uKj.jpg";
    static execs: IImage[] = [exec1, exec2, exec3, exec4, exec5, exec6];
}